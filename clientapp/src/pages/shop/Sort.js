import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Sort.module.css";
import { sortProducts } from "../../redux/features/productSlice";

export default function Sort() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.sortedProducts);
  const [sortOption, setSortOption] = useState("lowest");

  useEffect(() => {
    dispatch(sortProducts({ sortOption }));
  }, [sortOption, dispatch]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <section className={styles.sortListProductSection} style={{ backgroundColor: 'black', color: 'white' }}>
      <div className={styles.sortproductDataLength}>
        <p>{`${products.length} Total Products`}</p>
      </div>
      <div className={styles.sortSelectionForm}>
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id={styles.sort}
            className={styles.sortSelectionStyle}
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="lowest">Sort by price: Low to High</option>
            <option value="highest">Sort by price: High to Low</option>
            <option value="a-z">Sort by ascending: (A - Z)</option>
            <option value="z-a">Sort by descending order: (Z - A)</option>
          </select>
        </form>
      </div>
    </section>
  );
}
