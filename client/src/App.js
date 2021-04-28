import configureStore from "./store/configureStore";
import "./App.css";
import Main from "./pages/Main";
import { Provider } from "react-redux";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Hidden } from '@material-ui/core';
import React,{ useRef } from "react";


function App() {
  const store = configureStore();
  let myVotes = useRef()

  return (
    <Provider store={store}>
          <Toolbar className="toolBar">
            <Typography id="header" variant="h6">Welcome to the Shoppies!</Typography>
            <Hidden  mdUp>
              <button styleonClick={()=> myVotes.current.scrollIntoView({behavior: 'smooth'})}>Your Votes</button>
            </Hidden>
          </Toolbar>
      <Main scroll={myVotes} />
    </Provider>
  );
}

export default App;
