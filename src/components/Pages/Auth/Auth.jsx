//import Layout from "../../../components/Layout/Layout";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";
import { Button } from "@mui/material";
const Auth = () => {
  return (
    <section className={classes.logo}>
      {/* logo */}
      <Link>
        <img
          src="https://cdn.pixabay.com/photo/2021/08/10/16/02/amazon-6536326_960_720.png"
          alt="amazon logo"
        />
      </Link>
      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div className="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="adem@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
        </form>
        {/* agrmeent */}
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button className={classes.login_signInButton}>Sign In</button>
        {/* create account */}
        <button className={classes.registerButton}>create your account</button>
      </div>
    </section>
  );
};

export default Auth;
