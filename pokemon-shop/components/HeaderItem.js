function HeaderItem({ title, Icon }) {
  return (
    <>
      <div
        className="cursor-pointer group flex flex-col items-center
      hover:text-white"
      >
        <Icon className="h-8" />
        <p className="hidden group-hover:block">{title}</p>
      </div>
    </>
  );
}

export default HeaderItem;
