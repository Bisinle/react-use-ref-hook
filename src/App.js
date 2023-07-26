import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  NavLink,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import FocusInput from "./Component/FocusInput";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import InputChange from "./Component/InputChange";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="inputChange" element={<InputChange />} />
      <Route path="focusInput" element={<FocusInput />} />
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
