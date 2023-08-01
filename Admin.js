
import{Link} from "react-router-dom";
import Login from "./Login";
function Admin() {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <Link to="/Login">
                <button style={{ border: 'none', fontWeight: 'bold', backgroundColor: 'inherit', color: 'white',fontStyle:'italic' }} class="navbar-brand" href="#">Care and Cure Hospital</button>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                </Link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <Link to="/Dashboard">
                        <li class="nav-item active">
                            <button style={{ border: 'none', backgroundColor: 'inherit', color: 'white',marginTop:'7px'  }} href="#">Dashboard</button>
                        </li>
                        </Link>
                        <Link to="/Patient">
                        <li class="nav-item">
                            <button style={{ border: 'none', backgroundColor: 'inherit', color: 'white',textDecoration:'none',marginTop:'7px' }}>Patient</button>
                        </li>
                        </Link>
                        <Link to="/Accountant">
                        <li class="nav-item">
                            <button style={{ border: 'none', backgroundColor: 'inherit', color: 'white',marginTop:'7px' }} href="#">Accountant</button>
                        </li>
                        </Link>
                    </ul>
                </div>
            </nav>

           <div>
                <p style={{ fontSize: 'normal', color: 'grey', fontWeight: 'bold', marginLeft: '1200px', marginTop: '-44px' }}>Doctor</p>
                <h5 style={{ color: 'green', marginLeft: '1215px', marginTop: '-15px' }}>21</h5>
                <p style={{ fontSize: 'normal', color: 'grey', fontWeight: 'bold', marginLeft: '1300px', marginTop: '-56px' }}>    Patient</p>
                <h5 style={{ color: 'red', marginLeft: '1316px', marginTop: '-15px' }}>67</h5>
                <p style={{ fontSize: 'normal', color: 'grey', fontWeight: 'bold', marginLeft: '1400px', marginTop: '-58px' }}>Nurse</p>
                <h5 style={{ color: 'green', marginLeft: '1410px', marginTop: '-15px' }}>45</h5>

            </div>

            


        </div>

    );
}

export default Admin;