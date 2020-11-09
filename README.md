# Amazon Clone 

* Following Youtube tutorial of Clever Programmer
* Material UI library

```txt
npx create-react-app amazon-clone
Delete unwanted files
Clear the css and * to all elements, give Margin: 0
React-router: BrowserRouter as Router, Route path, Link, Switch
Default Route last
Header: Nav element
  Logo Img: width, margin
  Searchbar
  More links: indicating auth
  Basket
```

* Throw everything in a div container when you want to style it

### Context system
* StateProvider.js for setting up the Context, which acts as Data layer
* In index.js, wrap entire App with StateProvider
* children in StateProvider is now the App component
* const [state, dispatch] = useStateValue();

#### Spread operator for array
* Spread operator for array takes each individual element inside of it
```js
console.log(state.basket);
// [{…}, {…}]
// 0: {id: "12313131", title: "Voroly Heavy Duty Automatically Shut Off Car Air C…p Digital with Puncture Repair Kit and Carry Case", img: "https://images-na.ssl-images-amazon.com/images/I/61gKxUoGGGL._SL1328_.jpg", price: 191.96, rating: 4}
// 1: {id: "12313132", title: "Behringer QX2442USB 24-Channel Mixer", img: "https://images-na.ssl-images-amazon.com/images/I/71BD97dkHnL._SL1000_.jpg", price: 191.96, rating: 4}

//vs

console.log(...state.basket);
// {id: "12313131", title: "Voroly Heavy Duty Automatically Shut Off Car Air C…p Digital with Puncture Repair Kit and Carry Case", img: "https://images-na.ssl-images-amazon.com/images/I/61gKxUoGGGL._SL1328_.jpg", price: 191.96, rating: 4}
// {id: "12313131"img: "https://images-na.ssl-images-amazon.com/images/I/61gKxUoGGGL._SL1328_.jpg"price: 191.96rating: 4title: "Voroly Heavy Duty Automatically Shut Off Car Air Compressor Tyre Inflators Pump Digital with Puncture Repair Kit and Carry Case"__proto__: Object {id: "12313132", title: "Behringer QX2442USB 24-Channel Mixer", img: "https://images-na.ssl-images-amazon.com/images/I/71BD97dkHnL._SL1000_.jpg", price: 191.96, rating: 4}
```