import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResetPassword.module.css";
import InputField from "../../components/InputField";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValid =
    formData.password.trim() !== "" &&
    formData.confirmPassword.trim() !== "" &&
    formData.password === formData.confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    console.log("Password reset successful");
    navigate("/login");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.topRow}>
          <span
            className={styles.backArrow}
            onClick={() => navigate(-1)}
          >
            ←
          </span>
        </div>

        <h2 className={styles.title}>Reset Password</h2>

        <p className={styles.subtext}>
          Enter your new password below.
        </p>

        <form onSubmit={handleSubmit}>
          <InputField
            label="New Password"
            type="password"
            name="password"
            placeholder="Enter new password"
            value={formData.password}
            onChange={handleChange}
          />

          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button
            type="submit"
            className={styles.primaryButton}
            disabled={!isValid}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
