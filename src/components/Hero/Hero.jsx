// // import React, { useEffect } from "react";
// // import "./Hero.css";
// // import profilePic from "../../assets/images/profile.png";
// // import Typed from "typed.js";

// // const Hero = () => {
// //   useEffect(() => {
// //     const typed = new Typed(".typing", {
// //       strings: ["Frontend Developer", "Web Designer", "React Developer"],
// //       typeSpeed: 80,
// //       backSpeed: 50,
// //       loop: true,
// //     });
// //     return () => typed.destroy();
// //   }, []);

// //   return (
// //     <section className="hero">
// //       <div className="hero-text">
// //         <h3>Hello, It's Me</h3>
// //         <h1>Zain Ali</h1>
// //         <h3>
// //           And I'm a <span className="typing"></span>
// //         </h3>
// //         <p>
// //           I'm a web designer with extensive experience creating modern and
// //           responsive frontend websites.
// //         </p>
// //       </div>

// //       <div className="hero-photo-wrapper">
// //         <div className="glow-ring">
// //           <img src={profilePic} alt="Zain" className="hero-photo" />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import React, { useEffect } from "react";
// import "./Hero.css";
// import profilePic from "../../assets/images/profile.png";
// import Typed from "typed.js";
// import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // ← Import icons

// const Hero = () => {
//   useEffect(() => {
//     const typed = new Typed(".typing", {
//       strings: ["Frontend Developer", "Web Designer", "React Developer"],
//       typeSpeed: 80,
//       backSpeed: 50,
//       loop: true,
//     });
//     return () => typed.destroy();
//   }, []);

//   return (
//     <section className="hero">
//       <div className="hero-text">
//         <h3>Hello, It's Me</h3>
//         <h1>Zain Ali</h1>
//         <h3>
//           And I'm a <span className="typing"></span>
//         </h3>
//         <p>
//           I'm a web designer with extensive experience creating modern and
//           responsive frontend websites.
//         </p>

//         {/* Social Icons */}
//         <div className="hero-social-icons">
//           <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//             <FaInstagram />
//           </a>
//           <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin />
//           </a>
//           <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
//             <FaWhatsapp />
//           </a>
//         </div>
//       </div>

//       <div className="hero-photo-wrapper">
//         <div className="glow-ring">
//           <img src={profilePic} alt="Zain" className="hero-photo" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect } from "react";
import "./Hero.css";
import profilePic from "../../assets/images/profile.png";
import Typed from "typed.js";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // ← Import icons

const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["Frontend Developer", "Web Designer", "React Developer"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    // ✅ Added id="hero" for smooth scrolling
    <section id="hero" className="hero">
      <div className="hero-text">
        <h3>Hello, It's Me</h3>
        <h1>Zain Ali</h1>
        <h3>
          And I'm a <span className="typing"></span>
        </h3>
        <p>
          I'm a web designer with extensive experience creating modern and
          responsive frontend websites.
        </p>

        {/* Social Icons */}
        <div className="hero-social-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="hero-photo-wrapper">
        <div className="glow-ring">
          <img src={profilePic} alt="Zain" className="hero-photo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;




