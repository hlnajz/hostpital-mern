import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "الاسم الأول مطلوب!"],
    minLength: [3, "يجب أن يحتوي الاسم الأول على الأقل على 3 أحرف!"],
  },
  lastName: {
    type: String,
    required: [true, "اسم العائلة مطلوب!"],
    minLength: [2, "يجب أن يحتوي اسم العائلة على الأقل على 2 أحرف!"],
  },
  email: {
    type: String,
    required: [true, "البريد الإلكتروني مطلوب!"],
    validate: [validator.isEmail, "يرجى تقديم بريد إلكتروني صحيح!"],
  },
  phone: {
    type: String,
    required: [true, "رقم الهاتف مطلوب!"],
    minLength: [9, "يجب أن يحتوي رقم الهاتف على الأقل على 9 رقمًا!"],
    maxLength: [13, "يجب ألا يتجاوز رقم الهاتف 13 رقمًا!"],
  },
  nic: {
    type: String,
    required: [true, "الرقم الوطني مطلوب!"],
    minLength: [5, "يجب أن يحتوي الرقم الوطني على الأقل على 5 أرقام!"],
    maxLength: [10, "يجب ألا يتجاوز الرقم الوطني 10 أرقام!"],
  },
  dob: {
    type: Date,
    required: [true, "تاريخ الميلاد مطلوب!"],
  },
  gender: {
    type: String,
    required: [true, "الجنس مطلوب!"],
    enum: ["ذكر", "أنثى"],
  },
  password: {
    type: String,
    required: [true, "كلمة المرور مطلوبة!"],
    minLength: [8, "يجب أن تحتوي كلمة المرور على الأقل على 8 أحرف!"],
    select: false,
  },
  role: {
    type: String,
    required: [true, "دور المستخدم مطلوب!"],
    enum: ["Patient", "Doctor", "Admin"],
  },
  doctorDepartment: {
    type: String,
  },
  docAvatar: {
    public_id: String,
    url: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = mongoose.model("User", userSchema);
