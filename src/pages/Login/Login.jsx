import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
import eyeIcon from "../../assets/images/eyeicon.svg";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const isFormValid = formData.fullName && formData.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/selfie-verification");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.topRow}>
          <span className={styles.backArrow} onClick={() => navigate(-1)}>
            ←
          </span>
        </div>

        <h2 className={styles.title}>Log In</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Grace Momo"
              value={formData.fullName}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="sfyAAAhenfo"
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
              />
              <img
                src={eyeIcon}
                alt="Toggle Password Visibility"
                className={styles.eyeIcon}
                onClick={togglePassword}
              />
            </div>
          </div>

          <button
            type="submit"
            className={styles.primaryButton}
            disabled={!isFormValid}
          >
            Log In
          </button>
        </form>

        <p className={styles.linkText}>
          <Link to="/forgot-password">Forgot your password?</Link>
        </p>

      </div>
    </div>
  );
}
