import express from 'express'
import UserSignup from '../controllers/user/UserSignup.js'
import UserLogin from '../controllers/user/UserLogin.js'
import EmployeeSignup from '../controllers/Employee/EmployeeSignup.js'
import authToken from '../middleware/AuthToken.js'
import UpdateEmployee from '../controllers/Employee/UpdateEmployee.js'
import UserLogout from '../controllers/user/UserLogout.js'
import UserDetails from '../controllers/user/UserDetails.js'
import AllEmployees from '../controllers/Employee/AllEmployee.js'
import DeleteEmployee from '../controllers/Employee/DeleteEmployee.js'
import SearchEmployee from '../controllers/user/SearchEmployee.js'

const router = express.Router()

router.post('/signup',UserSignup)
router.post('/login',UserLogin)
router.get('/user-details',authToken,UserDetails)
router.post('/logout',authToken,UserLogout)
router.post('/emp-signup', authToken,EmployeeSignup)
router.post('/all-employee', authToken,AllEmployees)
router.get('/search-emp/:key', authToken,SearchEmployee)
router.put('/emp-update/:id', authToken,UpdateEmployee)
router.delete('/emp-delete/:id', authToken,DeleteEmployee)


export default router