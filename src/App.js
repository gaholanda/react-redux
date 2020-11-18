import React from "react";
import { Provider } from "react-redux";

import { Sidebar, Video } from "./components";
import store from "./redux/store";

function App() {
  return (
    <div className="app">
      <header>
        <h1>React Redux</h1>
      </header>
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
