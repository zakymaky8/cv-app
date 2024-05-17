/* eslint-disable react/prop-types */
const GeneralInfo = ({generalInformation}) => {
  return (
    <div className="general flex border-b m-3 p-2 justify-between">
        <div className="">
            <h1 className="text-4xl">
              {generalInformation.name}
            </h1><br />

            <h3 className="text-2xl">
              {generalInformation.proTitle}
            </h3><br />

            <p className="text-sm italic w-96">
              {generalInformation.profileDesc}
            </p>
        </div>

        <div className="flex flex-col self-center border-l pl-6">
            <address>
              {generalInformation.country}
            </address>

            <a href={`tel:${generalInformation.phone}`}>
              {generalInformation.phone}
            </a>

            <a href={`mail-to: ${generalInformation.email}`}>
              {generalInformation.email}
            </a>
        </div>
    </div>
  )
}

export default GeneralInfo
