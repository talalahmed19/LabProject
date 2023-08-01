import "./Contact.css";
import Menu from "./Menu";
import { useState } from "react";
import { Contacts} from "./Service/api";
import { Link } from "react-router-dom";

function Contact(){
    const [patientData,setpatientData]=useState({
        patientName:"",
        Email:"",
        Subject:"",
        Message:""
      })
    //   const {patientName,Email,Subject,Message}=patientData;
      const handleChange=(e)=>{
        setpatientData({...patientData,[e.target.name]:[e.target.value]})
      }
    async  function addMessage(e){
        e.preventDefault();
        await Contacts(patientData);
      }
    return(
        <div>
            <Menu/>
        <div className="contact">
            
        <section class="mb-4">

    <h2 class="h1-responsive font-weight-bold">Contact us</h2>
    
    <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

        {/* <!--Grid column--> */}
        <div class="col-md-7 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                {/* <!--Grid row--> */}
                <div class="row">
                <label for="name" class="">Your name</label>
                    {/* <!--Grid column--> */}
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text"  name="patientName" class="form-control" onChange={(e)=>handleChange(e)}/>
                           
                        </div>
                    </div>
                    {/* <!--Grid column--> */}
                    <label for="email" class="">Your email</label>
                    {/* <!--Grid column--> */}
                    <div class="col-md-6">
                    
                        <div class="md-form mb-0">
                            <input type="text"  name="Email" class="form-control"  onChange={(e)=>handleChange(e)}/>
                            
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row-->

                <!--Grid row--> */}
                <label for="subject" class="">Subject</label>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text"  name="Subject" class="form-control" onChange={(e)=>handleChange(e)}/>
                            
                        </div>
                    </div>
                </div>
                {/* <!--Grid row-->

                <!--Grid row--> */}
                 <label for="message">Your message</label>
                <div class="row">
{/* 
                    <!--Grid column--> */}
                    <div class="col-md-12">

                        <div class="md-form">
                        <input type="text"  name="Message" class="form-control" onChange={(e)=>handleChange(e)}/>
                           
                        </div>

                    </div>
                </div>
                {/* <!--Grid row--> */}
                <button type="submit" onClick={(e)=>addMessage(e)} class="btn btn-primary" className="submit" style={{height:"55px",width:"100px",marginLeft:"20px",borderRadius:"6px",marginTop:"12px"}}>Submit</button>
                
            </form>
            </div>
            <Link to="/contact2">
                <button type="submit" class="btn btn-primary" className="submit" style={{height:"55px",width:"100px",marginLeft:"20px",marginTop:"15px",borderRadius:"6px"}}>View Messages</button>
                </Link>
    </div>

</section>
{/* <div style={{height:'500px',width:'1270px'}}>
    <h2 style={{marginTop:'100px'}}>Comment & Reviews</h2>
    <h5 style={{color:'grey'}}>Alex:</h5>
    <h6 style={{marginLeft:'50px',marginTop:'-28px',fontWeight:'normal'}}>Hospital staff is very good....and very cooperative</h6>
    <h5 style={{color:'grey'}}>Bairstow:</h5>
    <h6 style={{marginLeft:'90px',marginTop:'-28px',fontWeight:'normal'}}>Facilities in hospital are amazing</h6>
    <h5 style={{color:'grey'}}>Hazzle:</h5>
    <h6 style={{marginLeft:'70px',marginTop:'-28px',fontWeight:'normal'}}>Great to see they are accpti ng Government Health Cards....This is good for the peoples who dont have much capacity to afford</h6>
    <h5 style={{color:'grey'}}>Wood:</h5>
    <h6 style={{marginLeft:'65px',marginTop:'-28px',fontWeight:'normal'}}>Staff is very good they are keeping an eye on clealiness in rooms</h6>
</div> */}


</div>
</div>
    )
}
export default Contact;