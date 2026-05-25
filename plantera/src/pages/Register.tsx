import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="register-page">
      <div className="register-card">

        <h1 className="title">Create Account</h1>

        <p className="subtitle">
          Join Plantarea today
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="input"
        />

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
          Register
        </button>

        <p className="footer-text">
          Already have an account?{" "}
          <Link to="/" className="link">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}