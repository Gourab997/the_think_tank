import "./App.css";
import Header from "./components/Header/Header";
import Committee from "./components/Committee/Committee";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Committee></Committee>
      <Footer></Footer>
    </div>
  );
}

export default App;
