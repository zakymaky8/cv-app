/* eslint-disable react/prop-types */
const Edu = ({eduExp}) => {
  return (
    <div>
      <h1 className="text-xl">
            {eduExp.studyTitle} at {eduExp.schoolName}
      </h1>
      <p  className="text-base ml-3 mb-3"> {'> '} From {eduExp.startDate} to {eduExp.endDate} </p>
      <p  className="text-sm  text-justify">{eduExp.description}</p>
    </div>
  )
}

export default Edu
