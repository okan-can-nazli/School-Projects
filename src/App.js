import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import CreatePost from "./CreatePost";

function App() {
  const path = window.location.pathname;
  if (path === "/register") return <Register />;
  if (path === "/dashboard") return <Dashboard />;
  if (path === "/create-post") return <CreatePost />;
  return <Login />;
}

export default App;