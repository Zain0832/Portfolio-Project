// import React, { useRef, useEffect } from "react";
// import "./Contact.css";
// import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { MdEmail, MdCall } from "react-icons/md";

// function Contact() {
//   const contactRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show-animate");
//           observer.unobserve(entry.target); // animate only once
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (contactRef.current) {
//       observer.observe(contactRef.current);
//     }
//   }, []);

//   return (
//     <section className="contact-section" ref={contactRef} id="contact">
//       <div className="contact-left">
//         <h2 className="contact-title">
//           Contact <span>Me</span>
//         </h2>
//         <h3 className="contact-subtitle">Let's Work Together</h3>
//         <p className="contact-text">
//           “I’m always open to discussing new projects, creative ideas, or
//           opportunities to collaborate. Feel free to reach out and I’ll get back
//           to you as soon as possible.”
//         </p>
//         <div className="contact-info">
//           <p>
//             <MdEmail className="icon" />
//             <a href="mailto:zainj5885@gmail.com">zainj5885@gmail.com</a>
//           </p>
//           <p>
//             <MdCall className="icon" />
//             <a href="tel:+923090832254">+92 309 0832254</a>
//           </p>
//         </div>

//         {/* Clickable Social Links */}
//         <div className="social-icons">
//           <a
//             href="https://www.linkedin.com/in/https://www.linkedin.com/in/zain-ali-7470b8361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedinIn />
//           </a>
//           <a
//             href="https://wa.me/+923090832254"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaWhatsapp />
//           </a>
//           <a
//             href="https://www.instagram.com/https://https://www.instagram.com/ch_zain_0832?utm_source=qr&igsh=NW5vaWN0bDdldm9y/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram />
//           </a>
//         </div>
//       </div>

//       <form className="contact-form">
//         <input type="text" placeholder="Enter Your Name" />
//         <input type="email" placeholder="Enter Your Email" />
//         <input type="text" placeholder="Enter Your Subject" />
//         <textarea placeholder="Enter Your Message"></textarea>
//         <button type="submit" className="submit-btn">
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// }

// export default Contact;





import React, { useRef, useEffect } from "react";
import "./Contact.css";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-animate");
        } else {
          // Remove class so animation happens again when scrolling back
          entry.target.classList.remove("show-animate");
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    // Cleanup
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section className="contact-section" ref={contactRef} id="contact">
      <div className="contact-left">
        <h2 className="contact-title">
          Contact <span>Me</span>
        </h2>
        <h3 className="contact-subtitle">Let's Work Together</h3>
        <p className="contact-text">
          “I’m always open to discussing new projects, creative ideas, or
          opportunities to collaborate. Feel free to reach out and I’ll get back
          to you as soon as possible.”
        </p>
        <div className="contact-info">
          <p>
            <MdEmail className="icon" />
            <a href="mailto:zainj5885@gmail.com">zainj5885@gmail.com</a>
          </p>
          <p>
            <MdCall className="icon" />
            <a href="tel:+923090832254">+92 309 0832254</a>
          </p>
        </div>

        {/* Clickable Social Links */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/https://www.linkedin.com/in/zain-ali-7470b8361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://wa.me/+923090832254"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/https://https://www.instagram.com/ch_zain_0832?utm_source=qr&igsh=NW5vaWN0bDdldm9y/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Enter Your Name" />
        <input type="email" placeholder="Enter Your Email" />
        <input type="text" placeholder="Enter Your Subject" />
        <textarea placeholder="Enter Your Message"></textarea>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
