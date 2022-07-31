import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/cakeContainer";
import store from "./redux/redux";
import HooksCakeContainer from "./components/HooksCakeContainer";
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
};

export default App;
