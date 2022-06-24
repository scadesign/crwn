import { CartItemContainer, ItemDetails, Details }from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Details>{name}</Details>
        <Details>
          {quantity} x ${price}
        </Details>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
