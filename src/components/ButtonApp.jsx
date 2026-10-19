const ButtonApp = (props) => {
  //   console.log(props);
  const { title = "Prueba", link = "", color = "btn-react" } = props; //extraer la propiedad como una variable
  //title
  return (
    <a href={link} target="_blank" className={`button ${color}`}>
      {title}
    </a>
  );
};

export default ButtonApp;
