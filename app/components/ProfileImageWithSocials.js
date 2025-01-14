const ProfileImageWithSocials = () => {
  return (
    <div className="text-center">
      <img
        src="assets/images/about/profile_image.jpg"
        alt="profile"
        className="w-48 h-48 mx-auto rounded-full shadow-md"
      />
      <div className="mt-6 flex justify-center space-x-4">
        <a
          href="#"
          className="text-gray-500 hover:text-blue-600 transition duration-300"
        >
          <i className="fa fa-facebook text-2xl"></i>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-pink-500 transition duration-300"
        >
          <i className="fa fa-dribbble text-2xl"></i>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-blue-400 transition duration-300"
        >
          <i className="fa fa-twitter text-2xl"></i>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-blue-700 transition duration-300"
        >
          <i className="fa fa-linkedin text-2xl"></i>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-purple-500 transition duration-300"
        >
          <i className="fa fa-instagram text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default ProfileImageWithSocials;
