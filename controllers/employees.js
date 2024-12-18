import Employee from "../models/Employee.js"

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({})
        // res.render('index', { 
        //     title: 'Home', 
        //     employees,
        //     message: req.flash('message')
        // })
        // res.status(200).json({ employees})
        res.status(200).json({ employees, count: employees.length})
        // res.send('Get all employees')
    } catch (err) {
        res.status(500).json ({ msg: err})
    }
    
}

const getEmployee = async (req, res) => {
    try {
        let { id: employeeId} = req.params
        const employee = await Employee.findOne({ _id: employeeId})
        if (!employee) {
            return res.status(404).json({ msg: `No employee with id ${employeeId} found.`})
        }
        res.status(200).json({ employee})
        // res.send('Get a single employee')
    } catch (err) {
        res.status(500).json({ msg: err})
    }
    
}

const createEmployeeView = async (req, res) => {
    res.render('add', { 
        title: 'Add Employees',
        message: req.flash('message')
    })
}

// const createEmployee = async (req, res) => {
//     try {
//         const employee = await Employee.create({
//             name: req.body.name,
//             extension: req.body.extension,
//             email: req.body.email
//         })
//         req.flash('message', "Employee added successfully")
//         res.redirect('/add')
//         // res.status(201).json({ msg: "Employee added successfully"})
        
//     } catch (err) {
//         res.status(500).json({mgs: err})
//     }
// }

const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body)
        res.status(201).json({employee})
        
    } catch (err) {
        res.status(500).json({mgs: err})
    }
}

const updateEmployeeView = async (req, res) => {
    try {
        let { id: employeeId} = req.params
        const employee = await Employee.findOne({ _id: employeeId})
        if (!employee) {
            return res.status(404).json({ msg: `No employee with id ${employeeId} found.`})
        }
        res.render('update', {
            title: 'Update Employee',
            employee,
            message: req.flash('message')
        })
    } catch (err) {
        res.status(500).json({ msg: err})
    }
    
}

const updateEmployee = async (req, res) => {
    try {
        let { id:employeeId } = req.params
        const employee = await Employee.findOneAndUpdate({ _id: employeeId }, req.body, {
            new: true,
            runValidator: true
        })
        if( !employee) {
            return res.status(404).json({ msg: `No employee with id ${employeeId} found.` })
        }
        req.flash('message', "Employee updateded successfully")
        res.redirect('/update/', employeeId)
        // res.status(200).json({ msg: `Successfuly updated employee.` })
        //  res.send('Update an existing employee')
    } catch (err) {
        res.status(500).json({mgs: err})
    }

}

const deleteEmployee = async (req, res) => {
    try {
        let { id:employeeId } = req.params
        const employee = await Employee.findOneAndDelete({ _id: employeeId }, req.body, {
            new: true,
            runValidator: true
        })
        if( !employee) {
            return res.status(404).json({ msg: `No employee with id ${employeeId} found.` })
        }
        // req.flash('message', `Successfuly deleted employee.`)
        // res.redirect('/api/employees/:id')
        //res.status(200).json({ msg: `Successfuly deleted employee.` })
        //  res.send('Update an existing employee')
    } catch (err) {
        res.status(500).json({mgs: err})
    }
    // res.send('Delete an employee')
}

export {
    getAllEmployees,
    getEmployee,
    createEmployeeView,
    createEmployee,
    updateEmployeeView,
    updateEmployee,
    deleteEmployee
}