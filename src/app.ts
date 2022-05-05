import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import morgan from 'morgan'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import routes from './router'


dotenv.config()

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})

const app = express()

app.use(express.json())

app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))

const swaggerJsDocOptions = {
  definition: {
    swagger: '2.0',
    info: {
      title: 'API Boilerplate',
      version: '0.0.1',
    },
    basePath:'/api/v1',
  },
  apis: ['./src/routes/**/**.ts'], // files containing annotations as above
}


app.use(limiter)

/* initialise API routes */
app.use('/api/v1', routes);

const swaggerDocs = swaggerJsDoc(swaggerJsDocOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

export default app
