import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import styles from "./ForgotPassword.module.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    navigate("/reset-password");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.topRow}>
          <span className={styles.backArrow} onClick={() => navigate(-1)}>
            ←
          </span>
        </div>

        <h2 className={styles.title}>Forgot Password</h2>

        <p className={styles.subtext}>
          Enter your email and 
          <br></br>
          we’ll send you a reset link.
        </p>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Email or Phone number"
            type="email" 
            name="email"
            placeholder="example@yahoo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className={styles.primaryButton}
            disabled={!email}
          >
            Send Reset Link
          </button>
        </form>

        <p className={styles.linkText}>
          Remembered your password? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
}
