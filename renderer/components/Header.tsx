import React, { useState } from 'react'

import Link from 'next/link'

import Avatar from './Avatar'

function Header() {
  return (
    <header className="h-screen bg-stone-200">
      <Link legacyBehavior href="/profile">
        <a className="block p-3" title="프로필">
          <Avatar src="/images/avatar.jpg" alt="도라에몽" />
        </a>
      </Link>
      <Link legacyBehavior href="/">
        <a className="block p-3" title="홈화면">
          <svg
            className="m-auto"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="transition hover:fill-black active:fill-black"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 10.787c0 4.854-4.253 8.788-9.5 8.788a10.22 10.22 0 0 1-2.684-.355c-1.881 1.241-4.233 1.617-5.485 1.73-.286.027-.434-.347-.24-.559.595-.65 1.431-1.803 1.715-3.368C4.073 15.43 3 13.225 3 10.787 3 5.934 7.253 2 12.5 2S22 5.934 22 10.787z"
              fill="#555555"
            />
          </svg>
        </a>
      </Link>
      <Link legacyBehavior href="/">
        <a className="block p-3" title="더보기">
          <svg
            className="m-auto"
            width="24px"
            height="24px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="transition hover:fill-black active:fill-black"
              fill="#555555"
              d="M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
            />
          </svg>
        </a>
      </Link>
    </header>
  )
}

export default Header
