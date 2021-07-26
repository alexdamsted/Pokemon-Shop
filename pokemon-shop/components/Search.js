function Search({ handleChange, Icon, placeholder }) {
  return (
    <div className="my-20 flex items-center w-full md:my-10">
      {" "}
      <input
        type="text"
        className="w-full text-center text-2xl text-gray-500 py-3 rounded z-0 focus:shadow focus:outline-none md:text-3xl md:py-4"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <Icon className="absolute ml-1 h-6 w-6 text-gray-400 z-20 hover:text-gray-500 md:ml-2 md:h-10 md:w-10"></Icon>
    </div>
  );
}

export default Search;
