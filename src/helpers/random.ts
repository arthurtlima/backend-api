import crypto from 'crypto'

export const generateRandomString = () => {
  const randomBytes = crypto.randomBytes(128)
  return randomBytes.toString('base64')
}
