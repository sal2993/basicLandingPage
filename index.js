const express = require('express')
const path = require('path')
const app = express()
const router = express.Router()
const port = 8080

router.get('/health', (req, res) => res.send('Hello World!'))

router.get('/', (req,res) => res.sendFile(path.join(__dirname+'/index.html')));

app.use('/' , router)
app.use(express.static('public'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
