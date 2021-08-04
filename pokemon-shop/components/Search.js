function Search({ handleChange, Icon, placeholder }) {
  return (
    <div className="flex justify-center items-center w-full">
      <input
        type="text"
        className="font-opensans font-normal bg-gray-200 text-center text-base
        py-2 z-0 focus:border focus:border-black hover:border hover:border-black focus:outline-none md: px-10 placeholder-gray-700"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
