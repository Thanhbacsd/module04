import mongoose from 'mongoose'
// const url = 'mongodb+srv://vtbacdhct:vtb1btv2@cluster1.xyuf0.mongodb.net/bacdb?retryWrites=true&w=majority&appName=Cluster1';

// mongoose
//     .connect(url)
//     .then (() => console.log('Connected to the database...'))
//     .catch((err) => console.log(err))

const connectDB = (url) => {
    return mongoose.connect(url)
}

export default connectDB