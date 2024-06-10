import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "الاثنين",
      time: "9:00 صباحًا - 11:00 مساءً",
    },
    {
      id: 2,
      day: "الثلاثاء",
      time: "12:00 ظهرًا - 12:00 منتصف الليل",
    },
    {
      id: 3,
      day: "الأربعاء",
      time: "10:00 صباحًا - 10:00 مساءً",
    },
    {
      id: 4,
      day: "الخميس",
      time: "9:00 صباحًا - 9:00 مساءً",
    },
    {
      id: 5,
      day: "الجمعة",
      time: "3:00 مساءً - 9:00 مساءً",
    },
    {
      id: 6,
      day: "السبت",
      time: "9:00 صباحًا - 3:00 مساءً",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img" />
          </div>
          <div>
            <h4>روابط سريعة</h4>
            <ul>
              <Link to={"/"}>الرئيسية</Link>
              <Link to={"/appointment"}> احجز موعدك</Link>
              <Link to={"/about"}> من نحن</Link>
            </ul>
          </div>
          <div>
            <h4>ساعات العمل</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>اتصل بنا</h4>
            <div>
              <FaPhone />
              <span>0625259070</span>
            </div>
            <div className="email">
              <MdEmail />
              <span>hamzalabbaalli@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>طانطان، المغرب</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
