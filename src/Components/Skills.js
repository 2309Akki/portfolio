// import React from 'react'; 
// import { CgCPlusPlus } from "react-icons/cg";
import {FaReact,
  //  FaPython, FaGitAlt, FaGithub, FaBootstrap,
   FaNpm, FaFigma, FaJava} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiTailwindcss,
  //  SiVercel
   } from "react-icons/si";
// import { FaCode } from 'react-icons/fa';





const Skills = ({skill}) => {
    const icon = {
      Postman: <SiPostman />,
      React: <FaReact />,
      Javascript: <DiJavascript1 />,
      Node : <DiNodejs />,
      Express : <SiExpress />,
      MongoDb : <SiMongodb />,
      Npm : <FaNpm />,
      Figma : <FaFigma />,
      Tailwindcss: <SiTailwindcss />,
      JAVA: <FaJava />
      
      
      // Bootstrap: <FaBootstrap />,
      // 'C++': <CgCPlusPlus />,
    // Vercel : <SiVercel />,
    // Git : <FaGitAlt />,
    // Github : <FaGithub />,
};

    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
