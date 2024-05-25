import { NavLink } from "@/interface";
import { openDropdown } from "@/redux/features/uislice";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch } from "react-redux";

const SingleLink = ({ id, linkText, url, subLinks }: NavLink) => {
  const dispatch = useDispatch();
  const handleDropDown = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    const linkCords = target.getBoundingClientRect();
    const center = (linkCords.left + linkCords.right) / 2;
    dispatch(openDropdown({ link: linkText, center }));
  };

  return (
    <div className="relative">
      {url ? (
        <Link
          href={url}
          key={id}
          className="relative w-full px-3 py-[0.6rem] lg:px-4 flex-align-center gap-x-1 link"
          onMouseOver={handleDropDown}>
          {linkText}
          {subLinks && <BiChevronDown className="link" />}
        </Link>
      ) : (
        <span
          className="relative w-full cursor-pointer px-3 py-[0.6rem] lg:px-4 flex-align-center gap-x-1 link"
          onMouseOver={handleDropDown}>
          {linkText}
          {subLinks && <BiChevronDown className="link" />}
        </span>
      )}
    </div>
  );
};

export default SingleLink;
