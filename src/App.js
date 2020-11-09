import React from "react";
import './App.css';
import Sidebar from './Sidebar';
import Feed from "./components/Feed"
import Widgets from "./components/Widgets"

// import SidebarOption from './SidebarOption';

function App() {
  return (
    // BEM
    <div className="app">
      {/* <h1>Hello Kedeh let's build some twitter clone</h1> */}
      {/* {Sidebar} */}
      <Sidebar />


      {/* Feed */}

      <Feed />



      {/* Widget */}

      <Widgets />


    </div>
  );
}

export default App;
