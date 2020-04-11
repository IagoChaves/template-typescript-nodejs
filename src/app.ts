import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  // get server (): express.Application {
  //   return this.express
  // }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database ():void {
    mongoose.connect('mongodb://localhost:27017/tsnode', {
      useNewUrlParser: true // Url no novo formato do mongodb
    })
  }

  private routes ():void{
    this.express.use(routes)
  }
}

export default new App().express
