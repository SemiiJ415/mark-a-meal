const express = require('express')
const router = express.Router()

const PORT = process.env.PORT || 3005

const tables = ['appetizer', 'dessert', 'drink', 'meal', 'protein', 'seasoning', 'side', 'user']


tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

// Root Route => localhost:3005/api
router.get('/api', (req, res)=> {
    res.json({
       'ALL Apps': `http://localhost:${PORT}/api/appetizer`,
       'ALL Desserts': `http://localhost:${PORT}/api/dessert`,
       'ALL Drinks': `http://localhost:${PORT}/api/drink`,
       'ALL Meals': `http://localhost:${PORT}/api/meal`,
       'ALL Proteins': `http://localhost:${PORT}/api/protein`,
       'ALL Seasonings': `http://localhost:${PORT}/api/seasoning`,
       'ALL Sides': `http://localhost:${PORT}/api/side`,
       'ALL Users': `http://localhost:${PORT}/api/user`

    })
})


router.get('*', (req, res)=> {
    if(req.url === '/favicon.ico/') {
        res.end()
    } else {
        res.send(`<h1>404 ERROR: Page does not exist</h1>`)
    }
})


module.exports = router