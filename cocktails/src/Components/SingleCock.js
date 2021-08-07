import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/Context";
import Loading from "./Loading";
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const SingleCock = () => {
  const [detailsOneDrink, setDetailsOneDrink] = useState(null);

  const { loading, setLoading } = useGlobalContext();
  const { id } = useParams();

  const detailsInfoHandle = async () => {
    setLoading(true);
    const specialItem = await fetch(`${url}${id}`);
    const result = await specialItem.json();
    console.log(result);
    if (result.drinks) {
      const {
        strDrink: name,
        strDrinkThumb: img,
        strAlcoholic: info,
        strGlass: glass,
        strCategory: category,
        strInstructions: instructions,
        strIngredient: ingredient,
      } = result.drinks[0];
      const newInformation = {
        name,
        img,
        info,
        glass,
        category,
        instructions,
        ingredient,
      };
      setDetailsOneDrink(newInformation);
      setLoading(false);
    } else {
      setDetailsOneDrink(null);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    detailsInfoHandle();
  }, [id]);
  if (loading) {
    return <Loading/>
  }
  if (!detailsOneDrink) {
    return <h2 className="section-title">there is not item to show</h2>;
  }
  const { name, img, info, glass, category, instructions} =
    detailsOneDrink;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back to home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={img} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default SingleCock;
