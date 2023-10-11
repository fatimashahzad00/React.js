import logo from "./logo.svg";
import "./App.css";
import MyApp from "./nesting-components/App";
import Profile from "./displaying_data";
import ShoppingList from "./rendering_list";
import MyButton from "./responding_event";
import Counter from "./updating_screen";
import Counters from "./sharingdata";

function App() {
  return (
    <>
      <MyApp /> {/* nesting components */}
      <Profile /> {/* displaying data using object */}
      <ShoppingList /> {/* rendering list using loop map from array*/}
      <MyButton /> {/* responding event event handler */}
      <Counter />{/* updating usestate screen */}
      <Counters /> {/* Sharing data between components  using Hook usestate*/}
    </>
  );
}

export default App;
