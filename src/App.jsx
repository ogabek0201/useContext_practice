import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useState } from "react";
import { AuthContext } from "./helpers/AuthContext";
import ProfilePage from "./pages/ProfilePage";
import Dash from "./pages/Dashboard/Dash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
    index: true,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [{ path: "profile", element: <ProfilePage /> },{ index: true, element:<Dash/>}],
  },
  
]);

function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState(undefined);
  return (
    <AuthContext.Provider value={{ logged, setLogged, user, setUser }}>
      <>
        <RouterProvider router={router} />
      </>
    </AuthContext.Provider>
  );
}

export default App;
