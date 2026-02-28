import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";

function App() {
  const path = window.location.pathname;
  if (path === "/register") return <Register />;
  if (path === "/dashboard") return <Dashboard />;
  if (path === "/create-post") return <CreatePost />;
  if (path === "/post-detail") return <PostDetail />;

  return <Login />;
}

export default App;