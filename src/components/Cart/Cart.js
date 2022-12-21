import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const arr = [{ a: 1, b: 0 }, { a: 2, b: 0 }, { a: 3, b: 0 }]
const arr2 = arr.slice()
const arr3 = [...arr]
console.log(arr2, arr3)

const Cart = (props) => {

  const cartItems = useSelector(state => state.cart.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={{
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              id: item.id
            }}
          />
        ))}

      </ul>
    </Card>
  );
};

export default Cart;
