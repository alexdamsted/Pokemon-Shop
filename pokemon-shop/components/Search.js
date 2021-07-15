function Search({ Icon, placeholder }) {
  return (
    <div class="flex items-center my-4 w-full">
      {" "}
      <input
        type="text"
        class="w-full text-center text-gray-500 py-2 rounded z-0 focus:shadow focus:outline-none"
        placeholder={placeholder}
      />
      <Icon className="absolute ml-1 h-6 w-6 text-gray-400 z-20 hover:text-gray-500"></Icon>
    </div>
  );
}

export default Search;
