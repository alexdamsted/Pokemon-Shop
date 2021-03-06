function Search({ handleChange, Icon, placeholder }) {
  return (
    <div className="bg-gray-100 flex items-center">
      <input
        type="text"
        className="text-left font-opensans font-normal bg-gray-100 text-sm
        py-2 px-4 w-full z-0 focus:outline-none placeholder-gray-700 text-gray-700"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button className="bg-black p-3 flex justify-end items-center text-white transition ease-in-out duration-300 hover:bg-blue-600">
        <Icon className="h-5" />
      </button>
    </div>
  );
}

export default Search;
