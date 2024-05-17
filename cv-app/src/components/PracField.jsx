/* eslint-disable react/prop-types */

const PracField = ({pracExp, setPracExp}) => {
  return (
    <div className="flex flex-col gap-4 align-middle">
        <div>
            <label htmlFor="name">Campany Name </label><br/>
            <input value={pracExp.campanyName} onChange={(e)=>setPracExp({...pracExp, campanyName: e.target.value})} id='name' type="text"  placeholder="ex. google"/>
        </div>
        <div>
            <label htmlFor="title">Position Title </label><br/>
            <input value={pracExp.posTitle} onChange={(e)=>setPracExp({...pracExp, posTitle: e.target.value})} id='title' type="text"  placeholder="ex. Digital Marketer"/>
        </div>
        <div>
            <label htmlFor="repons">Main Responsibility  </label><br/>
            <input  value={pracExp.mainRespo} onChange={(e)=>setPracExp({...pracExp, mainRespo: e.target.value})} id='repons' type="text"  placeholder="ex. Search engine Markekting"/>
        </div>
        <div className="flex gap-3">
            <div>
            <label htmlFor="date">Start Date</label><br/>
            <input  value={pracExp.startDate} onChange={(e)=>setPracExp({...pracExp, startDate: e.target.value})} id="sdate" type="date"/>
            </div>
            <div>
            <label htmlFor="ctry">End Date</label><br/>
            <input  value={pracExp.endDate} onChange={(e)=>setPracExp({...pracExp, endDate: e.target.value})} id="edate" type="date"/>
            </div>
        </div>
        <div>
            <label htmlFor="desc">Short Description </label><br/>
            <textarea  value={pracExp.description} onChange={(e)=>setPracExp({...pracExp, description: e.target.value})} name="" id="" cols="20" rows="3"  placeholder="ex. In this role at google I have bla bla"></textarea>
        </div>
        <hr />
    </div>
  )
}

export default PracField
