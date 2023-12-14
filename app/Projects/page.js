import React from "react";
import IconScills from "../skills/IconScills"
import Image from "next/image";
import Link from "next/link";



function Allprojects(){

    return(
        <div className="pro-conte">


            <div className="allProjects">
                <div className="Project">
                    <div>
                        <h3>Myportofolio</h3>
                    </div>
                    <a target="_blank" href='https://github.com/mohamad-fawzy/Digital-Marketing-Agency-'>
                        <img src='./imgProjects/mypor.png'/>
                    </a> 
                    <div className="proj-tools">
                        <img src="/imgskills/react.png" />
                        <img src="/imgskills/nextjs.png" />
                        <img src="/imgskills/javascript.png" />
                        <img src="/imgskills/sass.png" />
                    </div>
                </div>
            </div>

            <div className="allProjects">
                <div className="Project">
                    <div>
                        <h3>Marketing</h3>
                    </div>
                    <a target="_blank" href='https://github.com/mohamad-fawzy/Digital-Marketing-Agency-'>
                        <img src='./imgProjects/marketing.png'/>
                    </a> 
                    <div className="proj-tools">
                        <img src="/imgskills/html5.png" />
                        <img src="/imgskills/css.png" />
                        <img src="/imgskills/sass.png" />
                    </div>
                </div>
            </div>

            <div className="allProjects">
                <div className="Project">
                    <div>
                        <h3>Workspace</h3>
                    </div>
                    <a target="_blank" href='https://github.com/mohamad-fawzy'>
                        <img src="/imgProjects/work.png"/>
                    </a> 
                    <div className="proj-tools">
                        <img src="/imgskills/html5.png" />
                        <img src="/imgskills/css.png" />
                    </div>

                </div>
            </div>
            <div className="allProjects">
                <div className="Project">
                    <div>
                        <h3>Codex</h3>
                    </div>
                    <a target="_blank" href='https://github.com/mohamad-fawzy/codex'>
                        <img src="/imgProjects/codex.png"/>
                    </a> 
                    <div className="proj-tools">
                        <img src="/imgskills/html5.png" />
                        <img src="/imgskills/css.png" />
                        <img src="/imgskills/sass.png" />
                    </div>

                </div>
            </div>
            <div className="allProjects">
                <div className="Project">
                    <div>
                        <h3>Iphon 13 pro max</h3>
                    </div>
                    <a target="_blank" href='https://github.com/mohamad-fawzy/iphon-13-pro-max'>
                        <img src="/imgProjects/phon.png"/>
                    </a> 
                    <div className="proj-tools">
                        <img src="/imgskills/html5.png" />
                        <img src="/imgskills/css.png" />
                        <img src="/imgskills/javascript.png" />
                    </div>
                </div>
            </div>
       </div>
    )
}

  
export default Allprojects;

