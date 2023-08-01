import Menu from "./Menu";
import { Link } from "react-router-dom";
function Patient() {
    return (
        <div>
        <Menu/>
        <h1 style={{color:'grey',marginTop:'-650px',position:'absolute',marginLeft:'15px'}}>Patients Record</h1>
        <div style={{marginTop:'-560px',position:'absolute',marginLeft:'20px'}}>
        <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style={{color:'grey',fontWeight:'bold'}}>Patient Id</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Patient-Id"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4" style={{color:'grey',fontWeight:'bold'}}>Patient Name</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Patient Name"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4" style={{color:'grey',fontWeight:'bold'}}>Appointment with</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Doctor Name"/>
    </div>
  </div>
  <div class="form-group" style={{width:'760px'}}>
    <label for="inputAddress" style={{color:'grey',fontWeight:'bold'}}>Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity" style={{color:'grey',fontWeight:'bold'}}>City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState" style={{color:'grey',fontWeight:'bold'}}>State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Punjab</option>
        <option>Sindh</option>
        <option>Islamabad</option>
        <option>AJK</option>
        <option>Balochistan</option>
        <option>Kpk</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip" style={{color:'grey',fontWeight:'bold'}}>Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    
  </div>
  <button type="submit" class="btn btn-primary" style={{marginTop:'10px',backgroundColor:'Grey',color:'white',border:'none'}}>Register</button>
</form>
        </div>
        <Link to="/Appointment">
                <button type="submit" class="btn btn-primary" className="submit" style={{marginTop:'-116px',marginLeft:"110px",backgroundColor:'Grey',color:'white',border:'none',position:"absolute",borderRadius:"6px",width:"85px",height:"36px",fontSize:"17px"}}>View</button>
                </Link>
        </div>
      );
}

export default Patient;