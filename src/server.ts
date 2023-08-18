import mongoose from 'mongoose'
import { Server } from 'http'
import config from './config'
import app from './app'

let server: Server

async function main() {
  try {
    mongoose.connect(config.database_url as string)
    console.log('database connected')
    app.listen(config.port, () => {
      console.log(`listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to conncet', err)
  }
  process.on('unhandledRejection', error => {
    console.log('Unhandled rejection, We are closing our server')
    if (server) {
      server.close(() => {
        console.log(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

main()
