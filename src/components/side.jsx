import useCounterStore from "../../store/oraculus";

export default function Side(){

   const {horoscope, currentIndex}=useCounterStore()

   return(
      <aside>
         <img src={horoscope[currentIndex].image} alt={horoscope[currentIndex].signe}/>
      </aside>
   )
}