import React, { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseClientAuth } from "../firebase/firebaseClient";
import { useRouter } from "next/router";

import Layout from "../components/Layout";

function Join() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUp = () =>
    createUserWithEmailAndPassword(firebaseClientAuth, email, password)
      .then((userCredential) => {
        // Signed in
        alert("Account has been created." + "Email:" + userCredential.user.email)
        const user = userCredential.user;

        if(!user.emailVerified) {
          alert("이메일을 정확히 입력해 주세요!")
        }
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  return (
    <Layout>
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
      <button onClick={signUp}>회원가입</button>
    </Layout>
  );
}

export default Join;
