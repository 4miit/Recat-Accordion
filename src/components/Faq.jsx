
import Accordion from "./Accordion"
import data from '../data.json'
export default function Faq(){

    return (
        <>
        <h1>Faq</h1>
        {data.faqs.map((obj,index) => {
               return(
                <Accordion qna ={obj} key={index} />
               )
        })}
         </>
    )
}