import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsCategory } from "../../redux/features/productSlice";
import {
  getAddToCart,
  getDecreaseCart,
  getIncreaseCart,
} from "../../redux/features/cartSlice";
import redStarImg from "../../assets/images/redStar.png";
import redCartImg from "../../assets/images/redCartImg.png";
import defaultImg from "../../assets/images/bannerCart.png";
import workshop from "../../assets/images/workshop.jpeg";
import { useNavigate } from "react-router-dom";

// Styled-components

const Container = styled.div`
  padding: 4rem 2rem;
  background: linear-gradient(to right, #f3ec78, #af4261);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
`;

const Img = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.2rem;
`;

const Name = styled.h3`
  font-size: 1.4rem;
  color: #222;
  margin: 0;
`;

const Price = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const StarWrapper = styled.div`
  display: flex;
  gap: 5px;
  padding: 0.5rem 0;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.4rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  background-color: crimson;
  color: white;
  cursor: pointer;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    background-color: crimson;
    color: white;
    font-weight: bold;
    border: none;
    padding: 0.3rem 0.7rem;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const WorkShop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.productsCategory);
  const myCart = useSelector((state) => state.cart.cart || []);

  useEffect(() => {
    dispatch(getAllProductsCategory("", 0));
  }, [dispatch]);

  const workshopCategory = products.find((cat) => cat._id === "workshop");

  const handleAddToCart = (info, index) => {
    const productId = `${info._id}_${index}_${info.price}`;
    dispatch(
      getAddToCart(
        {
          id: productId,
          count: 1,
          service: info.name,
          price: info.price,
        },
        navigate
      )
    );
  };

  const handleIncrease = (id) => {
    dispatch(getIncreaseCart(id, 1));
  };

  const handleDecrease = (id) => {
    dispatch(getDecreaseCart(id, 1));
  };

  return (
    <Container>
      <Title>ADI/PDI Workshop Products</Title>
      <>
        {" "}
        <p
          className="bg-white  px-3 py-1  shadow-md z-20"
          style={{
            maxWidth: "800px",
            margin: "1rem auto",
            textAlign: "center",
            borderRadius: "4px",
            color: "black",
          }}>
          A mandatory booking fee of{" "}
          <span style={{ color: "red" }}>£1.00 - £30 </span>
          applies to all orders per purchase. This fee will be shown clearly
          before you complete your purchase
        </p>
      </>
      <Grid>
        {workshopCategory?.data?.map((product, index) => {
          const productId = `${product._id}_${index}_${product.price}`;
          const inCart = myCart.find((item) => item.id === productId);
          return (
            <Card
              key={product._id}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Img src={workshop || defaultImg} alt={product.name} />
              <Content>
                <Name>{product.name}</Name>
                <Price>£ {product.price}0</Price>
                <p>{product.description}</p>
                <StarWrapper>
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={redStarImg}
                      alt="star"
                      style={{ width: 20, height: 20 }}
                    />
                  ))}
                </StarWrapper>

                {inCart ? (
                  <QuantityWrapper>
                    <button onClick={() => handleDecrease(productId)}>-</button>
                    <span>{inCart.count}</span>
                    <button onClick={() => handleIncrease(productId)}>+</button>
                  </QuantityWrapper>
                ) : (
                  <ActionButtons>
                    <Button onClick={() => handleAddToCart(product, index)}>
                      Book
                    </Button>
                  </ActionButtons>
                )}
              </Content>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default WorkShop;
