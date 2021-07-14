function Search({ Icon, placeholder }) {
  return (
    <div class="container flex items-center">
      {" "}
      <input
        type="text"
        class="h-10 w-70 text-center pl-6 rounded z-0 focus:shadow focus:outline-none"
        placeholder={placeholder}
      />
      <Icon className="absolute ml-1 h-6 w-6 text-gray-400 z-20 hover:text-gray-500"></Icon>
    </div>
  );
}

export default Search;
