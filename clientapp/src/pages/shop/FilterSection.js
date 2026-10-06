import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts, sortProducts  } from "../../redux/features/productSlice"; 
import styles from "./Filter.module.css";
import { FaSearch } from "react-icons/fa";

export default function FilterSection() {
  const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        dispatch(searchProducts(value));
    };
    return (
        <div className={styles.filterWrapper} style={{ backgroundColor: 'black', color: 'white' }}>
            <div className={styles.searchBox}>
                <form>
                    <input
                        type="text"
                        className={styles.searchInput}
                        name="text"
                        placeholder="Type to search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                
                </form>
            </div>
           
        </div>
    );
}
