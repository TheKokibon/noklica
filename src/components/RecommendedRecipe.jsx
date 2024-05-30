import React from "react";

import RecommendedRecipesSavouryCard from "./RecommendedRecipesSavouryCard";
import RecommendedRecipesSweetCard from "./RecommendedRecipesSweetCard";

const RecommendedRecipe = () => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-center gap-14  p-4">
      <RecommendedRecipesSavouryCard/>
      <RecommendedRecipesSweetCard/>

    </div>
  );
};

export default RecommendedRecipe;
