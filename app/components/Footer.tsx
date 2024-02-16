const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black py-4 bottom-0 z-50 w-full">
      <div className="container mx-auto px-4 text-center text-white">
        © {new Date().getFullYear()} Webfinity and Beyond! All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
