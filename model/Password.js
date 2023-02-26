const { Schema, model } = require("mongoose");

const PasswordSchema = new Schema(
  {
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// export model
const Password = model("Password", PasswordSchema);
module.exports = Password;
