import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Signup() {
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  return (
    <button className={styles.google_btn} onClick={googleAuth}>
      <img src="./images/google.png" alt="google icon" />
      <span>Sing up with Google</span>
    </button>
  );
}

export default Signup;
