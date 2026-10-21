const CardUser = ({ user }) => {
  //   const { user } = props;
  const { first_name, last_name, avatar, email } = user;

  return (
    <article
      style={{ display: "flex", border: "2px solid white", width: "450px" }}
    >
      <header>
        <img
          style={{ height: "100%", width: "150px", objectFit: "cover" }}
          src={avatar}
          alt={first_name}
        />
      </header>
      <section style={{ padding: "0px 5px", textAlign: "start" }}>
        <h3>
          {first_name} {last_name}
        </h3>
        <p>{email}</p>
      </section>
    </article>
  );
};

export default CardUser;
