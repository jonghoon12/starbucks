import Badge from "./components/Badge";
import BrazilCoffee from "./components/BrazilCoffee";
import Footer from "./components/Footer";
import MobileHamburgerMenu from "./components/MobileHamburgerMenu";
import MobileHamburgerMenuHide from "./components/MobileHamburgerMenuHide";
import Navbar from "./components/Navbar";
import NewMenu from "./components/NewMenu";
import Notice from "./components/Notice";
import PapuaCoffee from "./components/PapuaCoffee";
import PickMenu from "./components/PickMenu";
import Reserve from "./components/Reserve";
import Rewards from "./components/Rewards";
import Slide from "./components/Slide";
import Store from "./components/Store";
import TabMenu from "./components/TabMenu";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <body>
        <Navbar />
        <TabMenu />
        <MobileHamburgerMenuHide />
        <MobileHamburgerMenu />
        <Badge />
        <NewMenu />
        <Notice />
        <Slide />
        <Rewards />
        <PapuaCoffee />
        <BrazilCoffee />
        <PickMenu />
        <Reserve />
        <Store />
      </body>
      <Footer />
    </div>
  );
}
