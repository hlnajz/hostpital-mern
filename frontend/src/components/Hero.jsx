import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1 className="hero-big-title">{title}</h1>
          <p>
            مستشفى طانطان هو مركز طبي متخصص يوفر خدمات الرعاية الصحية لسكان
            المنطقة. يتميز المستشفى بفريق طبي متميز يعمل على تقديم أفضل الخدمات
            الطبية للمرضى. تشمل خدمات المستشفى العناية الطبية العامة والتخصصية
            في مختلف التخصصات الطبية مثل الجراحة والنساء والتوليد وطب الأطفال
            والأمراض الباطنية وغيرها. يسعى المستشفى دائمًا لتحقيق أعلى معايير
            الجودة والرعاية الصحية لضمان راحة وسلامة المرضى.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
