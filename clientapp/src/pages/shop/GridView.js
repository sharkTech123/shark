import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Shop.module.css';
import Products from './Products';

import LoadingWeb from '../../components/loader/LoadingWeb';



export default function GridView({ products }) {
  const productsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (data) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(data.selected);
      setLoading(false);
    }, 500); 
  };

  const startIndex = currentPage * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className={styles.gridViewWrapper} style={{ backgroundColor: 'black', color: 'white' }}>

<div className={styles.pagination}>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={`${styles.active}`}
          disabledClassName={styles.disabled}
        />
      </div>
      <div className={styles.gridViewSection}>
        {loading ? (
          <LoadingWeb />
        ) : (
          currentProducts.map((curElem, id) => (
            <Products key={id} curElem={curElem} />
          ))
        )}
      </div>
      
    </div>
  );
}
