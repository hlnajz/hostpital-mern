import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(
          "https://hostpital-mern-backend.vercel.app/api/v1/message/getall",
          { withCredentials: true }
        );
        setMessages(data.messages);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://hostpital-mern-backend.vercel.app/api/v1/message/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      setMessages(messages.filter((message) => message._id !== id));
      toast.success("تم حذف الرسالة بنجاح");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page messages">
      <h1 style={{ direction: "rtl" }}>الرسائل</h1>
      <div style={{ direction: "rtl" }} className="banner">
        {messages && messages.length > 0 ? (
          [...messages].reverse().map((element) => {
            return (
              <div className="card" key={element._id}>
                <div className="details">
                  <p>
                    الاسم الأول: <span>{element.firstName}</span>
                  </p>
                  <p>
                    الاسم الأخير: <span>{element.lastName}</span>
                  </p>
                  <p>
                    البريد الإلكتروني: <span>{element.email}</span>
                  </p>
                  <p>
                    الهاتف: <span>{element.phone}</span>
                  </p>
                  <p>
                    الرسالة: <span>{element.message}</span>
                  </p>
                </div>
                <button onClick={() => handleDelete(element._id)}>x</button>
              </div>
            );
          })
        ) : (
          <h1>لا توجد رسائل!</h1>
        )}
      </div>
    </section>
  );
};

export default Messages;
