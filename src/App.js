import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from "./Routes";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout routes={Routes}/>
    </Router>
  );
}

export default App;
