import { resetUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";
export default function ResetUserButton() {
  const dispatch = useDispatch();
  const handleResetUser = () => {
    dispatch(resetUser());
  };
  return <button onClick={handleResetUser}>Reset user</button>;
}
