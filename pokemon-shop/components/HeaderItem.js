function HeaderItem({ title, Icon }) {
  return (
    <>
      <div className="text-gray-500 flex items-center my-2 cursor-pointer group transition ease-in-out duration-300 hover:text-blue-600 sm:my-5 2xl:m-0">
        <Icon className="h-8" />
        <p className="font-montserrat ml-1 font-bold text-xs">{title}</p>
      </div>
    </>
  );
}

export default HeaderItem;
