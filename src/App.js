import React from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Widegets from "./component/Widegets";
function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* feed */}
      <Feed />
      {/**widegets */}
      <Widegets />
    </div>
  );
}

export default App;
