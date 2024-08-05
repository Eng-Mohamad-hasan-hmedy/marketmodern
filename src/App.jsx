import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import About from "./components/About/About";

import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import LookBook from "./components/LookBook/LookBook";
import Product from "./components/Product/Product";
import Shop from "./components/Shop/Shop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext";

function AnimatedRoutes() {
  const location = useLocation();
  const getClassNames = (path) => {
    switch (path) {
      case "/product/:id":
        return "fade";
      case "/lookbook":
        return "fade";
      case "/about":
        return "fade";
      case "/":
      default:
        return "fade";
    }
  };
  return (
    <>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames={getClassNames(location.pathname)}
          timeout={300}
        >
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/lookbook" element={<LookBook />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {/* To Prevent any right Click (Security Practice) */}
      {document.addEventListener("contextmenu", (event) =>
        event.preventDefault()
      )}
      {/* To Prevent any right Click (Security Practice) */}
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <AnimatedRoutes />
      </Router>
    </CartProvider>
  );
}

export default App;
