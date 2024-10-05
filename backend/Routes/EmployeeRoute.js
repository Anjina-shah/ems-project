import express from 'express'
import { con } from '../index.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const router = express.Router()
// http://localhost:3000/employee/employee_login -> POST Request -> Login (C)
router.post('/employee_login', (req, res) => {
  const sql = 'SELECT * from employee Where email = ?'
  con.query(sql, [req.body.email], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: 'Query error' })
    if (result.length > 0) {
      bcrypt.compare(req.body.password, result[0].password, (err, response) => {
        if (err) return res.json({ loginStatus: false, Error: 'Wrong Password' })
        if (response) {
          const email = result[0].email
          const token = jwt.sign({ role: 'employee', email: email, id: result[0].id }, process.env.JWT_SECRET, { expiresIn: '1d' })
          res.cookie('token', token)
          return res.json({ loginStatus: true, id: result[0].id })
        }
      })
    } else {
      return res.json({ loginStatus: false, Error: 'wrong email or password' })
    }
  })
})

// http://localhost:3000/employee/detail/:id -> POST Request -> Create (C)
router.get('/detail/:id', (req, res) => {
  const id = req.params.id
  const sql = 'SELECT * FROM employee where id = ?'
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false })
    return res.json(result)
  })
})

// http://localhost:3000/employee/logout -> POST Request -> Create (C)
router.get('/logout', (req, res) => {
  res.clearCookie('token')
  return res.json({ Status: true })
})

export { router as EmployeeRouter }
