import Link from "next/link";


function AbutMy(){
    const text = {
        ftext : 'Always available as your partner on your journey towards pioneering and entrepreneurship. Let’s take the path to achieve your technological ambitions." ',
        myname :'Im Mohamed Alborolusy',
        title  : 'Frontend Web Developer'
    }


    return(
        <div className="cont-abutmy">
            <div className="AbutMy">
                <div className="top-text">{text.ftext}</div>
                <h1 className="myname">{text.myname}</h1>
                <h1 className="mytitle">{text.title}</h1>
            </div>
        </div>

    );
}
export default AbutMy