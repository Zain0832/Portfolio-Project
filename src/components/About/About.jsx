// // import React, { useState } from "react";
// // import "./About.css";
// // import AboutImage from "../../assets/images/profile.png";
// // import MoreAbout from "./MoreAbout";

// // function About() {
// //   const [showMore, setShowMore] = useState(false);

// //   return (
// //     <>
// //       <section className="about" id="about">
// //         <div className="about-container">
// //           {/* IMAGE LEFT */}
// //           <div className="about-image-wrapper">
// //             <div className="glow-ring-about">
// //               <img src={AboutImage} alt="Zain Ali" className="about-image" />
// //             </div>
// //           </div>

// //           {/* TEXT RIGHT */}
// //           <div className="about-text">
// //             <h2>About Me</h2>
// //             <p>
// //                I’m a passionate Frontend Web Developer focused on creating clean, responsive, and visually appealing digital experiences.
// //                I specialize in HTML, CSS, JavaScript, and React, and I enjoy turning ideas into functional and user-friendly interfaces.

// //               Currently, I’m sharpening my skills through a hands-on internship where I work on real-world projects, follow modern
// //               development standards, and improve my problem-solving abilities. My goal is to become a full-stack developer capable
// //               of building complete, high-quality applications.
// //             </p>

// //             {/* BUTTONS */}
// //             <div className="button-row">
// //               <button
// //                 className="btn more-btn"
// //                 onClick={() => setShowMore(!showMore)}
// //               >
// //                 {showMore ? "Show Less" : "More About Me"}
// //               </button>

// //               <a
// //                 href="/resume.pdf"
// //                 className="btn resume-btn"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 Download Resume
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* MoreAbout section with smooth expand/collapse */}
// //       <div className={`more-about-wrapper ${showMore ? "open" : ""}`}>
// //         <MoreAbout />
// //       </div>
// //     </>
// //   );
// // }

// // export default About;

 import React, { useState } from "react";
 import "./About.css";
 import AboutImage from "../../assets/images/profile.png";
 import MoreAbout from "./MoreAbout";
 import { FaChevronDown } from "react-icons/fa"; // arrow icon

 function About() {
   const [showMore, setShowMore] = useState(false);

   return (
     <>
       <section className="about" id="about">
        <div className="about-container">
          {/* IMAGE LEFT */}
          <div className="about-image-wrapper">
            <div className="glow-ring-about">
              <img src={AboutImage} alt="Zain Ali" className="about-image" />
            </div>
          </div>

           {/* TEXT RIGHT */}
           <div className="about-text">
             <h2>About Me</h2>
             <h3 className="about-text1">Frontend Developer</h3>
             <p>
               I’m a passionate Frontend Web Developer focused on creating clean,
               responsive, and visually appealing digital experiences. I
               specialize in HTML, CSS, JavaScript, and React, and I enjoy
               turning ideas into functional and user-friendly interfaces.
               Currently, I’m sharpening my skills through a hands-on internship
               where I work on real-world projects, follow modern development
               standards, and improve my problem-solving abilities. My goal is to
               become a full-stack developer capable of building complete,
               high-quality applications.
             </p>
             {/* BUTTONS */}
             <div className="button-row">
               <button
                 className="btn more-btn"
                 onClick={() => setShowMore(!showMore)}
               >
                 {showMore ? "Show Less" : "More About Me"}{" "}
                 <FaChevronDown
                   className={`arrow-icon ${showMore ? "rotate" : ""}`}
                 />
               </button>

               <a
                 href="/resume.pdf"
                 className="btn resume-btn"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Download Resume
               </a>
             </div>
           </div>
         </div>
       </section>

       {/* MoreAbout section with smooth expand/collapse */}
       <div className={`more-about-wrapper ${showMore ? "open" : ""}`}>
         <MoreAbout />
       </div>
        </>
   );
 }

 export default About;

