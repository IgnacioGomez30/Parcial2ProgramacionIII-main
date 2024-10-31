import { handleGetLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../view/store";

export const handleSearchProductByName = () => {
    const inputSearch = document.getElementById('inputSearch');
    const products = handleGetLocalStorage();
    const result = products.filter((el) => el.name.toLowerCase().includes(inputSearch.value))
    handleRenderList(result);
}