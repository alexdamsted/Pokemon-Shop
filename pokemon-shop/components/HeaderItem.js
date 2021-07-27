function HeaderItem({ title, Icon }) {
  return (
    <>
      <div className="text-gray-700 flex items-center my-5 cursor-pointer group hover:text-gray-400 hover:underline">
        <Icon className="h-8" />
        <p className="ml-1 text-sm sm:text-sm">{title}</p>
      </div>
    </>
  );
}

export default HeaderItem;
