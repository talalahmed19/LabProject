import{Link} from "react-router-dom";
import "./background.css";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
function Menu(){
  const navigate=useNavigate();
  function Navigation(){
    navigate("/Login");
  }
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
       {/* <Link to="/Login">
       <button class="navbar-brand" href="#" className="btn1">Care and Cure Hospital</button>
       </Link>  */}
      
      <button class="navbar-brand" href="#" className="btn1" onClick={Navigation}>Care and Cure Hospital</button>


       <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
         <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
     
       <Link to="/Req">
       <li class="nav-item active">
             <button class="nav-link" href="#" className="btn2">Request an Appointment</button>
           </li>
       </Link>
           <Link to="/about">
           <li class="nav-item active">
             <button class="nav-link" href="#" className="btn2">About</button>
           </li>
           </Link>
           <Link to="/contact">
           <li class="nav-item active">
             <button class="nav-link" href="#" className="btn2">Contact Us</button>
           </li>
           </Link>
           <Link to="/Dashboard">
           <li class="nav-item active">
             <button class="nav-link" href="#" className="btn2">Admin Site</button>
           </li>
           </Link>
         </ul> </div>
     </nav>
     <div className="background">
    
</div>

</div>
);
}
export default Menu;