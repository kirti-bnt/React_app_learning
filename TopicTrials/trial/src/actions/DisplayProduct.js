export default function DisplayProduct(category) {
  //   console.log("These are items from useEffect: ", dataArray);
  return (dispatch) => {
    let dataArray = [];
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((json) => dispatch({ type: "CATEGORYCHANGE", data: json }));
    } else throw new Error("Error ! Product not found ");
    // dispatch({ type: "CATEGORYCHANGE", data: dataArray });
  };
}
