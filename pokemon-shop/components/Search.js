function Search({ Icon, placeholder }) {
  return (
    <div class="flex items-center">
      {" "}
      <input
        type="text"
        class="w-full text-center py-2 pl-6 rounded z-0 focus:shadow focus:outline-none"
        placeholder={placeholder}
      />
      <Icon className="absolute ml-1 h-6 w-6 text-gray-400 z-20 hover:text-gray-500"></Icon>
    </div>
  );
}

export default Search;
