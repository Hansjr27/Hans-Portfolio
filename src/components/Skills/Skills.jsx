import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className='skills-container' id="skills">
      <h5 data-aos="fade-right">Technical Porficiency</h5>
      <div className="skills-content">
        <div className="skills" data-aos="fade-right" >
        {SKILLS.map((item) => (
          <SkillCard
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
            isActive={selectedSkill.title === item.title}
            onClick={() => handleSelectSkill(item)}
          />
        ))}
        </div>
        <div className="skills-info" data-aos="fade-left">
        <SkillsInfoCard
          heading={selectedSkill.title}
          Skills={selectedSkill.Skills}
        />
        </div>
      </div>
    </section>
  )
}

export default Skills