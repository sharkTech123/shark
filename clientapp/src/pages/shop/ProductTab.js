import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Products from "./Products";
import styles from './ProductTab.module.css';

export default function ProductTab() {
  const filter_productsCategory = useSelector((state) => state.product.productsCategory);
  const filter_products_category = useSelector((state) => {
    return state.product.productsCategory.map((its) => its["_id"]);
  });

  const limited_categories = filter_products_category.slice(0, 4);
  const defaultActiveCategory = limited_categories.length > 0 ? limited_categories[0] : ""; // Default to the first category if available
  const [activeCategory, setActiveCategory] = useState(defaultActiveCategory);

  useEffect(() => {
    // Ensure that the active category is set to default when limited_categories change
    setActiveCategory(defaultActiveCategory);
  }, [defaultActiveCategory]);

  const handleSelect = (category) => {
    setActiveCategory(category);
  };

  return (
    <Tabs activeKey={activeCategory} onSelect={handleSelect} className="mb-3" justify defaultActiveKey={defaultActiveCategory} style={{backgroundColor:'black'}}>
      {limited_categories.map((category) => (
        <Tab key={category} eventKey={category} title={category}  style={{backgroundColor:'black'}}>
          <div className={styles.productGrid}>
            {filter_productsCategory
              .filter((itm) => itm._id === category)
              .map((itm) => itm.data)
              .flat()
              .map((product, id) => (
                <div className={styles.gridViewWrapper} key={id}>
                  <Products curElem={product} />
                </div>
              ))}
          </div>
          <div className={styles.gridViewSection}>
            <div className={styles.veiwAllBtn}>
              <NavLink to="/shop">
                <button>View All</button>
              </NavLink>
            </div>
          </div>
        </Tab>
      ))}
    </Tabs>
  );
}
