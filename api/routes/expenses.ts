import * as express from 'express'

import {expenses} from '../data/expenses'

const router = express.Router()

router.get('/', function(req, res, next) {
  res.send(expenses)
})

export default router
