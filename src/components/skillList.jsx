import React from 'react'
import { SKILLS } from '../skills';
import Skills from '../components/Skills';
export default function skillList() {
  return (
    <div className='icons flex flex-row justify-center'>
        {SKILLS.map((skills) => (
            <Skills data={skills}/>
        ))}
    </div>
  )
}
