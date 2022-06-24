import { CheckoutItemContainer, ImageContainer, Text, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styles';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Text>{name}</Text>

      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>

      <Text>&pound;{price}</Text>

      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
