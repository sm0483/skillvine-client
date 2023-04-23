"use client";

import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const goToLink = (link) => router.push(link);
  const links = [
    {
      text: "Student dashboard",
      link: "/student/dashboard",
    },
    {
      text: "Teacher batches",
      link: "/teacher/batches",
    },
    {
      text: "Login",
      link: "/login",
    },
  ];
  return (
    <>
      <Head>
        <title>SkillVine</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="main">
        Check if login, else redirect to /login
        <br></br>
        {links.map((link) => {
          return (
            <button
              className="btn"
              onClick={() => {
                goToLink(link.link);
              }}
            >
              {link.text}
            </button>
          );
        })}
      </main>
    </>
  );
}
