import crypto from 'crypto'

const SECRET = process.env.APP_SECRET || 'default_secret'

export const generateAuthenticationHash = (salt: string, password: string) => {
  try {
    const hmac = crypto.createHmac('sha256', [salt, password].join('/'))
    const hash = hmac.update(SECRET).digest('hex')
    return hash
  } catch (error) {
    console.error('Error generating authentication hash:', error)
    throw new Error('Error generating authentication hash')
  }
}
