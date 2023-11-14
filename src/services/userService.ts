import { UserModel } from '../models/userModel'

interface CreateUser {
  email: string
  username: string
  authentication: {
    salt: string
    password: string
  }
}

type UpdateUser = Pick<CreateUser, 'username'>

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
