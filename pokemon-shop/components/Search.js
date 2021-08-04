function Search({ handleChange, Icon, placeholder }) {
  return (
    <div className="bg-gray-200 flex justify-center items-center">
      <input
        type="text"
        className="font-opensans font-normal bg-gray-200 text-center text-base
        py-2 z-0 focus:outline-none md: px-10 placeholder-gray-700 text-gray-700"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button className="bg-gray-500 p-3 flex justify-end items-center text-white transition ease-in-out duration-300 hover:bg-blue-600">
        <Icon className="h-5" />
      </button>
    </div>
  );
}

export default Search;
