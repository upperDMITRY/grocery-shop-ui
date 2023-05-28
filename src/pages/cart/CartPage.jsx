import HeaderContainer from '../home/header/HeaderContainer';
import CartContainer from './CartContainer';

const CartPage = () => {
  return (
    <div>
      <HeaderContainer title={"All Categories"}/>
      <CartContainer />
    </div>
  );
};

export default CartPage;
