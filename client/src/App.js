import configureStore from "./store/configureStore";
import "./App.css";
import Main from "./pages/Main";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
