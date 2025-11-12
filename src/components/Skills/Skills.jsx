import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython
} from "react-icons/fa";

function Skills() {
  const skillsRef = useRef(null);

  // Initial state for circle numbers and CSS variable
  const [circleCounts, setCircleCounts] = useState([0, 0, 0, 0]);

  const circles = [
    { label: "Communication", value: 90 },
    { label: "Creativity", value: 65 },
    { label: "Team Work", value: 75 },
    { label: "Problem Solving", value: 85 }
  ];

  useEffect(() => {
    const currentRef = skillsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentRef.classList.add("show-animate");

          // Animate numbers + conic-gradient fill
          circles.forEach((circle, idx) => {
            let start = 0;
            const interval = setInterval(() => {
              start += 1;
              setCircleCounts(prev => {
                const updated = [...prev];
                updated[idx] = start;
                return updated;
              });

              // Update CSS variable for conic-gradient
              const circleEl = currentRef.querySelectorAll(".progress-wrapper")[idx];
              if (circleEl) {
                const deg = (start / 100) * 360; // convert % to degrees
                circleEl.style.setProperty("--value", `${deg}deg`);
              }

              if (start >= circle.value) clearInterval(interval);
            }, 20); // counting speed
          });
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      <h2 className="skills-heading">
        My <span>Skills</span>
      </h2>

      <div className="skills-wrapper">

        {/* LEFT SIDE — Technical Skills */}
        <div className="technical-skills">
          <h3>Technical Skills</h3>

          <div className="skill-bar">
            <div className="info">
              <span><FaHtml5 className="skill-icon html" /> HTML</span>
              <span>90%</span>
            </div>
            <div className="line html"></div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <span><FaCss3Alt className="skill-icon css" /> CSS</span>
              <span>80%</span>
            </div>
            <div className="line css"></div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <span><FaJs className="skill-icon js" /> JavaScript</span>
              <span>85%</span>
            </div>
            <div className="line js"></div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <span><FaReact className="skill-icon react" /> React</span>
              <span>75%</span>
            </div>
            <div className="line react"></div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <span><FaPython className="skill-icon python" /> Python</span>
              <span>70%</span>
            </div>
            <div className="line python"></div>
          </div>
        </div>

        {/* RIGHT SIDE — PROFESSIONAL CIRCULAR SKILLS */}
        <div className="professional-skills">
          <h3>Professional Skills</h3>

          <div className="circle-box">
            {circles.map((circle, idx) => (
              <div className="circle" key={idx}>
                <div
                  className="progress-wrapper"
                  data-value={circle.value}
                  style={{ "--value": "0deg" }} // initial CSS variable
                >
                  <div className="progress-inner">{circleCounts[idx]}%</div>
                </div>
                <h4>{circle.label}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;









// import React, { useEffect, useRef } from "react";
// import "./Skills.css";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaPython
// } from "react-icons/fa";

// function Skills() {
//   const skillsRef = useRef(null);

//   useEffect(() => {
//     const section = skillsRef.current;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // Add class to animate both bars and circles
//           section.classList.add("show-animate");

//           // Animate circles by setting --value based on data-value
//           const circles = section.querySelectorAll(".progress-wrapper");
//           circles.forEach(circle => {
//             const value = circle.getAttribute("data-value");
//             circle.style.setProperty("--value", value * 3.6); // 100% = 360deg
//           });
//         } else {
//           // Remove class to reset bars and circles
//           section.classList.remove("show-animate");

//           // Reset circles
//           const circles = section.querySelectorAll(".progress-wrapper");
//           circles.forEach(circle => {
//             circle.style.setProperty("--value", 0);
//           });
//         }
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(section);

//     return () => observer.unobserve(section);
//   }, []);

//   return (
//     <section className="skills-section" id="skills" ref={skillsRef}>
//       <h2 className="skills-heading">
//         My <span>Skills</span>
//       </h2>

//       <div className="skills-wrapper">
        
//         {/* LEFT SIDE — Technical Skills */}
//         <div className="technical-skills">
//           <h3>Technical Skills</h3>

//           <div className="skill-bar">
//             <div className="info">
//               <span><FaHtml5 className="skill-icon html" /> HTML</span>
//               <span>90%</span>
//             </div>
//             <div className="line html"></div>
//           </div>

//           <div className="skill-bar">
//             <div className="info">
//               <span><FaCss3Alt className="skill-icon css" /> CSS</span>
//               <span>80%</span>
//             </div>
//             <div className="line css"></div>
//           </div>

//           <div className="skill-bar">
//             <div className="info">
//               <span><FaJs className="skill-icon js" /> JavaScript</span>
//               <span>85%</span>
//             </div>
//             <div className="line js"></div>
//           </div>

//           <div className="skill-bar">
//             <div className="info">
//               <span><FaReact className="skill-icon react" /> React</span>
//               <span>75%</span>
//             </div>
//             <div className="line react"></div>
//           </div>

//           <div className="skill-bar">
//             <div className="info">
//               <span><FaPython className="skill-icon python" /> Python</span>
//               <span>70%</span>
//             </div>
//             <div className="line python"></div>
//           </div>
//         </div>

//         {/* RIGHT SIDE — Circular Professional Skills */}
//         <div className="professional-skills">
//           <h3>Professional Skills</h3>

//           <div className="circle-box">
//             <div className="circle">
//               <div className="progress-wrapper" data-value="90">
//                 <div className="progress-inner">90%</div>
//               </div>
//               <h4>Communication</h4>
//             </div>

//             <div className="circle">
//               <div className="progress-wrapper" data-value="65">
//                 <div className="progress-inner">65%</div>
//               </div>
//               <h4>Creativity</h4>
//             </div>

//             <div className="circle">
//               <div className="progress-wrapper" data-value="75">
//                 <div className="progress-inner">75%</div>
//               </div>
//               <h4>Team Work</h4>
//             </div>

//             <div className="circle">
//               <div className="progress-wrapper" data-value="85">
//                 <div className="progress-inner">85%</div>
//               </div>
//               <h4>Problem Solving</h4>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Skills;
