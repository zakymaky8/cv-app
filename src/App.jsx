/* eslint-disable react/prop-types */

import { useState } from "react";
import Edit from "./components/Edit"
import Preview from "./components/Preview"

function App() {

  const [cur, setCur] = useState(0);
  const [skill, setSkills] = useState('');
  const [skillRender, setSkillRendered] = useState([])
  const [link, setLink] = useState('')
  const [linksRender, setLinksRendered] = useState([])

  const [generalInformation, setGeneralInformation] = useState({
    name: '',
    proTitle: '',
    phone: '',
    email: '',
    country: '',
    profileDesc: ''
  })
  const [eduExp, setEduExp] = useState({
    schoolName: '',
    studyTitle: '',
    startDate: '',
    endDate: '',
    description: ''
  })
  const [pracExp, setPracExp] = useState({
    campanyName: '',
    posTitle: '',
    mainRespo: '',
    startDate: '',
    endDate: '',
    description: ''
  })

  const sections = ['General Information', 'Educational Experience', 'Practical Experience', 'Skills and Social Links']

  function handleSkillChange(event) {
    setSkills(event.target.value)
  }

  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  function handleSkillRender() {
    skill.length > 2 ? (setSkillRendered([...skillRender, skill]), setSkills('')) : alert('Write something or exceed three characters')
  }

  function handleLinksRender() {
    link.length > 2 ? (setLinksRendered([...linksRender, link]), setLink('')) : alert('Write something or exceed three characters')
  }

  function handleNextButton() {
    setCur(cur===3 ? 0 : cur+1);
  }
  function handleBackButton() {
    setCur(cur===0 ? 3 : cur-1)
  }

  function handleDelation(event, arr, callback) {
    const copies = [...arr];
    let ind = copies.indexOf(event.target.parentElement.firstChild.textContent)
    copies.splice(ind, 1)
    callback(copies)
  }

  return (
    <div className="whole">
      <Edit
        cur={cur}
        skill={skill}
        skillRender={skillRender}
        setSkillRendered={setSkillRendered}
        link={link}
        linksRender={linksRender}
        setLinksRendered={setLinksRendered}
        sections={sections}
        handleSkillChange={handleSkillChange}
        handleLinkChange={handleLinkChange}
        handleSkillRender={handleSkillRender}
        handleLinksRender={handleLinksRender}
        handleNextButton={handleNextButton}
        handleBackButton={handleBackButton}
        handleDelation={handleDelation}

        generalInformation={generalInformation}
        setGeneralInformation={setGeneralInformation}

        eduExp={eduExp}
        setEduExp={setEduExp}

        pracExp={pracExp}
        setPracExp={setPracExp}
        />

      <Preview
        skillRender={skillRender}
        linksRender={linksRender}
        generalInformation={generalInformation}
        pracExp={pracExp}
        eduExp={eduExp}
      />
    </div>
  )
}

export default App