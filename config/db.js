const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGODB_CONNECTION_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
    .then(() => console.log("Database connected successfully."))
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDB;
