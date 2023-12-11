import React from "react"; 
import IconSkills from "./IconScills";




// __________________________________________




function Skills () {
    return (
    <div>
        <h1 className="title-skills">Technology skills</h1>
        <div className="skills">
            <IconSkills img="/imgskills/react.png" title='React.js'/>
            <IconSkills img="/imgskills/nextjs.png" title='Next.js'/>
            <IconSkills img="/imgskills/javascript.png" title='Javascript'/>
            <IconSkills img="/imgskills/sass.png" title='Sass'/>
            <IconSkills img="/imgskills/bootstrap.png" title='Bootstrap'/>
            <IconSkills img="/imgskills/html5.png" title='HTML5'/>
            <IconSkills img="/imgskills/css.png" title='Css3'/>
            <IconSkills img="/imgskills/github.png" title='Github'/>
            <IconSkills img="/imgskills/tailwindcss.png" title='tailwindcss'/>
            <IconSkills img="/imgskills/linux.png" title='Linux'/>
        </div>
    </div>
    )
}

export default Skills ;
