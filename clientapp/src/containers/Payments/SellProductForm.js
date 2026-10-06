import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/features/productSlice";
import {
  Box,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { getAddToCart, getAddToCart2 } from "../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";
import styles from "./css/SellSubscription.module.css";

export default function SellProductForm() {
  const navigate = useNavigate();

  const [selectedProductId, setSelectedProductId] = useState("");

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products); // Adjust according to your reducer

  useEffect(() => {
    dispatch(getAllProducts("", 1, 100)); // fetch all products
  }, [dispatch]);

  const handleAddToCart = () => {
    const selectedProduct = products.find((p) => p._id === selectedProductId);
    if (!selectedProduct) return;

    dispatch(
      getAddToCart2({
        id: selectedProduct._id,
        count: 1,
        service: selectedProduct.name,
        price: selectedProduct.price,
      })
    );
  };

  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>
        Select Product
      </Typography>

      <FormControl fullWidth>
        <InputLabel>Select a product</InputLabel>
        <section className={styles.sellProductFlex}>
          <Select
            className={styles.sellProductSelect}
            value={selectedProductId}
            label="Select a product"
            onChange={(e) => setSelectedProductId(e.target.value)}>
            {products?.map((product) => (
              <MenuItem key={product._id} value={product._id}>
                {product.name} - £{product.price}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            onClick={handleAddToCart}
            disabled={!selectedProductId}>
            Add
          </Button>
        </section>
      </FormControl>

      {/* Optional: Show cart items */}
    </Box>
  );
}
