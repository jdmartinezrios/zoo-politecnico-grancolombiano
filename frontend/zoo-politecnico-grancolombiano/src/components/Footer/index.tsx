const Footer = () => {
  return (
    <div className="max-x-full h-auto bg-gray-200 px-2 py-4">
      <p className="float-right text-base font-bold">
        Copyright Zoo © {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
