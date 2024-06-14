const PORT = process.env.PORT || 3005
const express = require('express')
const server = express()
const router = require('./app/routes/router')
const helmet = require('helmet')
const cors = require('cors')



// security
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOrginResourcePolicy: false,
    crossOrginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))


server.use(cors())
.use(express.json())
.use(express.urlencoded({ extended: true}))

server.use('/', router)

server.listen(PORT, ()=> console.log(`Today is not the day...But I'm listening anyways.`))