/* eslint-disable react/prop-types */
import EduExpe from "./EduExpe"
import GeneralInfo from "./GeneralInfo"
import Links from "./Links"
import ProfExpe from "./ProfExpe"
import Skills from "./Skills"


const CV = ({
            skillRender,
            linksRender,
            generalInformation,
            eduExp,
            pracExp
          }) => {

  return (
    <div className="cv p-4" >
      <GeneralInfo generalInformation={generalInformation}/>
      <div className="skilink grid grid-rows-2 pl-6 pt-6">
        <Links linksRender={linksRender}/>
        <Skills skillRender={skillRender}/>
      </div>
      <div className="edupro grid grid-rows-2 border-l pl-6 pt-6 gap-6">
        <EduExpe eduExp={eduExp}/>
        <ProfExpe pracExp={pracExp}/>
      </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CV
