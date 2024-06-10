import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  Font,
  Document,
  Page,
  Text,
  View,
  Image,
  pdf,
} from "@react-pdf/renderer";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = [
    "طب الأطفال",
    "طب العظام",
    "طب القلب",
    "طب الأعصاب",
    "طب الأورام",
    "الأشعة التشخيصية",
    "العلاج الطبيعي",
    "طب الجلدية",
    "طب الأذن والأنف والحنجرة",
  ];

  // PDF
  const translateGender = (gender) => {
    return gender === "ذكر" ? "Male" : "Female";
  };

  const translateDepartment = (department) => {
    const departmentsMap = {
      "طب الأطفال": "Pediatrics",
      "طب العظام": "Orthopedics",
      "طب القلب": "Cardiology",
      "طب الأعصاب": "Neurology",
      "طب الأورام": "Oncology",
      "الأشعة التشخيصية": "Diagnostic Radiology",
      "العلاج الطبيعي": "Physical Therapy",
      "طب الجلدية": "Dermatology",
      "طب الأذن والأنف والحنجرة": "Otorhinolaryngology",
    };

    return departmentsMap[department] || department;
  };
  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handleDownloadPDF = async (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !nic ||
      !dob ||
      !gender ||
      !appointmentDate ||
      !department ||
      !doctorFirstName ||
      !doctorLastName ||
      !address ||
      !isEmailValid(email)
    ) {
      toast.error("يرجى ملء جميع الحقول  ");
      return;
    }
    try {
      const pdfContent = (
        <Document>
          <Page
            size={{ width: 250, height: 300 }}
            style={{
              padding: 20,
              border: "10px solid dodgerblue",
              fontSize: "8px",
              backgroundColor: "#d5e4fb",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Image
                style={{ width: 40, height: 35, marginRight: 10 }}
                src="/logo.png"
              />
              <Text
                style={{
                  fontSize: "6px",
                  fontWeight: "bold",
                  color: "dodgerblue",
                }}
              >
                generated by hamza labbaalli
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "dodgerblue",
                    textDecoration: "underline",
                    textDecorationStyle: "wavy",
                  }}
                >
                  First Name:
                </Text>
                <Text>{firstName}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "dodgerblue",
                    textDecoration: "underline",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Last Name:
                </Text>
                <Text>{lastName}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "dodgerblue",
                    textDecoration: "underline",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Email:
                </Text>
                <Text>{email}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "dodgerblue",
                    textDecoration: "underline",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Phone:
                </Text>
                <Text>{phone}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "dodgerblue",
                    textDecoration: "underline",
                    textDecorationStyle: "wavy",
                  }}
                >
                  NIC:
                </Text>
                <Text>{nic}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "dodgerblue",
                    textDecoration: "underline",
                    textDecorationStyle: "wavy",
                  }}
                >
                  DOB:
                </Text>
                <Text>{dob}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "dodgerblue",
                    textDecoration: "underline",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Gender:
                </Text>
                <Text>{translateGender(gender)}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "dodgerblue",
                    textDecoration: "underline",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Appointment Date:
                </Text>
                <Text>{appointmentDate}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "dodgerblue",
                    textDecoration: "underline",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Department:
                </Text>
                <Text>{translateDepartment(department)}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "dodgerblue",
                    textDecoration: "underline",
                    textDecorationStyle: "wavy",
                  }}
                >
                  Doctor:
                </Text>
                <Text>
                  {doctorFirstName} {doctorLastName}
                </Text>
              </View>
            </View>

            <View style={{ marginBottom: 5 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "dodgerblue",
                  textDecoration: "underline",
                  textDecorationStyle: "wavy",
                }}
              >
                Address:
              </Text>
              <Text>{address}</Text>
            </View>

            <View style={{ marginBottom: 5 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "dodgerblue",
                  textDecoration: "underline",
                  textDecorationStyle: "wavy",
                }}
              >
                Visited Before:
              </Text>
              <Text>{hasVisited ? "Yes" : "No"}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Image
                style={{ width: 30, height: 30, marginLeft: 10, padding: 5 }}
                src="/ofppt.png"
              />
              <Text
                style={{
                  fontSize: "8px",
                  fontWeight: "bold",
                  color: "dodgerblue",
                }}
              >
                ISTA TANATN 2024 DEVOWFS202
              </Text>
            </View>
          </Page>
        </Document>
      );

      const pdfBlob = await pdf(pdfContent).toBlob();
      const downloadUrl = window.URL.createObjectURL(pdfBlob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = "TanTan_Hospital.pdf";
      a.click();
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to generate PDF");
    }
  };

  //

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctors(data.doctors);
      console.log(data.doctors);
    };
    fetchDoctors();
  }, []);
  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      handleDownloadPDF();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container form-component appointment-form">
        <h2>موعد</h2>
        <form onSubmit={handleAppointment}>
          <div>
            <input
              type="text"
              placeholder="الاسم الأول"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="الاسم الأخير"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="رقم الجوال"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="الرقم الوطني"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
            <input
              type="date"
              placeholder="تاريخ الميلاد"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">اختر الجنس</option>
              <option value="ذكر">ذكر</option>
              <option value="أنثى">أنثى</option>
            </select>
            <input
              type="date"
              placeholder="تاريخ الموعد"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>
          <div>
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setDoctorFirstName("");
                setDoctorLastName("");
              }}
            >
              {departmentsArray.map((depart, index) => {
                return (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                );
              })}
            </select>
            <select
              value={`${doctorFirstName} ${doctorLastName}`}
              onChange={(e) => {
                const [firstName, lastName] = e.target.value.split(" ");
                setDoctorFirstName(firstName);
                setDoctorLastName(lastName);
              }}
              disabled={!department}
            >
              <option value="">اختر الطبيب</option>
              {doctors
                .filter((doctor) => doctor.doctorDepartment === department)
                .map((doctor, index) => (
                  <option
                    value={`${doctor.firstName} ${doctor.lastName}`}
                    key={index}
                  >
                    {doctor.firstName} {doctor.lastName}
                  </option>
                ))}
            </select>
          </div>
          <textarea
            rows="1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="العنوان"
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
              direction: "ltr",
            }}
          >
            <p style={{ marginBottom: 0 }}>هل قمت بزيارة من قبل؟</p>
            <input
              type="checkbox"
              checked={hasVisited}
              onChange={(e) => setHasVisited(e.target.checked)}
              style={{ flex: "none", width: "25px" }}
            />
          </div>

          <button type="submit" style={{ margin: "0 auto" }}>
            احصل على موعد
          </button>
          <button onClick={handleDownloadPDF} style={{ margin: "0 auto" }}>
            تحميل موعد PDF
          </button>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
