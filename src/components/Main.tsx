import { FunctionComponent } from "react";
import BotonSeleccion from "./BotonSeleccion";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[119px] left-[321px] w-[959px] h-[905px] ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
      <BotonSeleccion
        botonSeleccionWidth="23.98%"
        botonSeleccionHeight="25.41%"
        botonSeleccionPosition="absolute"
        botonSeleccionTop="4.53%"
        botonSeleccionRight="71.22%"
        botonSeleccionBottom="70.06%"
        botonSeleccionLeft="4.8%"
      />
      <BotonSeleccion
        botonSeleccionWidth="23.98%"
        botonSeleccionHeight="25.41%"
        botonSeleccionPosition="absolute"
        botonSeleccionTop="4.53%"
        botonSeleccionRight="43.69%"
        botonSeleccionBottom="70.06%"
        botonSeleccionLeft="32.33%"
      />
      <BotonSeleccion
        botonSeleccionWidth="23.98%"
        botonSeleccionHeight="25.41%"
        botonSeleccionPosition="absolute"
        botonSeleccionTop="4.53%"
        botonSeleccionRight="16.16%"
        botonSeleccionBottom="70.06%"
        botonSeleccionLeft="59.85%"
      />
      <BotonSeleccion
        botonSeleccionWidth="23.98%"
        botonSeleccionHeight="25.41%"
        botonSeleccionPosition="absolute"
        botonSeleccionTop="34.48%"
        botonSeleccionRight="71.12%"
        botonSeleccionBottom="40.11%"
        botonSeleccionLeft="4.9%"
      />
      <BotonSeleccion
        botonSeleccionWidth="23.98%"
        botonSeleccionHeight="25.41%"
        botonSeleccionPosition="absolute"
        botonSeleccionTop="34.48%"
        botonSeleccionRight="43.59%"
        botonSeleccionBottom="40.11%"
        botonSeleccionLeft="32.43%"
      />
      <BotonSeleccion
        botonSeleccionWidth="23.98%"
        botonSeleccionHeight="25.41%"
        botonSeleccionPosition="absolute"
        botonSeleccionTop="34.48%"
        botonSeleccionRight="16.06%"
        botonSeleccionBottom="40.11%"
        botonSeleccionLeft="59.96%"
      />
      <BotonSeleccion
        botonSeleccionWidth="23.98%"
        botonSeleccionHeight="25.41%"
        botonSeleccionPosition="absolute"
        botonSeleccionTop="64.42%"
        botonSeleccionRight="71.22%"
        botonSeleccionBottom="10.17%"
        botonSeleccionLeft="4.8%"
      />
      <BotonSeleccion
        botonSeleccionWidth="23.98%"
        botonSeleccionHeight="25.41%"
        botonSeleccionPosition="absolute"
        botonSeleccionTop="64.42%"
        botonSeleccionRight="43.69%"
        botonSeleccionBottom="10.17%"
        botonSeleccionLeft="32.33%"
      />
      <BotonSeleccion
        botonSeleccionWidth="23.98%"
        botonSeleccionHeight="25.41%"
        botonSeleccionPosition="absolute"
        botonSeleccionTop="64.42%"
        botonSeleccionRight="16.16%"
        botonSeleccionBottom="10.17%"
        botonSeleccionLeft="59.85%"
      />
    </div>
  );
};

export default Main;
