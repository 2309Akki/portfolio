// import React from 'react';
// import {FaGithub} from "react-icons/fa";
// import {CgFileDocument} from "react-icons/cg";


// const  ProjectBox = ({projectPhoto, projectName}) => {
//   const desc = {
//     TindogDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
//     TindogGithub : "https://github.com/DevanshSahni/tindog",
//     TindogWebsite : "https://devanshsahni.github.io/tindog/",

//     RogFreeDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
//     RogFreeGithub : "https://github.com/DevanshSahni/Rog-Free",
//     RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

//     NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
//     NewsletterGithub:"",
//     NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
//     WigglesDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
//     WigglesGithub:"https://github.com/DevanshSahni/Wiggles",
//     WigglesWebsite:"https://wiggles.vercel.app/",
//   }

//   let show ='';
//   if(desc[projectName + 'Github']===""){
//     show="none";
//   }
    
//   return (
//     <div className='projectBox'> 
//         <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
//         <div>
//             <br />
//             <h3>{projectName}</h3>
//             <br />
//             {desc[projectName + 'Desc']}
//             <br />

//             <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
//               <button className='projectbtn'><FaGithub/> Github</button>
//             </a>

//             <a href={desc[projectName + 'Website']} target='_blank'>
//               <button className='projectbtn'><CgFileDocument/> Demo</button>
//             </a>
//         </div>
//     </div>
//   )
// }

// export default  ProjectBox
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    JobHuntDesc: "Job Hunt is a full-stack job portal built using the MERN stack. It allows users to search, apply for, and manage job listings, while employers can post openings, view applicants, and manage company profiles.",
    JobHuntGithub: "https://github.com/2309Akki/job_HUNT.git", // replace with your real GitHub link
    JobHuntWebsite: "https://job-hunt-tst7.onrender.com/", // replace with your deployed link if available

    QuickStayDesc: "Quick Stay is a hotel booking web application that enables users to browse hotels, view rooms, and make secure bookings. It features user authentication, payment integration, and cloud-based image uploads.",
    QuickStayGithub: "https://github.com/2309Akki/Hotel-Management.git", // replace with your real GitHub link
    QuickStayWebsite: "https://quickstay-snowy-ten.vercel.app/", // replace with your deployed link if available
  };

  let show = '';
  if (desc[projectName + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank' rel="noreferrer">
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a href={desc[projectName + 'Website']} target='_blank' rel="noreferrer">
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
