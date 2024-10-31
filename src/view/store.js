
import { setProductActive } from "../../main";
import { handleGetLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";


export const handleGetProductLocalToStore = () => {
  const products = handleGetLocalStorage();
  handleRenderList(products);
};

export const handleRenderList = (products) => {

  const burgers = products.filter((e) => e.category === "Hamburguesas");
  const potatoes = products.filter((e) => e.category === "Papas");
  const soda = products.filter((e) => e.category === "Gaseosas");

  const renderProductGroup = (products, title) => {
    if (products.length > 0) {
      const productsHtml = products.map((product, index) => {
        return `<div class='containerTargetItem' id="product-${product.category}-${index}">
                <div>
                <img src='${product.image}'/>
                </div>
                <div>
                <h2>${product.name}</h2>
                </div>
                <div class='targetProps'>
                <p><b>Precio:</b> $ ${product.price}</p>
                </div>
                </div>`;
      });

      return `
            <section class='sectionStore'>
            <div class='containerTitleSection'><h3>${title}</h3></div>
            <div class='containerProductStore'>
            ${productsHtml.join("")}
            </div>
            </section>
            `;
    } else {
      return "";
    }
  };

  const appContainer = document.getElementById("storeContainer");
  appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(potatoes, "Papas")}
    ${renderProductGroup(soda, "Gaseosas")}
    `;

  const addEvent = (products) => {
    if (products) {
      products.forEach((element, index) => {
        const productContainer = document.getElementById(
          `product-${element.category}-${index}`
        );
        productContainer.addEventListener("click", () => {
          setProductActive(element);
          openModal();
        });
      });
    }
  };

  addEvent(burgers);
  addEvent(potatoes);
  addEvent(soda);
};
