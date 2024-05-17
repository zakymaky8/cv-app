/* eslint-disable react/prop-types */

import Edu from "./Edu"

const EduExpe = ({eduExp}) => {
  return (
    <div>
      <h1  className="text-2xl  mb-3">Educational Experience</h1>
      <ul>
        <li className="list-decimal"><Edu eduExp={eduExp} /></li>
      </ul>
      
    </div>
  )
}

export default EduExpe
