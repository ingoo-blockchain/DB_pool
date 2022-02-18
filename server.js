const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes')

app.set('view engine','html')
nunjucks.configure('views',{
    express:app,
    watch:true,
})

app.use(express.static('public'))
app.use(express.urlencoded({extended:true,}))
app.use('/',router)

app.listen(PORT,()=>{
    console.log(`서버시작 포트번호 : ${PORT}`)
})