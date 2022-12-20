import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleActions } from '../../redux/toggle';

const CartButton = (props) => {

  const dispatch = useDispatch()

  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const toggleHandler = () => {
    dispatch(toggleActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
