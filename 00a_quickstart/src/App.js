import logo from "./logo.svg";
import "./App.css";
import MyApp from "./nesting-components/App";
import Profile from "./displaying_data";

function App() {
  return (
    <>
      <MyApp />
      <Profile />
    </>
  );
}

export default App;
