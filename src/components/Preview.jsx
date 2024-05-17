/* eslint-disable react/prop-types */

import CV from "./CV"

const Preview = ({
                  skillRender,
                  linksRender,
                  generalInformation,
                  eduExp,
                  pracExp
                }) => {
  return (
    <section className="bg-black text-white p-20">
      <CV
        skillRender={skillRender}
        linksRender={linksRender}
        generalInformation={generalInformation}
        eduExp={eduExp}
        pracExp={pracExp}
      />
    </section>
  )
}

export default Preview
