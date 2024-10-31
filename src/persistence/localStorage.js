
export const handleGetLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem("products"));
  if (products) {
    return products;
  } else {
    return [];
  }
};

export const setInLocalStorage = (product) => {
  if (product) {
    // trae los productos
    let productsInLocal = handleGetLocalStorage();

    const existingIndex = productsInLocal.findIndex(
      (productLocal) => productLocal.id == product.id
    );


    if (existingIndex !== -1) {

      productsInLocal[existingIndex] = product;
    } else {

      productsInLocal.push(product);
    }

    localStorage.setItem("products", JSON.stringify(productsInLocal));
  }
};
