import configureStore from "./store/configureStore";
import "./App.css";
import Main from "./pages/Main";
import { Provider } from "react-redux";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const store = configureStore();

function App() {
  return (
    
    <Provider store={store}>
      
          <Toolbar className="toolBar">
            <Typography id="header" variant="h6">Welcome to the Shoppies!</Typography>
          </Toolbar>
      
      <Main />
    </Provider>
  );
}

export default App;
