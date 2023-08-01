import{Link} from "react-router-dom";
import { useState } from "react";
import "./About.css";
import Menu from "./Menu";
function About(){
  
  const [cards, set] = useState([
    {
        image: 'img.jpg',
        title: 'Doctor jack is a Professional Surgeon and have 30 years of practice',
    },
    {
      image: 'img2.jpg',
      title: 'Doctor hales is a E.N.T specialist and have 10 years of practice',
  },
  {
    image: 'img33.jpg',
    title: 'Doctor Ben is a Neuro-Surgeon and have 5 years of practice',
},
])
function handleDelete(title) {
  const updateCard = cards.filter((card) => card.title !==title);
  set(updateCard);
}
  return(

<div>
<Menu/>
<div className="about">
<h1>About Us</h1>
<p>The plan of Care and Cure Hospital (CCH), Islamabad 
  was conceived in early 60s as the premier hospital for the capital 
  with the objective to provide tertiary level patient care services 
  and accept referrals. Doctors and allied health professions at all
   levels in the field of medicine & allied specialties, surgery & allied
   specialties, obstetrics/gynaecology and pediatrics provide clinical services,
    conduct applied research in relevant specialties and develop linkages with 
    academic institutions, national and international agencies including WHO, UNICEF, 
    JICA in order to provide state of the art clinical services, to promote health care
     activities, research and medical education.</p>
</div>

<div style={{display:'flex',flex:'wrap'}}>
            {
                cards.map((t) => (
<div style={{marginLeft:'30px'}} >
                    <div class="card text-white bg-dark mb-3" key={t.title} style={{ width: '400px', height: '448px', display: 'flex', flex: 'wrap', marginTop: '-10px',marginLeft:'60px', border:'none'}}>
                        <img src={t.image} class="card-img-top" alt="..." style={{ height: '400px' }} />
                        <div >
                            <h5 class="card-title" style={{backgroundColor:'white',color:'black',fontStyle:'italic',fontWeight:'bold',fontSize:'large',height:'80px'}}>{t.title}</h5>
                    </div>
<div style={{marginLeft:'150px',marginTop:'-20px'}}>
<button style={{width:'70px',backgroundColor:'grey',color:'white'}} onClick={() =>handleDelete(t.title)}>Delete</button>
</div>
</div>
</div>



                ))
            }

        </div>




<div className="pic1"></div>
<div className="mission">
  <h4>
    Our Vision & Mission
  </h4>
  <p>Our mission is conforming to a unique culture of excellence and innovation,
     our mission is to promote all aspects of health by providing compassionate patient care,
     quality education and cutting-edge research.</p>
</div>
</div>
  );
}
export default About;