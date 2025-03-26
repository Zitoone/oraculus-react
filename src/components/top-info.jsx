import { Link } from "react-router-dom";
import useCounterStore from "../../store/oraculus";

export default function Infos(){

   const {next, previous, horoscope, currentIndex}=useCounterStore()


   // let indexNext = currentIndex +1
   let indexPrev = horoscope[currentIndex -1]


   
      return(

            <div>
               {/* <Link onClick={previous} className="left-horoscope change" to="#">{indexPrev.signe} <span>{indexPrev.date}</span></Link> */}
               <Link onClick={next} className="right-horoscope change" to="#">{horoscope[currentIndex +1].signe} <span>{horoscope[currentIndex +1].date}</span></Link>
            </div>  
      )
   }
   
   // if (indexNext === horoscope.length) {
//   indexNext = 0;
// } else {
//   indexNext = horoscope.currentIndex + 1;
// }

   // const indexPrev = currentIndex === 0 ? horoscope.length - 1 : currentIndex -1
   // const indexNext = currentIndex + 1 > horoscope.length - 1 ? 0 : currentIndex + 1