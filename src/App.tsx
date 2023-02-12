import { useSelector } from "react-redux";
import "./App.css";
import { Home } from "./pages";
import { AppState } from "./redux/store";
import { User } from "./models/user.type";

function App() {
  const user = useSelector<AppState, User>((state) => state.user);
  return (
    <>
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <Home />
    </>
  );
}

export default App;
