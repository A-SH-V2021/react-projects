import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context/Context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">there is no items to show</h2>;
  }
  return (
    <div>
      <h2>cocktailList</h2>
    </div>
  );
};

export default CocktailList;
