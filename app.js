import express from 'express'
import {} from 'dotenv/config'
import router from './routes/routes.js'
// import {} from './db/connect.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'
// import session from 'express-session'       //npm i express-session connect-flash
// import flash from 'connect-flash'

const app = express()

// app.set('view engine', 'ejs')       //register view engine in view folder (npm i ejs to install)
// or app.set('view', 'public')     register view engine in the public folder
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(bodyParser.json())                      // npm i body-parser (middleWare)
// app.use(session({
//     secret: 'secret',
//     cookie: { maxAge: 60000 },
//     resave: false,
//     saveUninitialized: false
// }))
// app.use(flash())

// app.use('/api/v1/employees', router)
app.use('/', router)


// app.get('/', (req, res) => {
//     const employees = [
//         { name: 'Bac1', ext: 1111, email: 'bac1@gmail.com'},
//         { name: 'Bac2', ext: 1112, email: 'bac2@gmail.com'},
//         { name: 'Bac3', ext: 1113, email: 'bac3@gmail.com'},
//         { name: 'Bac4', ext: 1114, email: 'bac4@gmail.com'},
//         { name: 'Bac5', ext: 1115, email: 'bac5@gmail.com'},
//     ]
//     res.render('index', { title: 'Home', employees})
// })
// app.get('/add', (req, res) => res.render('add', { title: 'Add Employees'}))
// app.use((req, res) => res.status(404).render('404', {title: '404: Page NOT Found' }))

const PORT = process.env.PORT || 5000
// app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

const init = async () => {
    try {
        await connectDB(process.env.DB)
        console.log('Connected to the database...')
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

init()