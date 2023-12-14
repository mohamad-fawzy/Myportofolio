
// ________ import component ____________


'use client'
import Link from "next/link";
import { Router} from "next/router";
import {useState , useRef} from 'react'
import { usePathname } from "next/navigation";
import CustomizedMenus from "./menu"



const Li_topbar  = (nametap) => {    
    return(  
        <div>{nametap.tap}</div>
    );
}








const Topbar = () => {

    const [ val , setval ] = useState("li_tap")
    
    function redtap() {
        setval("redClass")
        

    }
    return(
        <div className="topbar">
                <div className="logo-bg">
                    <h1 className="mynm">Mohamed Fawzy Alborolusy</h1>
                    <div><h3>Frontend Web Developer</h3></div>
                </div>
                <ul className="ul_topbar" >
                    <Link  href="/" className={usePathname()==="/" ? "redClass" : "li_tap"}   >
                        <Li_topbar tap='Home'>  </Li_topbar>
                    </Link>

                    <Link href="/skills" className={usePathname()==="/skills" ? "redClass" : "li_tap"}>
                        <Li_topbar tap='Skills'/> 
                    </Link>

                    <Link href="/Projects"  className={usePathname()==="/Projects" ? "redClass" : "li_tap"}>
                        <Li_topbar tap='Projects'/>
                    </Link>

                    <Link href="/footer"  className={usePathname()==="/footer" ? "redClass" : "li_tap"}>
                        <Li_topbar tap='Contact Me'/>
                    </Link>
                    <CustomizedMenus/>
                </ul>
               

        </div>
    );
}

export default Topbar
