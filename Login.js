// import { GoogleLogin } from 'react-google-login';
import "./Login.css";
import Menu from "./Menu";

// const clientId='714123774000-ah4i1bnol6u0lhgl4q4ntjo2s57bp34e.apps.googleusercontent.com';
function Login(){
//  const onSuccess = (res) => {
//   console.log('success:', res);
// };
// const onFailure = (err) => {
//   console.log('failed:', err);
// };

    return(
      <div>
        <Menu/>
<div className="login">
  
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
 
  <div class="form-check mb-3">
    <label class="form-check-label">
      <input class="form-check-input"  type="checkbox" name="remember"/> Remember me
    </label>
  </div>

  <button type="submit" class="btn btn-primary" className="submit" style={{borderRadius:"6px",marginTop:"-10px"}}>Submit</button>
  
</form>
{/* <GoogleLogin clientId={clientId} buttonText="Sign in with Google" onSuccess={onSuccess} onFailure={onFailure}cookiePolicy={'single_host_origin'}isSignedIn={true}/> */}

</div>






</div>
    );
}
export default Login;