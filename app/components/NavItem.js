const NavItem = ({ label, href, isActive }) => {
  return (
    <li>
      <a
        href={href}
        className={`block py-2 px-4 text-lg font-medium transition ${
          isActive
            ? "text-yellow-500 dark:text-yellow-300"
            : "text-gray-600 hover:text-gray-700 focus:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </a>
    </li>
  );
};

export default NavItem;
