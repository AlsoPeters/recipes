import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const recipeRouter = createTRPCRouter({
  createRecipe: publicProcedure
    .input(
      z.object({
        name: z.string(),
        ingredient: z.string(),
        directions: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const recipe = await ctx.prisma.recipe.create({
        data: {
          ...input,
        },
      });
      return recipe;
    }),
  getRecipes: publicProcedure.query(async ({ ctx }) => {
    const recipes = await ctx.prisma.recipe.findMany();
    return recipes;
  }),
});
