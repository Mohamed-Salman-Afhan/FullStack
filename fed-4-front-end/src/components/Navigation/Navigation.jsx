// import s from "./Navigation.module.css";
import { Wind } from 'lucide-react';
import { ChartColumn } from 'lucide-react';

const Navigation = () => {

const user = "MS";

  return (
    <nav className={"px-12 py-6 flex justify-between items-center"}>
      <div className={"flex items-center gap-3"}>
        <div className={"w-10 h-10 rounded-full flex justify-center items-center bg-lime-400"}>
           <Wind className="block" />
        </div>
        <span className="font[Inter] text-xl font-semibold">Aelora</span>
      </div>
      <div className={"flex items-center gap-12"}>
        <div className={"flex items-center gap-3 py-2 px-3"}>
             <ChartColumn className="block w-4 h-4"/>
          <span className="text-lg font-medium">Dashboard</span>
        </div>
        <div className={"flex items-center gap-3"}>
            <div className={"w-8 h-8 rounded-full flex justify-center items-center bg-blue-500"}>
                <span className={"font[Inter] text-sm font-semibold text-white"}>{user}</span>
            </div>
            <span className="font[Inter] text-sm font-medium">Mohamed Salman</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
