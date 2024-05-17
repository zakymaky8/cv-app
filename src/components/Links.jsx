/* eslint-disable react/prop-types */

const Links = ({linksRender}) => {
  return (
    <div>
      <h1 className="text-xl  mr-1 mb-5">Website and Social Links</h1>
      <ul className="list-decimal pl-5">
        {linksRender.map((link,index)=><li className="p-2" key={link+index}>{link}</li>)}
      </ul>
    </div>
  )
}

export default Links
