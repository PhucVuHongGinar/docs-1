const express = require('express')
const app = express()


// app.use(express.static('public'))
app.use('/img',express.static('static/img'))

app.listen(8081, () => console.log('File server listening on port 8081'))