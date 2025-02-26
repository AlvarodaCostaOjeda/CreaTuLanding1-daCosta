import { useEffect, useState } from "react";
import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import "./itemListContainer.css";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let isAdmin = true;
      if (isAdmin) {
        console.log(categoria);
        resolve(
          categoria
            ? products.filter((elemento) => elemento.category === categoria)
            : products
          //Si name esta vacio trae todos los productos. Sino quiere decir que esta filtrando por categoria.
        );
      } else {
        reject({ message: "algo salio mal", status: 400 });
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [categoria]);

  return (
    <section className="productCard">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};
