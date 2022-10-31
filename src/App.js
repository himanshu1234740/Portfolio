import "./App.css";
import Footer from "./component/footer/Footer";
import Index from "./component/index/Index";
import Navbar from "./component/navbar/Navbar";
import Portfolio from "./component/portfolio/Portfolio";
import Skill from "./component/skill/Skill";

function App() {
  return (
    <>
      <Navbar />
      <Index />
      <Skill/>
      <Portfolio/>
      <Footer/>
    </>
  );
}

export default App;
