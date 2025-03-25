import Button from "./Button";
import { useState } from "react";

function FormAddfriend({ setInitialFriends, initialFriends }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  // const friends = initialFriendsObj;

  function handleAddNewFriend(e) {
    e.preventDefault();
    if (!name || !img) return;
    const newFriend = {
      name,
      image: img,
      balance: 0,
      id: crypto.randomUUID(),
    };
    setInitialFriends((friend) => [...friend, newFriend]);
    setImg("");
    setName("");
    console.log(initialFriends);
  }

  return (
    <>
      <form action="">
        <label htmlFor="">💀Friend Name</label>
        <input
          type="text"
          value={name}
          name=""
          id=""
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">💀Image Url</label>
        <input
          type="text"
          value={img}
          name=""
          id=""
          onChange={(e) => setImg(e.target.value)}
        />
        <Button buttonName={"Submit"} onclick={handleAddNewFriend} />
        {/* <p>{initialFriends}</p>
          <p>{}</p> */}
      </form>
    </>
  );
}

export default FormAddfriend;
