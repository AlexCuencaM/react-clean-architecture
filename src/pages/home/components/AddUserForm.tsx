import { User, userEmptyState } from "@/models";
import { createUser } from "@/redux/slices/user.slice";
import React, { InputHTMLAttributes, useState } from "react";
import { useDispatch } from "react-redux";

export default function AddUserForm() {
  const dispatch = useDispatch();
  const [User, setUser] = useState<User>(userEmptyState);
  const handlecreateUser = (e: any) => {
    e.preventDefault();
    dispatch(createUser(User));
    setUser({ ...userEmptyState });
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target as HTMLInputElement;
    setUser({
      ...User,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handlecreateUser}>
      <input type="number" value={User.id} name="id" onChange={handleChange} />
      <input
        type="text"
        value={User.name}
        name="name"
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}
