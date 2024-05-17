/* eslint-disable react/prop-types */

const Form = ({children, handleNextButton, handleBackButton}) => {
  return (
      <div className="form bg-black flex flex-col gap-8 p-6 rounded-2xl m-3">
        {children}
        <div className="flex gap-3 w-full justify-between">
          <button onClick={handleBackButton} className="rounded-xl border bg-black p-2">Back</button>
          <button onClick={handleNextButton} className="rounded-xl border bg-black p-2">Next</button>
        </div>
      </div>
  )
}

export default Form