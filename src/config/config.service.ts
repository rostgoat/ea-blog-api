import { resolve } from 'path'
import * as dotenv from 'dotenv'
import { readFileSync } from 'fs'
import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class ConfigService {
  private readonly logger = new Logger(ConfigService.name)

  private envPath: any
  private readonly nodeEnv: string = process.env.NODE_ENV
    ? process.env.NODE_ENV.trim()
    : undefined

  private readonly envConfig: { [key: string]: string }
  constructor() {
    this.logger.log('SERVICE INIT')
    switch (this.nodeEnv) {
      case 'test':
        this.envPath = resolve(__dirname, '../../.env.test')
        break
      case 'development':
        this.envPath = resolve(__dirname, '../../.env.development')
        break
      default:
        throw new Error('Specify the NODE_ENV variable')
    }
    this.envConfig = dotenv.parse(readFileSync(this.envPath))
  }

  get(key: string): string {
    return this.envConfig[key]
  }
}
