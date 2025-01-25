"use client"

import {useState} from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const [input, setInput] = useState("")
  return (
    <html lang="en">
      <body>
      <header>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="" />
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </header>
      {children}
      </body>
    </html>
  )
}
