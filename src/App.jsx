import Product from "./component/Product";
import ShopKart from "./component/ShopKart";
import Contact from "./component/contact";
import "./component/style.css";

function App() {
  return (
    <div className="App">
      <ShopKart />
      <Product />
      <Contact />
      <div className="last_footer">Copyright 2022 All Right Reserved By SG</div>
    </div>
  );
}

export default App;
