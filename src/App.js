import HomePage from './pages/home/HomePage';
import {BrowserRouter as Router, Redirect, Route, Switch,} from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegistrationPage from './pages/registration/RegistrationPage';
import CartPage from './pages/cart/CartPage';
import ProductDetailsPage from './pages/productDetails/ProductDetailsPage';
import AdminPanelPage from './pages/adminPanel/AdminPanelPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setIsAuth, setVisitorId} from './redux/slices/authSlice';
import axios from 'axios';
import MostPopularPage from "./pages/home/mostPopularProducts/MostPopularPage";
import VegetablePage from "./pages/home/vegetableProducts/VegetablePage";
import ContactUs from "./pages/home/contactUs/ContactUs";
import FruitPage from "./pages/home/fruitProducts/FruitPage";
import OtherProfuctsPage from "./pages/home/otherProducts/OtherProfuctsPage";
import SearchPage from "./pages/home/searchedProducts/SearchPage";

const App = () => {
  const token = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();

  const getUniqueVisitorId = (visitorId) => {
    axios({
      method: 'POST',
      url: '/api/dashboard/visitor',
      data: { visitorId },
    });
  };

  useEffect(() => {
    // Initialize an agent at application startup.
    const fpPromise = FingerprintJS.load();

    (async () => {
      // Get the visitor identifier when you need it.
      const fp = await fpPromise;
      const result = await fp.get();

      // This is the visitor identifier:
      const visitorId = result.visitorId;
      dispatch(setVisitorId(visitorId));
      if (!localStorage.visitorId) {
        localStorage.setItem('visitorId', visitorId);
        getUniqueVisitorId(visitorId);
      }
    })();

    if (token) {
      dispatch(setIsAuth({ token, email, isAuth: true }));
    }
    // eslint-disable-next-line
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/account/login">
          <LoginPage />
        </Route>
        <Route exact path="/account/logout">
          <Redirect to="/" />
        </Route>
        <Route exact path="/account/register">
          <RegistrationPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/products/:productId">
          <ProductDetailsPage />
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path="/contact-us">
          <ContactUs />
        </Route>
        <Route exact path="/most-popular">
          <MostPopularPage />
        </Route>
        <Route exact path="/home/vegetables">
          <VegetablePage />
        </Route>
        <Route exact path="/home/fruit">
          <FruitPage />
        </Route>
        <Route exact path="/home/otherProducts">
          <OtherProfuctsPage />
        </Route>
        <Route exact path="/home/search">
          <SearchPage />
        </Route>
        <Route
          exact path={[
            '/admin/dashboard',
            '/admin/products',
            '/admin/products/addNewProduct',
            '/admin/products/:productId',
            '/admin/users',
            '/admin/users/addNewUser',
            '/admin/users/:userEmail',
          ]}
        >
          <AdminPanelPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
