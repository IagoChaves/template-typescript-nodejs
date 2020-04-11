import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async index (request: Request, response: Response): Promise<Response> {
    const users = await User.find()

    return response.json(users)
  }

  public async create (request: Request, response: Response): Promise<Response> {
    const user = await User.create(request.body)

    return response.json(user)
  }
}

export default new UserController()
