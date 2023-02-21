import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import { AppBar, HomeNav } from "./components";
import { Food } from "./pages/food/Food";

function App() {
  return (
    <div>
      <HomeNav />
      <div className="body pt-3">
        <Food></Food>
      </div>
      <AppBar />
    </div>
  );
}

export default App;
