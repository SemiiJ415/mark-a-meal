const express = require('express')
const router = express.Router()

const { seasoningDao: dao} = require('../../daos/daos')

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

router.get('/sort', (req, res)=> {
    dao.sort(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res)
})

router.patch('/update/:id', (req, res)=> {
    dao.create(req, res)
})

module.exports = router