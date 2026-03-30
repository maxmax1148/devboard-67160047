function UserCard({ name, email }) {
  return (
    <div style={{ borderBottom: "1px solid #ddd", padding: "5px" }}>
      <b>{name}</b>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;