import mongoose from 'mongoose'
interface CreateUser {
  email: string
  username: string
  authentication: {
    salt: string
    password: string
  }
}

type UpdateUser = Pick<CreateUser, 'username'>

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
})

export const UserModel = mongoose.model('User', UserSchema)

export const getUsers = () => UserModel.find()

export const getUserByEmail = (email: string) => UserModel.findOne({ email })

export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({ 'authentication.sessionToken': sessionToken })

export const getUserById = (id: string) => UserModel.findById(id)

export const createUser = async (values: CreateUser) => {
  const user = await new UserModel(values).save()
  return user.toObject()
}

export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({ _id: id })

export const updateUserById = (id: string, values: UpdateUser) =>
  UserModel.findByIdAndUpdate(id, values)
