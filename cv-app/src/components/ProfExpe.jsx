/* eslint-disable react/prop-types */

import Practical from "./Practical"

const ProfExpe = ({pracExp}) => {
  return (
    <div>
      <h1  className="text-2xl mb-3">Practical Experience</h1>
      <ul>
        <li className="list-decimal"><Practical pracExp={pracExp} /></li>
      </ul>
    </div>
  )
}

export default ProfExpe
