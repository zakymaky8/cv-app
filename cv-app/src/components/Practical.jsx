/* eslint-disable react/prop-types */

const Practical = ({pracExp}) => {
  return (
    <div>
      <h1  className="text-xl">{pracExp.posTitle} at {pracExp.campanyName}, Dedicating on {pracExp.mainRespo}.</h1>
      <p className="text-base ml-3 mb-3">{'> '} From {pracExp.startDate} to {pracExp.endDate}</p>
      <p  className="text-sm text-justify">{pracExp.description}</p>
    </div>
  )
}

export default Practical
