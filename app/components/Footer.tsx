const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#1E3A8A] py-4 bottom-0 z-50 w-full px-12 sm:px-12 md:px-12 lg:px-20 xl:px-72
    xs:text-xs text-xs sm:text-sm md:text-base lg:text-base">
      <div className="flex w-full justify-between text-center">
         <span className=" ">Developed by: <a className=" text-blue-300" href="https://www.facebook.com/imbayuki/">Errol Robyn M. Abella</a></span>
         <span>© {new Date().getFullYear()} Webfinity and Beyond! All rights reserved. </span>
      </div>
    </footer>
  );
};

export default Footer;
