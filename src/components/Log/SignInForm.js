import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}api/user/login`,
        {
          email,
          password,
        }
      );
      console.log(response.data);
      if (response.data.errors) {
        emailError.innerHTML = response.data.errors.email;
        passwordError.innerHTML = response.data.errors.password;
      } else {
        window.location = "/";
      }
    } catch (err) {
      console.log(err);
    }
    // axios({
    //   method: "post",
    //   url: `${process.env.REACT_APP_API_URL}api/user/login`,
    //   withCredentials: true,
    //   data: {
    //     email,
    //     password,
    //   },
    // })
    //     .then((res) => {
    //       if (res.data.errors) {
    //         emailError.innerHTML = res.data.errors.email;
    //         passwordError.innerHTML = res.data.errors.password;
    //       } else {
    //         window.location = "/";
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  };

  return (
    <form action="" onSubmit={handleLogin} id="sing-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <br />
      <input type="submit" value="se connecter" />
    </form>
  );
};

export default SignInForm;
