import ButtonApp from "./components/ButtonApp";
import "./App.css";

const App = () => {
  //código javascript
  const message = "Bienvenidos a la clase 😉";
  const texto =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sint quos earum, beatae facilis maxime consequatur in reiciendis repellendus suscipit.";

  const users = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
  ];

  return (
    // código JSX
    <div>
      <h1>{message}</h1>
      <p>{texto}</p>
      {/* quiero mi botón  */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <ButtonApp
          title="Documentación"
          link="https://react.dev/"
          color="btn-react"
        />
        <ButtonApp
          title="RollingCode"
          link="https://web.rollingcodeschool.com/"
          color="btn-rolling"
        />
        <ButtonApp
          title="Youtube"
          link="https://www.youtube.com/"
          color="btn-youtube"
        />
        {/* <ButtonApp /> */}
      </div>
      <div style={{ marginTop: "30px" }}>
        {/* mostrar la lista de emails de los usuarios */}
        {users.map((user) => (
          // <p>{user.email}</p>
          <div key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
