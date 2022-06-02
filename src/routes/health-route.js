import express from 'express'

const app = express()

app.get('/health', (req, res) => {
    res.json({health: 'OKi Doki ok'})
})

export default app