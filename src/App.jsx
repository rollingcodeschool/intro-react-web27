import ButtonApp from "./components/ButtonApp";
import "./App.css";
import { users } from "./data/info";
import CardUser from "./components/CardUser";
import CounterApp from "./components/CounterApp";

const App = () => {
  //código javascript
  const message = "Bienvenidos a la clase 😉";
  const texto =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sint quos earum, beatae facilis maxime consequatur in reiciendis repellendus suscipit.";

  return (
    // código JSX
    <div>
      <h1>{message}</h1>
      <p>{texto}</p>
      {/* quiero mi botón  */}
      <div>
        <CounterApp />
      </div>
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
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {/* mostrar la lista de emails de los usuarios */}
        {users.map((user) => (
          // <p>{user.email}</p>
          // <div key={user.id}>
          //   <img src={user.avatar} alt={user.first_name} />
          // </div>
          <CardUser user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
