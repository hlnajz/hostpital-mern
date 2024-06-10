import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "طب الأطفال",
      imageUrl: "/departments/pedia.jpg",
    },
    {
      name: "طب العظام",
      imageUrl: "/departments/ortho.jpg",
    },
    {
      name: "طب القلب",
      imageUrl: "/departments/cardio.jpg",
    },
    {
      name: "طب الأعصاب",
      imageUrl: "/departments/neuro.jpg",
    },
    {
      name: "طب الأورام",
      imageUrl: "/departments/onco.jpg",
    },
    {
      name: "الأشعة التشخيصية",
      imageUrl: "/departments/radio.jpg",
    },
    {
      name: "العلاج الطبيعي",
      imageUrl: "/departments/therapy.jpg",
    },
    {
      name: "طب الجلدية",
      imageUrl: "/departments/derma.jpg",
    },
    {
      name: " طب الأذن والأنف والحنجرة",
      imageUrl: "/departments/ent.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2 style={{ direction: "rtl" }}>الأقسام</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
