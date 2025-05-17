import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Akshay </h4>
      <h4>Copyright &copy; 2025</h4>
      <div className='footerLinks'>
        <a href="https://github.com/2309Akki" target='_blank'><FaGithub/></a>
        <a href="www.linkedin.com/in/akshay-sawalagi" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:akshaysawalagi2309@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer