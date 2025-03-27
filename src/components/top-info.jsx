import { Link } from "react-router-dom";
import useCounterStore from "../../store/oraculus";

export default function Infos(){

   const {next, previous, horoscope, currentIndex}=useCounterStore()
   
   const indexPrev = currentIndex === 0 ? horoscope.length -1 : currentIndex - 1;

   const indexNext = currentIndex === horoscope.length - 1 ? 0 : currentIndex + 1;

      return(

            <div>
               <Link onClick={previous} className="left-horoscope change" to="#">{horoscope[indexPrev].signe} <span>{horoscope[indexPrev].date}</span></Link>
               <Link onClick={next} className="right-horoscope change" to="#">{horoscope[indexNext].signe} <span>{horoscope[indexNext].date}</span></Link>
            </div>  
      )
   }
   
