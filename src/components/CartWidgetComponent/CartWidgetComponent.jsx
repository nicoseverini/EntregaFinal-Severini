import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
const CartWidgetComponent = () => {
  const iconStyle = {
    fontSize: "20px",
    paddingRight:"5px"
  }
  return(
    <div> 
      <FontAwesomeIcon style={iconStyle} icon={faCartShopping} />
      <span>0</span>
    </div>
  );
}

export default CartWidgetComponent;