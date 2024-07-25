import { FunctionComponent } from "react";

export type ManuLeftType = {
  className?: string;
};

const ManuLeft: FunctionComponent<ManuLeftType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[119px] left-[0px] w-[321px] h-[905px] overflow-y-auto text-left text-5xl text-dimgray font-inter ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-whitesmoke" />
      <div className="absolute h-[0.55%] w-[91.9%] top-[6.3%] right-[5.92%] bottom-[93.15%] left-[2.18%] bg-tan" />
      <b className="absolute w-[62.31%] top-[2.43%] left-[15.26%] inline-block">
        Menú
      </b>
      <b className="absolute h-[3.2%] w-[83.8%] top-[8.29%] left-[5.92%] text-base flex items-center">
        Item 01
      </b>
      <img
        className="absolute h-[2.43%] w-[6.85%] top-[2.76%] right-[86.6%] bottom-[94.81%] left-[6.54%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
  );
};

export default ManuLeft;
