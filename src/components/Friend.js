import Button from "./Button";

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <div style={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p style={{ color: "red" }}>
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}

        {friend.balance > 0 && (
          <p style={{ color: "green" }}>
            {friend.name} ows you ${Math.abs(friend.balance)}.
          </p>
        )}

        {friend.balance === 0 && (
          <p style={{ color: "gray" }}>You and {friend.name} are even.</p>
        )}
      </div>
      <Button onclick={() => onSelection(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}

export default Friend;
