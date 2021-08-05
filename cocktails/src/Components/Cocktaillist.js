import React from "react";
import Cocktails from "./Cocktail";
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
    <section className="section">
      <h2 className="section-title">cocktails list</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
         return <Cocktails {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
