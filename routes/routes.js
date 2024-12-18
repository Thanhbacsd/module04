import express from 'express'
import {getAllEmployees, getEmployee, createEmployeeView, createEmployee, updateEmployeeView, updateEmployee, deleteEmployee} from '../controllers/employees.js'

const router = express.Router()

router.route('/api/employees')
    .get(getAllEmployees)
    .post(createEmployee)
router.route('/api/employees/:id')
    .delete(deleteEmployee)
    // .get(getAllEmployees)
//     .get(createEmployeeView)
//     .post(createEmployee)
// router.route('/update/:id')
//     .get(updateEmployeeView)
//     .patch(updateEmployee)
// router.route('/:id')
//     .get(getEmployee)
//     

export default router