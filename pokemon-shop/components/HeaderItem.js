function HeaderItem({ title, Icon }) {
  return (
    <>
      <div
        className="cursor-pointer group flex flex-col items-center
      hover:text-white"
      >
        <Icon className="h-8 mb-1" />
        <p className="opacity-100 group-hover:opacity-100">{title}</p>
      </div>
    </>
  );
}

export default HeaderItem;
