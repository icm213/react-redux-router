import Counter from "./components/Counter";
import Users from "./components/Users";
import Nav from "./components/Nav";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/nav.scss";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route path="/" element={<h1>Welcome!!</h1>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<h2>404: page not found</h2>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
