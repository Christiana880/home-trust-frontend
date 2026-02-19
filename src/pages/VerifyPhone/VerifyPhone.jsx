import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VerifyPhone.module.css";

const OTP_LENGTH = 6;

export default function VerifyPhone() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [isComplete, setIsComplete] = useState(false);
  const inputsRef = useRef([]);

  useEffect(() => {
    setIsComplete(otp.every((digit) => digit !== ""));
  }, [otp]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    if (!isComplete) return;
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

        <div className={styles.progressWrapper}>
          <div className={styles.progressTop}>
            <span>Step 3 of 4</span>
            <span>75% Completed</span>
          </div>

          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
        </div>

        <h2 className={styles.title}>Verify Your Phone Number</h2>

        <p className={styles.subtitle}>
          Enter the 6-digit code we sent to +234 812••••98
        </p>

        <div className={styles.otpWrapper}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`${styles.otpInput} ${
                digit ? styles.activeInput : ""
              }`}
            />
          ))}
        </div>

        <p className={styles.resendText}>
          Didn’t receive the code?
        </p>

        <button className={styles.resendBtn}>
          Resend in 00:30s
        </button>

        <button
          disabled={!isComplete}
          onClick={handleVerify}
          className={`${styles.verifyBtn} ${
            isComplete ? styles.enabled : ""
          }`}
        >
          Verify Phone Number
        </button>
      </div>
    </div>
  );
}
