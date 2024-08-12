import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import Reducer from './src/screens/redux/Reducers';
import login from "./auth/reducer";
import signUp from "./auth/reducer";
import snackbar from "./common/snackbar/reducer";
import loader from "./common/loader/reducer";
import all_color from "./pages/Admin/color/reducer";
import categories from "./pages/Layout/reducers";
import allfilterproduct from "./pages/New Filter Page/reducer";
import age from "./pages/ShopByAge Page/reducers";
import banner from "./pages/Images pages/reducer";
import products from "./pages/Deals on Baby Care/Reducers";
import wishlist from "./pages/MyWishlist Page/reducers";
import address from "./pages/AddressPage/Reducer";
import viewshoppingcart from './pages/Shoping cart Page/Reducer';
import brand from "./pages/Explorebrand page/Reducer";
import descrption from "./pages/Product View/Reducer";
import profile from "./pages/YourProfile/reducers";
import cart from "./pages/Product View/Reducer";
const persistConfig = {
  key: "root",
  storage,
};
//import banner from "./src/screens/Home/Reducers";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  snackbar,
  loader,
  login,
  signUp,
  all_color,
  categories,
  banner,
  products,
  wishlist,
  address,
  allfilterproduct,
  age,
  brand,
  descrption,
  profile,
  cart,
  viewshoppingcart,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const configureStore = (initialState) =>
  createStoreWithMiddleware(persistedReducer, initialState);
const store = configureStore();
// const persistor = persistStore(store)
// let store = createStore(persistedReducer)
let persistor = persistStore(store);
export default { store, persistor };
