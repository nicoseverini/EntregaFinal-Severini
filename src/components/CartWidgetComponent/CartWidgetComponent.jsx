import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context';
const CartWidgetComponent = () => {

  const { qtyItems } = useContext(CartContext)

  const iconStyle = {
    fontSize: "20px",
    paddingRight:"5px"
  }
  return(
    <div> 
      <FontAwesomeIcon style={iconStyle} icon={faCartShopping} />
      <span>{qtyItems}</span>
    </div>
  );
}

export default CartWidgetComponent;