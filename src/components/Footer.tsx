import Logo from "../assets/logo-text.png";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div
        className="
          container mx-auto
          px-4 sm:px-6 lg:px-8
          py-8 sm:py-12 lg:py-14
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
          <div className="item lg:col-span-2 text-center lg:text-left">
            <img
              src={Logo}
              alt="Dev Stack"
              className="w-24 sm:w-auto mx-auto lg:mx-0"
            />
            <p
              className="
                font-jakarta
                text-[10px] sm:text-[12px]
                leading-4 sm:leading-5
                text-pera
                max-w-[320px]
                mx-auto lg:mx-0
                mt-3
              "
            >
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <ul className="flex justify-center lg:justify-start gap-4 mt-5">
              <li className="font-jakarta font-semibold text-[10px] sm:text-[12px] text-text cursor-pointer">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li className="font-jakarta font-semibold text-[10px] sm:text-[12px] text-text cursor-pointer">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li className="font-jakarta font-semibold text-[10px] sm:text-[12px] text-text cursor-pointer">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="item hidden lg:block">
            <h2 className="font-jakarta font-bold text-[12px] text-heading uppercase">
              PRODUCT
            </h2>
            <ul className="text-pera text-[12px] font-jakarta flex flex-col gap-2 mt-3">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Technologies</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
            </ul>
          </div>
          <div className="item hidden lg:block">
            <h2 className="font-jakarta font-bold text-[12px] text-heading uppercase">
              COMPANY
            </h2>
            <ul className="text-pera text-[12px] font-jakarta flex flex-col gap-2 mt-3">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="item hidden lg:block">
            <h2 className="font-jakarta font-bold text-[12px] text-heading uppercase">
              LEGAL
            </h2>

            <ul className="text-pera text-[12px] font-jakarta flex flex-col gap-2 mt-3">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            reserve
            flex
            flex-row
            items-center
            justify-between
            gap-3
            pt-5
            sm:pt-6
            lg:pt-8
            border-t
            border-[#F1F5F9]
            mt-2
            lg:mt-0
            pb-6
            lg:pb-12
          "
        >
          <div className="text">
            <p
              className="
                font-jakarta
                text-[8px]
                sm:text-[10px]
                lg:text-[12px]
                text-pera
                whitespace-nowrap
              "
            >
              © 2026 Dev Stack. All rights reserved.
            </p>
          </div>
          <div className="link">
            <ul
              className="
                text-pera
                text-[8px]
                sm:text-[10px]
                lg:text-[12px]
                font-jakarta
                flex
                gap-3
                sm:gap-4
              "
            >
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
