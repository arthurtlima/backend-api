import { Document, Schema, model } from 'mongoose'

interface User extends Document {
  email: string
  username: string
  authentication: {
    password: string
    salt: string
    sessionToken: string
  }
}

const UserSchema = new Schema<User>({
  email: { type: String, required: true },
  username: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
})

export const UserModel = model<User>('User', UserSchema)
