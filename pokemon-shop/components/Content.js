const Content = ({ pokemon }) => {
  return (
    <div>{pokemon.results.forEach((pokemon) => console.log(pokemon.name))}</div>
  );
};

export default Content;
