import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "https://hostpital-mern-backend.vercel.app/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="page doctors">
      <h1 style={{ direction: "rtl" }}>الأطباء</h1>
      <div className="thirdBox">
        <h3 style={{ direction: "rtl" }}>الأطباء المسجلين:{doctors.length}</h3>
      </div>
      <div style={{ direction: "rtl" }} className="banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img
                  src={element.docAvatar && element.docAvatar.url}
                  alt="صورة طبيب"
                />
                <h4>{`${element.firstName} ${element.lastName}`}</h4>
                <div className="details">
                  <p>
                    البريد الإلكتروني: <span>{element.email}</span>
                  </p>
                  <p>
                    الهاتف: <span>{element.phone}</span>
                  </p>
                  <p>
                    تاريخ الميلاد: <span>{element.dob.substring(0, 10)}</span>
                  </p>
                  <p>
                    القسم: <span>{element.doctorDepartment}</span>
                  </p>
                  <p>
                    الرقم الوطني: <span>{element.nic}</span>
                  </p>
                  <p>
                    الجنس: <span>{element.gender}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>لم يتم العثور على أطباء مسجلين!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;
