import Link from "next/link";
const AccountHeaderItem = ({ title, Icon }) => {
  return (
    <Link href="/login" passHref>
      <div className="text-black flex items-center cursor-pointer group transition ease-in-out duration-300 hover:text-blue-600 mt-2 2xl:m-0">
        <Icon className="h-8" />
        <p className="font-montserrat ml-1 font-bold text-xs">{title}</p>
      </div>
    </Link>
  );
};

export default AccountHeaderItem;
