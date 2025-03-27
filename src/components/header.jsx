import {Link} from 'react-router-dom'
import useCounterStore from "../../store/oraculus";

function Header(){

   const {next, previous}=useCounterStore()

   return(
      <header>
         <Link to="/">
            <img src="./img/logo-oraculus.png" alt="Logo Oraculus"/>
         </Link>
         <nav>
            <ul>
               <li><Link className='active' to="#">Horoscope</Link></li>
               <li><Link to="#">A propos</Link></li>
               <li><Link to="#">Contact</Link></li>
            </ul>
         </nav>

         <div className='arrow'>
            <Link onClick={previous} to="#"> <i className="fa-solid fa-chevron-left" /></Link>
            <Link onClick={next} to="#"> <i className="fa-solid fa-chevron-right" /></Link>          
         </div>
      </header>
   )
}
export default Header