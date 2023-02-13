import { RickyAndMortyUserAdapter } from "@/adapter";
import { RickAndMortyUser } from "@/models";
import { createUser } from "@/redux/slices/user.slice";
import { fetchRickAndMorty, rickandMortyURL } from "@/services";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddUserForm from "./components/AddUserForm";
import ResetUserButton from "./components/ResetUserButton";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const newApiUser = fetchRickAndMorty(`${rickandMortyURL.characters}/25`);
    newApiUser.then(data => {
        const adapter = new RickyAndMortyUserAdapter({apiUser: data});
        dispatch(createUser(adapter.User));
    }).catch();
  }, []);

  return (
    <> 
      <div>Home</div>
      <ResetUserButton />
      <AddUserForm/>
    </>
  );
}
