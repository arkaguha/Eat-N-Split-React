import Friend from "./Friend";

function FriendsList({ selectedFriend, friends, onSelection }) {
  // const friends = initialFriendsObj;

  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            // handleShowSplitForm={handleShowSplitForm}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </>
  );
}
export default FriendsList;
