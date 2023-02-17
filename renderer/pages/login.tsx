import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setTokenCookie } from "../hooks/useAuthorize";
import { firebaseClientAuth } from "../firebase/firebaseClient";
import { useRouter } from "next/router";
import Head from "next/head";

import Layout from "../components/Layout";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("mujaen@nate.com");
  const [password, setPassword] = useState<string>("tlswjd12098!");

  const logIn = async () => {
    const credential = await signInWithEmailAndPassword(
      firebaseClientAuth,
      email,
      password
    );

    const idToken = await credential.user.getIdToken();

    //await setTokenCookie(idToken);

    await router.push("/");
  };

  return (
    <React.Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <div className="flex">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={logIn}>로그인</button>
        </div>
      </Layout>
    </React.Fragment>
  );
}

export default Login;
