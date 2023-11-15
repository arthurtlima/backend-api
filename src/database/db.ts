import mongoose from 'mongoose'

export const connectToDatabase = async () => {
  try {
    const mongoURL = process.env.MONGO_URL
    await mongoose.connect(mongoURL)
    console.log('Connected to the database')
  } catch (error) {
    console.error('Error connecting to the database:', error)
    process.exit(1)
  }
}
