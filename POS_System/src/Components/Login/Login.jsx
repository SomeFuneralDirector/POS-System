import { useNavigate } from "react-router-dom";
import "../../Style/Login.css";
import logo from "../../Assets/logo.jpg";


function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/home"); 
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>

        
          <img src={logo} width="200" className="logo" />
        <div className="head">
          <h1>Login</h1>
        </div>

        

        <div className="inputs">
          <div className="input">
            <input type="text" placeholder="Username" required />
          </div>

          <div className="input">
            <input type="password" placeholder="Password" required />
          </div>

        </div>

        <div className="Sub-Cont">
          <button type="submit" className="Submit">Login</button>
        </div>

      </form>

    </div>
  );
}

export default Login;
