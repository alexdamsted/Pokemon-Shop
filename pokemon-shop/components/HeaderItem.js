function HeaderItem({ title, Icon, handleCartClick }) {
  return (
    <>
      <div className="text-gray-500 flex items-center cursor-pointer group transition ease-in-out duration-300 hover:text-blue-600 mt-2 2xl:m-0">
        <Icon className="h-8" />
        <p
          onClick={() => handleCartClick()}
          className="font-montserrat ml-1 font-bold text-xs"
        >
          {title}
        </p>
      </div>
    </>
  );
}

export default HeaderItem;
