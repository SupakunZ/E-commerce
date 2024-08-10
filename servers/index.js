const express = require('express')
const app = express()
const PORT = 4000
// Library
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path') // Module ที่ใช้ทำงานกับไฟล์
const multer = require('multer') // Middleware ที่ช่วยจัดการการอัพโหลดไฟล์ในฝั่ง Node.js
const jwt = require('jsonwebtoken')
const connectDB = require('./db/ConnectDB')
const modelSchema = require('./models/Models')
const UserSchema = require('./models/UserModel')
const { error } = require('console')

app.use(express.json())
app.use(cors())

//Contect Databases
connectDB()

// API Create
app.get('/', (req, res) => {
  res.send('Hello')
})

// Create Data to Databases
app.post('/addproduct', async (req, res) => {
  let products = await modelSchema.find({})
  let id
  // Logic Auto increment ID
  if (products.length > 0) { // ถ้า db มีข้อมูล
    let last_product_array = products.slice(-1) //เอาแค่ตัวสุดท้ายมา
    let last_product = last_product_array[0]
    id = last_product.id + 1 // เข้าถึง id แล้วบวกไอดีต่อไป
  } else {
    id = 1;
  }
  const product = new modelSchema({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    data: req.body.data,
    avilable: req.body.avilable
  })
  console.log(product)
  await product.save()
  console.log('Success')
  res.json({ success: true, name: req.body.name })
})

// Delete Data
app.post('/removeproduct', async (req, res) => {
  await modelSchema.findOneAndDelete({ id: req.body.id })
  console.log('Remove')
  res.json({ success: true, name: req.body.name })
})

// Image Storage สร้าง Folder ใชัเก็บรูปที่ส่งมา
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => { // รับไฟล์ที่ส่งมา
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({ storage: storage })

//Create Upload Route
app.use('/images', express.static('upload/images')) // อนุญาตมให้เข้าถึงโฟเดอร์ upload/images 
app.post('/upload', upload.single('product'), (req, res) => { // upload file จาก form ที่ส่งมา name: product ลงใน /upload
  console.log(req.file)
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`
  })
})

// Creating API for getting all
app.get('/allproducts', async (req, res) => {
  let products = await modelSchema.find({});
  console.log('All Products Fetched')
  res.send(products)
})

//** Create Endpoint for registering the user */
app.post('/singup', async (req, res) => {
  try {
    // เช็ตว่าใน database มีข้อมู email นี้ไหม 
    let check = await UserSchema.findOne({ email: req.body.email })
    if (check) {
      return res.status(400).json({ suscess: false, errors: "Existing user found with same email address" })
    }
    let cart = {}
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new UserSchema({ // กำหนกค่าลงใน Table
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cartData: cart
    })
    await user.save() // save data at database

    // use Json Web Token
    const data = {
      user: {
        id: user.id
      }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token })
  } catch (error) {
    res.json({ success: "Failed Registering", status: error })
  }
})

app.listen(PORT, () => {
  try {
    console.log(`Servers is running on Port ${PORT}`)
  } catch (error) {
    console.log(`Error :` + error)
  }
})