import { createStore } from "vuex";
import post from "./modules/post";
import product from "./modules/product";

export default createStore({
  modules: {
    post,
    product,
  },
});