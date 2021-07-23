import { useState, useEffect } from "react";

const Content = ({ title, fetchUrl }) => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {}, []);

  return <div>{title}</div>;
};

export default Content;
