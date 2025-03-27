import Header from "../components/header"
import Infos from "../components/top-info"
import useCounterStore from "../../store/oraculus";
import "../style/home.css"
import Side from "../components/side";

function Home(){

   const {horoscope, currentIndex}=useCounterStore()

   document.querySelector('#datejour');
   const currentDate=new Date();
   const formatedDate=currentDate.toLocaleDateString();

   return(
      <>
      <Header />
      <main>
         <section>
            <Infos />
            <article>
               <p id="datejour">HOROSCOPE DU {formatedDate}</p>
               <h1>{horoscope[currentIndex].signe}</h1>
               <span id="date">{horoscope[currentIndex].date}</span>
               <div>
                  <p><span>Amour : </span>{horoscope[currentIndex].amour}</p>
                  <p><span>Travail : </span>{horoscope[currentIndex].travail}</p>
                  <p><span>Argent : </span>{horoscope[currentIndex].argent}</p>
                  <p><span>Santé : </span>{horoscope[currentIndex].sante}</p>
                  <p><span>Famille et amis : </span>{horoscope[currentIndex].famille}</p>
                  <p><span>Conseil : </span>{horoscope[currentIndex].conseil}</p>
               </div>
            </article>
         </section>

         <Side />

      </main>
      
      </>

   )
}
export default Home