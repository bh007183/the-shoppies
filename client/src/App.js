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
            <Typography className="header" variant="h6">Welcom to the Shoppies!!!!</Typography>
          </Toolbar>
      
      <Main />
    </Provider>
  );
}

export default App;
