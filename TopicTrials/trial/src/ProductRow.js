import React, { useEffect, useState, useMemo } from "react";
import "./ProductRow.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ProductStateUpdate } from "./actions/ProductStateUpdate";
import DisplayProduct from "./actions/DisplayProduct";

function ProductRow() {
  // const [items, setItem] = useState([]);
  // const [category, setCategory] = useState([""]);
  let history = useHistory();
  const ProductState = useSelector((state) => state.ProductState); //ProductState is reducer
  const dispatch = useDispatch();
  const categorydisplay = useSelector((state) => state.showproduct.data); //showproduct is reducer
  console.log("display product :", categorydisplay);

  // useEffect(() => {
  //   async function fetchData() {
  //     if (category) {
  //       await fetch(`https://fakestoreapi.com/products/category/${category}`)
  //         .then((res) => res.json())
  //         .then((json) => setItem(json));
  //       console.log("These are items from useEffect: ", items);
  //     } else throw new Error("Sorry ! 404 Not Found");
  //   }
  //   fetchData();
  // }, [category]);

  // useMemo(() => {
  //   console.log("These are items from use memo--------- ");
  // }, [category]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="product-row">
      <div className="btn-grp">
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary "
            onClick={() => dispatch(DisplayProduct("electronics"))}
          >
            Electronics
          </Button>
          <Button
            variant="secondary"
            onClick={() => dispatch(DisplayProduct("jewelery"))}
          >
            Jewelery
          </Button>
          <Button
            variant="secondary"
            onClick={() => dispatch(DisplayProduct("men's clothing"))}
          >
            Men
          </Button>
          <Button
            variant="secondary"
            onClick={() => dispatch(DisplayProduct("women's clothing"))}
          >
            Women
          </Button>
          <Button
            variant="secondary"
            onClick={() => dispatch(DisplayProduct(0))}
          >
            Error
          </Button>
        </ButtonGroup>
      </div>

      <hr />
      {/* <p>
        <i>Showing result for {category}</i>
      </p> */}
      <div className="data-display">
        {categorydisplay.map((item) => {
          // console.table(JSON.stringify(item));
          return (
            <div className="display-card">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.image} alt={item.category} />
                <Card.Body>
                  <Card.Title>₹ {item.price}</Card.Title>
                  <Card.Text className="card-text">
                    {truncate(item.description, 100)}
                  </Card.Text>

                  <Button variant="primary">Buy now</Button>
                  <Button
                    onClick={() => dispatch(ProductStateUpdate())}
                    variant="light"
                  >
                    Add to cart
                  </Button>
                  {console.log("Here  the state change :", ProductState)}
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductRow;
