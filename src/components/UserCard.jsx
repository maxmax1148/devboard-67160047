function UserCard({ name, email }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}

export default UserCard; 