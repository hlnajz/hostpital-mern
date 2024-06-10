// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../main";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { GoCheckCircleFill } from "react-icons/go";
// import { AiFillCloseCircle } from "react-icons/ai";

// const Dashboard = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:4000/api/v1/appointment/getall",
//           { withCredentials: true }
//         );
//         setAppointments(data.appointments);
//       } catch (error) {
//         setAppointments([]);
//       }
//     };
//     fetchAppointments();
//   }, []);

//   const handleUpdateStatus = async (appointmentId, status) => {
//     try {
//       const { data } = await axios.put(
//         `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
//         { status },
//         { withCredentials: true }
//       );
//       setAppointments((prevAppointments) =>
//         prevAppointments.map((appointment) =>
//           appointment._id === appointmentId
//             ? { ...appointment, status }
//             : appointment
//         )
//       );
//       toast.success(data.message);
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   const { isAuthenticated, admin } = useContext(Context);
//   if (!isAuthenticated) {
//     return <Navigate to={"/login"} />;
//   }

//   return (
//     <>
//       <section className="dashboard page">
//         <div className="banner">
//           <div className="firstBox">
//             <img src="/doc.png" alt="docImg" />
//             <div className="content">
//               <div>
//                 <h5>{admin && `${admin.firstName} ${admin.lastName}`}</h5>
//                 <h6 style={{ direction: "ltr" }}>مرحباً</h6>
//                 <br />
//               </div>
//               <p>
//                 مرحبًا في مستشفى الطبيب، حيث نقدم أفضل الرعايا الصحية. فريقنا
//                 ملتزم براحتك وسلامتك.
//               </p>
//             </div>
//           </div>
//           <div className="secondBox">
//             <p>إجمالي المواعيد</p>
//             <h3>1500</h3>
//           </div>
//           <div className="thirdBox">
//             <p>الأطباء المسجلين</p>
//             <h3>10</h3>
//           </div>
//         </div>
//         <div className="banner">
//           <h5>المواعيد</h5>
//           <table>
//             <thead>
//               <tr>
//                 <th>المريض</th>
//                 <th>التاريخ</th>
//                 <th>الطبيب</th>
//                 <th>القسم</th>
//                 <th>الحالة</th>
//                 <th>تمت الزيارة</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments && appointments.length > 0 ? (
//                 appointments.map((appointment) => (
//                   <tr key={appointment._id}>
//                     <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
//                     <td>{appointment.appointment_date.substring(0, 16)}</td>
//                     <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
//                     <td>{appointment.department}</td>
//                     <td>
//                       <select
//                         className={
//                           appointment.status === "Pending"
//                             ? "value-pending"
//                             : appointment.status === "Accepted"
//                             ? "value-accepted"
//                             : "value-rejected"
//                         }
//                         value={appointment.status}
//                         onChange={(e) =>
//                           handleUpdateStatus(appointment._id, e.target.value)
//                         }
//                       >
//                         <option value="Pending" className="value-pending">
//                           قيد الانتظار
//                         </option>
//                         <option value="Accepted" className="value-accepted">
//                           تم قبولها
//                         </option>
//                         <option value="Rejected" className="value-rejected">
//                           تم رفضها
//                         </option>
//                       </select>
//                     </td>
//                     <td>
//                       {appointment.hasVisited === true ? (
//                         <GoCheckCircleFill className="green" />
//                       ) : (
//                         <AiFillCloseCircle className="red" />
//                       )}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6">لا توجد مواعيد متاحة!</td>
//                 </tr>
//               )}
//             </tbody>

//             {/* <tbody>
//               {appointments && appointments.length > 0
//                 ? appointments.map((appointment) => (
//                     <tr key={appointment._id}>
//                       <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
//                       <td>{appointment.appointment_date.substring(0, 16)}</td>
//                       <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
//                       <td>{appointment.department}</td>
//                       <td>
//                         <select
//                           className={
//                             appointment.status === "Pending"
//                               ? "value-pending"
//                               : appointment.status === "Accepted"
//                               ? "value-accepted"
//                               : "value-rejected"
//                           }
//                           value={appointment.status}
//                           onChange={(e) =>
//                             handleUpdateStatus(appointment._id, e.target.value)
//                           }
//                         >
//                           <option value="Pending" className="value-pending">
//                             قيد الانتظار
//                           </option>
//                           <option value="Accepted" className="value-accepted">
//                             تم قبولها
//                           </option>
//                           <option value="Rejected" className="value-rejected">
//                             تم رفضها
//                           </option>
//                         </select>
//                       </td>
//                       <td>
//                         {appointment.hasVisited === true ? (
//                           <GoCheckCircleFill className="green" />
//                         ) : (
//                           <AiFillCloseCircle className="red" />
//                         )}
//                       </td>
//                     </tr>
//                   ))
//                 : "لا توجد مواعيد متاحة!"}
//             </tbody> */}
//           </table>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Dashboard;

import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  const { isAuthenticated, admin } = useContext(Context);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/getall",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);

  const totalAppointments = appointments.length;

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/v1/appointment/delete/${appointmentId}`,
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.filter(
          (appointment) => appointment._id !== appointmentId
        )
      );
      toast.success("تم حذف الموعد بنجاح");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src="/doc.png" alt="docImg" />
            <div className="content">
              <div>
                <h5>{admin && `${admin.firstName} ${admin.lastName}`}</h5>
                <h6 style={{ direction: "ltr" }}>مرحباً</h6>
                <br />
              </div>
              <p>
                مرحبًا في مستشفى الطبيب، حيث نقدم أفضل الرعايا الصحية. فريقنا
                ملتزم براحتك وسلامتك.
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p style={{ direction: "rtl" }}>إجمالي المواعيد</p>
            <h3 style={{ fontSize: "30px", direction: "rtl" }}>
              {totalAppointments}
            </h3>
          </div>
        </div>
        <div className="banner">
          <h5>المواعيد</h5>
          <table>
            <thead>
              <tr>
                <th>المريض</th>
                <th>التاريخ</th>
                <th>الطبيب</th>
                <th>القسم</th>
                <th>الحالة</th>
                <th>تمت الزيارة</th>
                <th> حذف الزيارة</th>
              </tr>
            </thead>
            <tbody>
              {appointments && appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                    <td>{appointment.appointment_date.substring(0, 16)}</td>
                    <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                    <td>{appointment.department}</td>
                    <td>
                      <select
                        className={
                          appointment.status === "Pending"
                            ? "value-pending"
                            : appointment.status === "Accepted"
                            ? "value-accepted"
                            : "value-rejected"
                        }
                        value={appointment.status}
                        onChange={(e) =>
                          handleUpdateStatus(appointment._id, e.target.value)
                        }
                      >
                        <option value="Pending" className="value-pending">
                          قيد الانتظار
                        </option>
                        <option value="Accepted" className="value-accepted">
                          تم قبولها
                        </option>
                        <option value="Rejected" className="value-rejected">
                          تم رفضها
                        </option>
                      </select>
                    </td>
                    <td>
                      {appointment.hasVisited === true ? (
                        <GoCheckCircleFill className="green" />
                      ) : (
                        <AiFillCloseCircle className="red" />
                      )}
                    </td>
                    <td>
                      <button
                        style={{
                          color: "#fff",
                          padding: "5px 10px",
                          marging: "5px 10px",
                          backgroundColor: "#4242DA",
                          borderRadius: "5px",
                        }}
                        onClick={() => handleDeleteAppointment(appointment._id)}
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">لا توجد مواعيد متاحة!</td>
                </tr>
              )}
            </tbody>

            {/* <tbody>
              {appointments && appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                    <td>{appointment.appointment_date.substring(0, 16)}</td>
                    <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                    <td>{appointment.department}</td>
                    <td>
                      <select
                        className={
                          appointment.status === "Pending"
                            ? "value-pending"
                            : appointment.status === "Accepted"
                            ? "value-accepted"
                            : "value-rejected"
                        }
                        value={appointment.status}
                        onChange={(e) =>
                          handleUpdateStatus(appointment._id, e.target.value)
                        }
                      >
                        <option value="Pending" className="value-pending">
                          قيد الانتظار
                        </option>
                        <option value="Accepted" className="value-accepted">
                          تم قبولها
                        </option>
                        <option value="Rejected" className="value-rejected">
                          تم رفضها
                        </option>
                      </select>
                    </td>
                    <td>
                      {appointment.hasVisited === true ? (
                        <GoCheckCircleFill className="green" />
                      ) : (
                        <AiFillCloseCircle className="red" />
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">لا توجد مواعيد متاحة!</td>
                </tr>
              )}
            </tbody> */}
          </table>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
