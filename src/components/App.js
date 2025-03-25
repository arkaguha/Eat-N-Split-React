import { useState } from "react";
import "./index.css";
import FriendsList from "./FriendsList";
import FormAddfriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import Button from "./Button";

const initialFriendsObj = [
  {
    id: 1,
    name: "Clark",
    image: "https://picsum.photos/50",
    balance: -7,
  },
  {
    id: 2,
    name: "Sarah",
    image: "https://picsum.photos/50",
    balance: 20,
  },
  {
    id: 3,
    name: "Anthony",
    image: "https://picsum.photos/50",
    balance: 0,
  },
];

export default function App() {
  const [initialFriends, setInitialFriends] = useState(initialFriendsObj);
  // if (!initialFriends) setInitialFriends(initialFriendsObj);

  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setselectedFriend] = useState(false);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
    setselectedFriend(null);
  }

  function handleShowSplitForm() {
    // setShowSplitForm(!showSplitForm);
    // setShowSplitForm((show) => !show);
  }

  function handleSelectFriend(friend) {
    setselectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setInitialFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setselectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          handleShowSplitForm={handleShowSplitForm}
          friends={initialFriends}
          onSelection={handleSelectFriend}
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          selectedFriend={selectedFriend}
        />

        {showAddFriend && (
          <FormAddfriend
            initialFriends={initialFriends}
            setInitialFriends={setInitialFriends}
          />
        )}

        <Button onclick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
      {/* <Button buttonName={"Add Friend"} onclick={handleShowSplitForm} /> */}
    </div>
  );
}
