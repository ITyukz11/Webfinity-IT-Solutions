const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#1E3A8A] py-4 bottom-0 z-50 w-full">
      <div className="flex w-full justify-between md:px-12 lg:px-20 xl:px-72 text-center text-white text-lg sm:text-xs md:text-sm">
         <span>Developed by: <a className=" text-blue-300" href="https://www.facebook.com/imbayuki/">Errol Robyn M. Abella</a></span>
         <span>© {new Date().getFullYear()} Webfinity and Beyond! All rights reserved. </span>
      </div>
    </footer>
  );
};

export default Footer;
