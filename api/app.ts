import * as express from 'express'
import * as fileUpload from 'express-fileupload'
import * as createError from 'http-errors'
import * as path from 'path'
import * as logger from 'morgan'

import expensesRouter from './routes/expenses'

const app = express()

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type')
  next()
})

app.use(logger('dev'))
app.use(fileUpload({
  limit: { fileSize: Infinity },
}));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/receipts', express.static(path.join(__dirname, 'receipts')))

app.use('/expenses', expensesRouter)

app.use(function(req, res, next) {
  next(createError(404))
})

app.use(function(err, req, res, next) {
  const message = err.message
  const error = req.app.get('env') === 'development' ? err : {}
  const status = err.status || 500

  res.status(status || 500)
  res.send({
    status,
    message,
    error
  })
})

app.listen(3000)
console.log('API running at http://localhost:3000')
