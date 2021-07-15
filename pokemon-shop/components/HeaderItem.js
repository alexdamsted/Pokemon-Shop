function HeaderItem({ title, Icon }) {
  return (
    <>
      <div className="mx-4 my-4 cursor-pointer group hover:text-white">
        <Icon className="h-8" />
        <p className="hidden group-hover:block">{title}</p>
      </div>
    </>
  );
}

export default HeaderItem;
