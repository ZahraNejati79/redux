import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/cakeContainer";
import store from "./redux/redux";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIcecreamContainer from "./components/IcecreamContainer";
import CakeWithPayload from "./components/CakewithPayload";
import UserContainer from "./components/UserContainer";
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer />
        <HooksIcecreamContainer />
        <CakeWithPayload /> */}
        <UserContainer />
      </div>
    </Provider>
  );
};

export default App;
