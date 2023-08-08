const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://jitendra_giriya:${process.env.MONGODB_PASSWORD}@cluster0.jr137.mongodb.net/MERN-stack-E-commerce?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
      }
    )
    .then(() => console.log("Database connected successfully."))
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDB;
