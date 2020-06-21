import React, { useState,Fragment } from "react";
import AddCategory from "./components/Category/AddCategory";
import EditCategory from "./components/Category/EditCategory";
import "./App.css";

function App() {
  let [edit, setEdit] = useState(true);
  if (edit) {
    return (
      <Fragment>
             <h1>Helo world</h1>
        <AddCategory />
        <button onClick={e=>setEdit(!edit)}>toggle</button>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <h1>Helo world 1</h1>
        <EditCategory /> 
        <button onClick={e=>setEdit(!edit)}>toggle</button>
      </Fragment>
    );
  }
}

export default App;
