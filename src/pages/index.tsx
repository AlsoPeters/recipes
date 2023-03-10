import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-t from-[#2e026d] to-[#15162c] text-white">
        <h1 className="">Welcome to Recipes</h1>
        <Link href="/recipes">View Recipes</Link>
        <Link href="/submit-recipe">Submit a New Recipe</Link>
      </main>
    </>
  );
};

export default HomePage;
