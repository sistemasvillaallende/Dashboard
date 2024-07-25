import { FunctionComponent } from "react";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1280px] h-[119px] ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(90deg,_#ff8c00,_#eeff00)]" />
      <img
        className="absolute h-[82.35%] w-[22.66%] top-[8.4%] right-[75.94%] bottom-[9.24%] left-[1.41%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/logo-1@2x.png"
      />
      <img
        className="absolute h-[31.09%] w-[2.89%] top-[33.61%] right-[3.52%] bottom-[35.29%] left-[93.59%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-3@2x.png"
      />
    </div>
  );
};

export default Header;
