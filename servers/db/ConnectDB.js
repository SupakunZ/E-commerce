const mongoose = require('mongoose')

const ConnectDB = async () => {
  try {
    mongoose.connect("mongodb+srv://gunbyboy02:gun053795606@cluster0.ibalo59.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/e-commerce")
    console.log('ConnectDB !!!')
  } catch (error) {
    console.log(error)
  }
}

module.exports = ConnectDB