export const initialState = {
  basket: [
    {
      id: '12413131',
      title:
        'Vivo V17 (Midnight Ocean, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
      img: 'https://m.media-amazon.com/images/I/41apNNfINPL.__AC_SY200_.jpg',
      rating: 4,
      price: 191.96,
    },
    {
      id: '12413131',
      title:
        'Vivo V17 (Midnight Ocean, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
      img: 'https://m.media-amazon.com/images/I/41apNNfINPL.__AC_SY200_.jpg',
      rating: 4,
      price: 191.96,
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      // Logic for removing item from basket
      let newBasket = [...state.basket]

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

      if(index >= 0) {
        // item exists in basket, remove it
        newBasket.splice(index, 1)
      } else {
        console.warn(`Cant remove product (id: ${action.id}) as its not in the Basket`)
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
