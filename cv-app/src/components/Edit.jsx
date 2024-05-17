/* eslint-disable react/prop-types */

import EduField from "./EduField"
import Form from "./Form"
import PracField from "./PracField"


const Edit = ({
              cur,
              skill,
              skillRender,
              setSkillRendered,
              link,
              linksRender,
              setLinksRendered,
              sections,
              handleSkillChange,
              handleLinkChange,
              handleSkillRender,
              handleLinksRender,
              handleNextButton,
              handleBackButton,
              handleDelation,
              generalInformation,
              setGeneralInformation,
              eduExp,
              setEduExp,
              pracExp,
              setPracExp
            }) => {
  return (
    <section className="edit bg-stone-600 min-h-screen flex flex-col p-4 text-white">
      <h1 className="text-4xl font-serif font-extrabold mb-6 text-white">CV Application</h1>

      { cur===0 &&
      <Form
        handleNextButton={handleNextButton}
        handleBackButton={handleBackButton}
        >

        <h1 className="text-3xl">General Information</h1>
        <div className="flex flex-col gap-4 align-middle">

          <div>
            <label htmlFor="name">Full Name </label><br/>
            <input
                value={generalInformation.name}
                onChange={(e)=>setGeneralInformation({...generalInformation, name: e.target.value})}
                id='name'
                type="text"
                placeholder="ex. John Doe"
            />
          </div>

          <div>
            <label htmlFor="title">Professional Title </label><br/>
            <input
                value={generalInformation.proTitle}
                onChange={(e)=>setGeneralInformation({...generalInformation, proTitle: e.target.value})}
                id='title'
                type="text"
                placeholder="ex. Social Media Marketer"
            />
          </div>

          <div>
            <label htmlFor="phone">Phone  </label><br/>
            <input
                value={generalInformation.phone}
                onChange={(e)=>setGeneralInformation({...generalInformation, phone: e.target.value})}
                id='phone'
                type="text"
                placeholder="ex. [coutry-code] - 12345"
            />
          </div>

          <div>
            <label htmlFor="email">Email  </label><br/>
            <input
                value={generalInformation.email}
                onChange={(e)=>setGeneralInformation({...generalInformation, email: e.target.value})}
                id='email'
                type="email"
                placeholder="ex. example@example.com"
            />
          </div>

          <div>
            <label htmlFor="ctry">Country/City </label><br/>
            <input
                value={generalInformation.country}
                onChange={(e)=>setGeneralInformation({...generalInformation, country: e.target.value})}
                id="ctry"
                type="text"
                placeholder="ex.Addis Ababa Ethiopia"
            />
          </div>

          <div>
            <label htmlFor="desc">Profile Description </label><br/>
            <textarea
                maxLength={200}
                value={generalInformation.profileDesc}
                onChange={(e)=>setGeneralInformation({...generalInformation, profileDesc: e.target.value})}
                id="desc"
                cols="20"
                rows="3"
                placeholder="ex. Lorem ipsum dolor amet"
                ></textarea>
          </div>

        </div>
    </Form>}

    { cur===1 &&
      <Form
          handleNextButton={handleNextButton}
          handleBackButton={handleBackButton}
          >
          <h1 className="text-3xl">Educational Experience</h1>
          <EduField eduExp={eduExp} setEduExp={setEduExp}/>
      </Form>}

      { cur===2 &&
        <Form
          handleNextButton={handleNextButton}
          handleBackButton={handleBackButton}
          >
          <h1 className="text-3xl">Practical Experience</h1>
          <PracField pracExp={pracExp} setPracExp={setPracExp}/>

      </Form>}
      { cur===3 &&
        <Form
          handleNextButton={handleNextButton}
          handleBackButton={handleBackButton}
          >
          <h1 className="text-3xl">Skills and Social Links</h1>
          <div  className="flex flex-col gap-4 align-middle">
            <div>
              <label htmlFor="skills">Write skills </label><br/>
              <input
                  id='skills'
                  value={skill}
                  onChange={handleSkillChange}
                  type="text"
                  className="h-12 w-3/4 rounded-2xl p-2"
                  placeholder="ex. Social media management"
              />

              <button
                  onClick={(e)=>handleSkillRender(e)}
                  className="m-2 w-11 text-xs rounded-xl border bg-black p-2"
                  >Add
              </button><br /> <br />

              <ul className=" flex w-96 flex-wrap gap-3 p-2">
                {
                  skillRender.map((skill, index)=>
                  <li className="bg-slate-900 p-2 rounded-xl" key={skill+index}>
                    <span>{skill}</span>
                    <span
                      onClick={(e)=>handleDelation(e, skillRender, setSkillRendered)}
                      className="cursor-pointer ml-2 bg-red-500 rounded-md pl-1 pr-1">X</span>
                  </li>
                  )
                }
                </ul>
            </div>
          <div>
            <label htmlFor="links">Social Links</label><br/>
            <input
                id='links'
                type="text"
                value={link}
                onChange={handleLinkChange} className="h-12 w-3/4 rounded-2xl p-2"
                placeholder="ex. LinkedIn"
            />
            <button
                onClick={(e)=>handleLinksRender(e)}
                className="m-2 w-11 text-xs rounded-xl border bg-black p-2">
            Add</button> <br /> <br />

            <ul className=" flex w-96 flex-wrap gap-3 p-2">
              {
                linksRender.map((link, index)=>
                  <li key={link + index} className="bg-slate-900 p-1 rounded-xl">
                      <span>{link}</span>
                    <span
                      onClick={(e)=>handleDelation(e, linksRender, setLinksRendered)}
                      className="cursor-pointer ml-2 bg-red-500 rounded-md pl-1 pr-1"
                      >X</span>
                  </li>
                  )
              }
              </ul>
          </div>
          </div>
      </Form>}

      <span className="self-center">Next Up: <span className="text-green-400">{sections[cur === 3 ? 0 : cur + 1]}</span></span>
    </section>
  )
}

export default Edit