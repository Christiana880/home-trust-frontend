import { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import InputField from "../../../components/InputField";
import styles from "./Signup.module.css";

export default function Signup() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const role = searchParams.get("role") || "tenant";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const isFormValid =
    formData.fullName &&
    formData.email &&
    formData.phone &&
    formData.password &&
    termsAccepted;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify-phone");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.topRow}>
          <span className={styles.backArrow} onClick={() => navigate(-1)}>
            ←
          </span>
        </div>

        <div className={styles.progressRow}>
          <span className={styles.step}>Step 2 of 4</span>
          <span className={styles.completed}>25% Completed</span>
        </div>
        <div className={styles.progressBar}></div>

        <h3 className={styles.title}>Create Your Account</h3>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Full Name"
            name="fullName"
            placeholder="Grace Momo"
            value={formData.fullName}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="example@yahoo.com"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Phone Number"
            name="phone"
            placeholder="+234825741598"
            value={formData.phone}
            onChange={handleChange}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="XXXXXXXXXXX"
            value={formData.password}
            onChange={handleChange}
          />

          <div className={styles.checkboxWrapper}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              I agree to the{" "}
              <span className={styles.linkText}>Terms of Service</span> and{" "}
              <span className={styles.linkText}>Privacy Policy</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={styles.button}
          >
            {role === "tenant"
              ? "Create Tenant Account"
              : "Create Landlord Account"}
          </button>
        </form>

        <p className={styles.link}>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
}
