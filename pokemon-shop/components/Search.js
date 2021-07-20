function Search({ Icon, placeholder }) {
  return (
    <div class="flex items-center mt-10 my-4 w-full">
      {" "}
      <input
        type="text"
        class="w-full text-center text-2xl text-gray-500 py-3 rounded z-0 focus:shadow focus:outline-none md:text-3xl md:py-5"
        placeholder={placeholder}
      />
      <Icon className="absolute ml-1 h-6 w-6 text-gray-400 z-20 hover:text-gray-500 md:ml-2 md:h-10 md:w-10"></Icon>
    </div>
  );
}

export default Search;
