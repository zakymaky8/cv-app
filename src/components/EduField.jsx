/* eslint-disable react/prop-types */

const EduField = ({eduExp, setEduExp}) => {
  return (
    <div  className="flex flex-col gap-4 align-middle">
      <div>
        <label htmlFor="scname">School Name </label><br/>
        <input value={eduExp.schoolName} onChange={(e)=>setEduExp({...eduExp, schoolName: e.target.value})} id='scname' type="text"  placeholder="ex. Addis Ababa University"/>
      </div>
      <div>
        <label htmlFor="stutitle">Title of Study </label><br/>
        <input value={eduExp.studyTitle} onChange={(e)=>setEduExp({...eduExp, studyTitle: e.target.value})} id='stutitle' type="text"  placeholder="ex. Bachelor of Arts in Public Relations"/>
      </div>
      <div className="flex gap-3">
        <div>
          <label htmlFor="sdate">Start Date</label><br/>
          <input value={eduExp.startDate} onChange={(e)=>setEduExp({...eduExp, startDate: e.target.value})} id="sdate" type="date"/>
        </div>
        <div>
          <label htmlFor="edate">End Date</label><br/>
          <input value={eduExp.endDate} onChange={(e)=>setEduExp({...eduExp, endDate: e.target.value})} id="edate" type="date"/>
        </div>
      </div>
      <div>
        <label htmlFor="studesc">Short description </label><br/>
        <textarea value={eduExp.description} onChange={(e)=>setEduExp({...eduExp, description: e.target.value})} name="studesc" id="studesc" cols="30" rows="3"  placeholder="ex. In this study Lorem Ipsum Dolor Amet ..."></textarea>
      </div>
      <hr />
    </div>
  )
}

export default EduField
