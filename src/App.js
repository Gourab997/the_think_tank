import "./App.css";
import Header from "./components/Header/Header";
import Committee from "./components/Committee/Committee";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div
      className='App'
     
    >
      <Header></Header>
      <Committee></Committee>
    </div>
  );
}

export default App;
