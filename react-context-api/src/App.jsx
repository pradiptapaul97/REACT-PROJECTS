import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="flex min-h-screen">
        <Login></Login>
        <Profile></Profile>
      </div>
    </UserContextProvider>
  );
}

export default App;
