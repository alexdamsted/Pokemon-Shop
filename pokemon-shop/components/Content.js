const Content = ({ pokemon }) => {
  console.log(pokemon.results[0].name);
  return <div>{pokemon.results[0].name}</div>;
};

export default Content;
