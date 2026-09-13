import Logo from "../assets/logo-text.png";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white container mx-auto grid grid-cols-5 gap-4 py-14">
        <div className="item col-span-2">
          <img src={Logo} alt="Logo" />
          <p className="font-jakarta text-[12px] text-[#64748B] w-95 mt-3">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex gap-4 mt-6">
            <li className="font-jakarta font-semibold text-[12px] text-text cursor-pointer">
              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li className="font-jakarta font-semibold text-[12px] text-text cursor-pointer">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li className="font-jakarta font-semibold text-[12px] text-text cursor-pointer">
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="item">
          <h2 className="font-jakarta font-bold text-[12px] text-heading uppercase">
            PRODUCT
          </h2>
          <ul className="text-[#64748B] text-[12px] font-jakarta flex flex-col gap-2 mt-3">
            <li className="cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Technologies</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Project</a>
            </li>
          </ul>
        </div>
        <div className="item">
          <h2 className="font-jakarta font-bold text-[12px] text-heading uppercase">
            COMPANY
          </h2>
          <ul className="text-[#64748B] text-[12px] font-jakarta flex flex-col gap-2 mt-3">
            <li className="cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Contact</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="item">
          <h2 className="font-jakarta font-bold text-[12px] text-heading uppercase">
            Legal
          </h2>
          <ul className="text-[#64748B] text-[12px] font-jakarta flex flex-col gap-2 mt-3">
            <li className="cursor-pointer">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
