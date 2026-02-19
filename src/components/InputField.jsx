import { useState } from "react";
import styles from "./InputField.module.css";

export default function InputField({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className={styles.group}>
      <label className={styles.label}>{label}</label>

      <div className={styles.inputWrapper}>
        <input
          type={isPassword && showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.input}
        />

        {isPassword && (
          <span
            className={styles.toggle}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        )}
      </div>
    </div>
  );
}
