import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" />
      </Routes>
    </>
  )
}

export default App;
