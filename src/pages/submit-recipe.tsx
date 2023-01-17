import { type NextPage } from "next";
import Head from "next/head";

import { api } from "../utils/api";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Home: NextPage = () => {
  const createRecipeMutation = api.recipes.createRecipe.useMutation();

  const [directions, setDirections] = useState("");
  const [name, setName] = useState("");
  const [ingredient, setIngredient] = useState("");

  const router = useRouter();

  async function handleSubmitRecipe(e: React.FormEvent) {
    e.preventDefault();
    createRecipeMutation.mutateAsync({
      name,
      ingredient,
      directions,
    });
    router.push("/recipes");
  }

  return (
    <>
      <Head>
        <title>Submit a Recipe</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-t from-[#2e026d] to-[#15162c] text-white">
        <h1>Submit a Recipe</h1>
        <Link href="/">Home</Link>
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmitRecipe}
        >
          <label htmlFor="recipe-name">Recipe Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="text-black"
            required
            value={name}
            id="recipe-name"
          />
          <label htmlFor="recipe-ingredient">Recipe Ingredients</label>
          <input
            id="recipe-ingredient"
            required
            className="text-black"
            onChange={(e) => setIngredient(e.target.value)}
            value={ingredient}
          />
          <label htmlFor="recipe-directions">Recipe Directions</label>
          <textarea
            id="recipe-directions"
            required
            className="text-black"
            onChange={(e) => setDirections(e.target.value)}
            value={directions}
          />

          <button className="rounded-sm bg-violet-400 px-2 text-black">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default Home;