function HeaderItem({ title, Icon }) {
  return (
    <>
      <div className="text-gray-500 flex items-center my-5 cursor-pointer group hover:text-gray-400 hover:underline">
        <Icon className="h-8" />
        {/* <p className="ml-1 text-xl font-light sm:text-2xl">{title}</p> */}
      </div>
    </>
  );
}

export default HeaderItem;
