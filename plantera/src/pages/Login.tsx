import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">

        <h1 className="title">Plantera</h1>

        <p className="subtitle">
          Welcome back, please login
        </p>

        <input
          type="email"
          placeholder="Email"
          className="input"
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
        />

        <button className="btn">
          Login
        </button>

        <p className="footer-text">
          Don’t have an account?{" "}
          <Link to="/register" className="link">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;