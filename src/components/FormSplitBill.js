import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ friend, selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  // const [paidByFriend, setPaidByFriend] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";

  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByFriend) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="">Bill value</label>
      <input
        type="text"
        name=""
        id=""
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor="">My expense</label>
      <input
        type="text"
        name=""
        id=""
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label htmlFor="">{selectedFriend.name}'s expense</label>

      <input type="text" name="" id="" disabled value={paidByFriend} />
      <label htmlFor="">Who is paying?</label>
      <select
        name=""
        id=""
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="You">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>
      <Button buttonName={"Split Bill"} />
    </form>
  );
}

export default FormSplitBill;
