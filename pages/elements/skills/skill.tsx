import { IconType } from 'react-icons/lib';
import { FaCss3, FaHtml5, FaLinux, FaRobot, FaPython, FaTruckLoading, FaTruck} from 'react-icons/fa'
import {SiRobotframework, SiTypescript, SiJavascript, SiOracle} from 'react-icons/si';
import {TbTestPipe} from 'react-icons/tb';
import { DiDatabase, DiScrum, DiGithubBadge } from 'react-icons/di';
import { MdHighQuality } from 'react-icons/md';
import { BiAnalyse } from 'react-icons/bi';
import { SlEnergy } from 'react-icons/sl';
import React from 'react';

const skillIcons = new Map<string, IconType>([
  ['html5', FaHtml5],
  ['css3', FaCss3],
  ['gnu/linux', FaLinux], 
  ['test automation', FaRobot],
  ['robot framework', SiRobotframework],
  ['python', FaPython],
  ['javascript', SiJavascript],
  ['typescript', SiTypescript],
  ['test planning', TbTestPipe],
  ['sql', DiDatabase],
  ['pl/sql', SiOracle],
  ['quality assurance', MdHighQuality],
  ['agile', SlEnergy],
  ['scrum', DiScrum],
  ['bussines analysis', BiAnalyse],
  ['git', DiGithubBadge],
  ['ci/cd', FaTruck],
  ['load test', FaTruckLoading],
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
