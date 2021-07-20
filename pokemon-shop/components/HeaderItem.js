function HeaderItem({ title, Icon }) {
  return (
    <>
      <div className="flex items-center my-4 cursor-pointer group hover:text-white">
        <Icon className="h-8" />
        <p className="ml-1 text-xl font-semibold sm:text-3xl">{title}</p>
      </div>
    </>
  );
}

export default HeaderItem;
