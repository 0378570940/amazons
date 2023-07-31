import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Sider from "./component/Sider/Sider";
import Virtual from "./component/Virtual/Virtuaal";
import Products from "./component/Products/Products";
import Testimonials from "./component/Testimonials/Testimonials";
import { useState } from "react";
import UseLogin from "./pages/UseLogin";

function App() {
  const [logged, changeLogger] = useState(true);

  function changeLoggedStatus(status) {
    changeLogger(!this.logged);
  }
  if (logged)
    return <>
      <Header />
      <Hero />
      <Sider />
      <Virtual />
      <Products />
      <Testimonials />
    </>
  else
    return <UseLogin changeLoggedStatus={changeLoggedStatus} />

}

export default App;
