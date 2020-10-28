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