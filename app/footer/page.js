import React from "react";
import Image from "next/image";
import Link from "next/link";


function Footer(){
    return(
        <div>
            <div className="footer">
            <div className="icon-footer">
                <Link className="link-icon" target="_blank" href="https://github.com/mohamad-fawzy">
                    <div  className="img-cont">
                        <img src="/imgskills/github.png"/>
                        <h5>github</h5>
                    </div> 
                </Link>
                <Link className="link-icon" target="_blank" href="https://www.linkedin.com/in/mohamedweb-developer/">
                    <div  className="img-cont">
                        <img src="/imgskills/icons8-linkedin-480.png" />
                        <h5>linkedin</h5>
                    </div> 
                </Link>
                <Link className="link-icon" target="_blank" href="https://t.me/mo_codeX">
                    <div  className="img-cont">
                        <img src="/imgskills/icons8-telegram-480.png"  />
                        <h5>telegram</h5>
                    </div> 
                </Link>
                <Link className="link-icon" target="_blank" href=" https://wa.me/1006079972?text=This%20is%20a%20test">
                    <div  className="img-cont">
                        <img src="/imgskills/icons8-whatsapp-480.png"  />
                        <h5>whatsapp</h5>
                    </div> 
                </Link>
            </div>
            </div>
            <div className="text-footer">
                © oct 2023 By Mohamed Alborolusy use Next.js 
            </div>
        </div>
    )
}
export default Footer