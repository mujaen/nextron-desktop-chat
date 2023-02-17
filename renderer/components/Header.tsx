import React, { useState } from "react";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { removeTokenCookie } from "../hooks/useAuthorize";
import { firebaseClientAuth } from "../firebase/firebaseClient";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const user = {
    email: 'ssss'
  }
  const logOut = () => {
    signOut(firebaseClientAuth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Link legacyBehavior href="/login">
        <a>로그인 화면</a>
      </Link>
      <Link legacyBehavior href="/chat/2">
        <a>홈 화면</a>
      </Link>
      <Link legacyBehavior href="/join">
        <a>가입 화면</a>
      </Link>
      {user && <div>Welcome {user.email}</div>}
      <button onClick={logOut}>로그아웃</button>
    </div>
  );
}

export default Header;
