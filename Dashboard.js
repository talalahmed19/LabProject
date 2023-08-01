import { useState } from "react";
import Admin from "./Admin";
function Dashboard() {
    const [cards, set] = useState([
        {
            title: 'Doctor',
        },
        {
            title: 'Patient',
        },
        {
            title: 'Nurse',
        },
        {
            title: 'Blood-Bank',
        },
        {
            title: 'Death Record',
        },
    ])
    return ( 
        <div>
            <Admin/>
 <div style={{ border: '1px', height: '90px', width: '1540px', backgroundColor: 'lightgrey',marginTop:'-13px' }}>
                <h2 style={{ fontSize: 'normal', color: 'grey', fontWeight: 'normal',paddingTop:'20px' }}>Admin Dashboard</h2>
                </div>
                <div style={{ display: 'flex', flex: 'wrap' }}>
                {
                    cards.map((t) => (
                        <div style={{ marginLeft: '30px' , marginTop:'50px'}} >
                            <div class="card text-white bg-dark mb-3" key={t.title} style={{ width: '200px', height: '80px', display: 'flex', flex: 'wrap', marginTop: '-10px', marginLeft: '60px' }}>
                              {/* <img src={t.image} class="card-img-top" alt="..." style={{ height: '100px',width:'500px' ,marginTop:'200px',marginLeft:'-1100px',marginTop:'200px'}} /> */}
                                <div >
                                    <button class="card-title" style={{ backgroundColor: 'lightgrey', color: 'black', fontStyle: 'italic', fontWeight: 'bold', fontSize: 'large', height: '80px',paddingTop:'5px',paddingLeft:'10px',width:'200px' }}>{t.title}</button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
            </div>

            <img src="graphs.png" alt="..." class="img-thumbnail" style={{marginLeft:'270px',marginTop:'70px',height:'350px',width:'1000px'}}/>
        </div>
     );
}

export default Dashboard;