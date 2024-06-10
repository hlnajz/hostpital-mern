import mongoose from "mongoose";
import { Mongoose } from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "الاسم الأول مطلوب!"],
    minLength: [3, "يجب أن يحتوي الاسم الأول على ما لا يقل عن 3 أحرف!"],
  },
  lastName: {
    type: String,
    required: [true, "الاسم الأخير مطلوب!"],
    minLength: [3, "يجب أن يحتوي الاسم الأخير على ما لا يقل عن 3 أحرف!"],
  },
  email: {
    type: String,
    required: [true, "البريد الإلكتروني مطلوب!"],
    validate: [validator.isEmail, "يرجى تقديم بريد إلكتروني صالح!"],
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
  appointment_date: {
    type: String,
    required: [true, "تاريخ الموعد مطلوب!"],
  },
  department: {
    type: String,
    required: [true, "اسم القسم مطلوب!"],
  },
  doctor: {
    firstName: {
      type: String,
      required: [true, "اسم الطبيب مطلوب!"],
    },
    lastName: {
      type: String,
      required: [true, "اسم الطبيب مطلوب!"],
    },
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: [true, "العنوان مطلوب!"],
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "معرف الطبيب غير صالح!"],
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "معرف المريض مطلوب!"],
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
