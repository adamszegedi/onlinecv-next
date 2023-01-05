import { IconType } from 'react-icons/lib';
import { FaCss3, FaHtml5, FaLinux, FaRobot, FaPython } from 'react-icons/fa'
import {SiRobotframework, SiTypescript, SiJavascript} from 'react-icons/si';
import React from 'react';

const skillIcons = new Map<string, IconType>([
  ['html5', FaHtml5],
  ['css3', FaCss3],
  ['gnu/linux', FaLinux], 
  ['test automation', FaRobot],
  ['robot framework', SiRobotframework],
  ['python', FaPython],
  ['javascript', SiJavascript],
  ['typescript', SiTypescript]
])

const Skill = ({ text }: {text:string}) => {
  const skillIcon = skillIcons.get(text.toLowerCase());
  return <li className="ml-3 text-slate-900 dark:text-slate-400 flex flex-row items-center">
    {skillIcon && 
      React.createElement(skillIcon)
    }
    <p className='ml-1'>{text}</p>
  </li>
  }
;

export default Skill;
