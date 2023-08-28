const userModel = require("./models");

const userStore = async (req, res) => {
  const { name, email, age, mobile } = req.body;
  try {
    const user = await userModel.create({ name, email, age, mobile });

    res.json({ message: "Your data save sucessfully." });
  } catch (error) {
    res.json({ message: "Internal server error!" });
  }
};

