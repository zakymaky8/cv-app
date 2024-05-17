/* eslint-disable react/prop-types */

const Skills = ({skillRender}) => {
  return (
    <div>
      <h1 className="text-xl mb-5">Skills</h1>
      <ul className="list-decimal pl-5">
        {skillRender.map((skill,index)=> <li className="p-2" key={skill+index}>{skill}</li>)}
      </ul>
    </div>
  )
}

export default Skills
