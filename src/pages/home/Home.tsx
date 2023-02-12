import { createUser } from "@/redux/slices/user.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddUserForm from "./components/AddUserForm";
import ResetUserButton from "./components/ResetUserButton";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createUser({ name: "Alex", id: 1 }));
  }, []);

  return (
    <> 
      <div>Home</div>
      <ResetUserButton />
      <AddUserForm/>
    </>
  );
}
