import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BotonSeleccionType = {
  className?: string;

  /** Style props */
  botonSeleccionWidth?: CSSProperties["width"];
  botonSeleccionHeight?: CSSProperties["height"];
  botonSeleccionPosition?: CSSProperties["position"];
  botonSeleccionTop?: CSSProperties["top"];
  botonSeleccionRight?: CSSProperties["right"];
  botonSeleccionBottom?: CSSProperties["bottom"];
  botonSeleccionLeft?: CSSProperties["left"];
};

const BotonSeleccion: FunctionComponent<BotonSeleccionType> = ({
  className = "",
  botonSeleccionWidth,
  botonSeleccionHeight,
  botonSeleccionPosition,
  botonSeleccionTop,
  botonSeleccionRight,
  botonSeleccionBottom,
  botonSeleccionLeft,
}) => {
  const botonSeleccionStyle: CSSProperties = useMemo(() => {
    return {
      width: botonSeleccionWidth,
      height: botonSeleccionHeight,
      position: botonSeleccionPosition,
      top: botonSeleccionTop,
      right: botonSeleccionRight,
      bottom: botonSeleccionBottom,
      left: botonSeleccionLeft,
    };
  }, [
    botonSeleccionWidth,
    botonSeleccionHeight,
    botonSeleccionPosition,
    botonSeleccionTop,
    botonSeleccionRight,
    botonSeleccionBottom,
    botonSeleccionLeft,
  ]);

  return (
    <div
      className={`w-[230px] h-[230px] text-center text-xl text-dimgray font-inter ${className}`}
      style={botonSeleccionStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-corner-large bg-white box-border border-[1px] border-solid border-darkgray" />
      <img
        className="absolute h-[65.22%] w-[75.65%] top-[7.39%] right-[12.17%] bottom-[27.39%] left-[12.17%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/icono@2x.png"
      />
      <b className="absolute w-[86.96%] top-[79.13%] left-[6.96%] inline-block">
        Automotores
      </b>
    </div>
  );
};

export default BotonSeleccion;
