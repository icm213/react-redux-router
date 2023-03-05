import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../features/counterSlice";
import { RootState } from "../store";

export default function Users() {
  const users = useSelector((state: RootState) => state.users);
  const [user, setUser] = React.useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUser(e.target.value);
  };

  const handleAddUser = () => {
    if (user) {
      dispatch(addUser(user));
    }
    setUser("");
  };

  return (
    <div>
      <input type="text" value={user} onChange={handleInputChange} />
      <button onClick={handleAddUser}>add user</button>
      <ul>
        {users.map((usr, idx) => (
          <li key={idx}>{usr}</li>
        ))}
      </ul>
    </div>
  );
}
