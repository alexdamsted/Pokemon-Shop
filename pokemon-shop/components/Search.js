function Search({ handleChange, Icon, placeholder }) {
  return (
    <div className="flex items-center w-full">
      <input
        type="text"
        className="bg-gray-200 w-full text-center 
        text-2xl py-2 z-0 focus:border focus:border-black hover:border hover:border-black focus:outline-none md:text-lg md:py-2 md: px-10 placeholder-gray-700"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
