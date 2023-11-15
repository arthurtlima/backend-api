import express from 'express'

import { createUser, getUserByEmail } from '../../services/userService'
import { generateAuthenticationHash } from '../../helpers/authentication'
import { generateRandomString } from '../../helpers/random'

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body

    if (!email || !password || !username) {
      return res.sendStatus(400)
    }

    const existingUser = await getUserByEmail(email)

    if (existingUser) {
      return res.sendStatus(400)
    }

    const salt = generateRandomString()
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: generateAuthenticationHash(salt, password),
      },
    })

    return res.status(201).json(user).end()
  } catch (err) {
    console.error(err)
    res.sendStatus(400)
  }
}
