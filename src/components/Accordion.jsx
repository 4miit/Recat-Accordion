import '../App.css'
import { useState } from "react";


export default function Accordion({ qna }) {

    const [show,setShow] = useState(false);

    return (
        <div className="accord">
            <h3>
                {qna.question}{''} <span onClick = {() => setShow(!show)} > {show ? '-' : '+'}</span>
            </h3>
          {show ? <p>{qna.answer}</p> : ''}
        </div>
    );
}
