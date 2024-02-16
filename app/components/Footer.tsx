// components/Footer.tsx

const Footer: React.FC = () => {
    return (
      <footer className="relative bg-gray-800 py-4 bottom-0 z-50">
        <div className="container mx-auto px-4 text-center text-white">
          © {new Date().getFullYear()} Webfinity and Beyond! All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  