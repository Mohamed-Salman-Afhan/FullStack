import { useState } from "react";

const EnergyCardProduction = (props) => {
  //   const day = "Mon";
  //   const date = "Aug 18";
  //   const production = 34.1;
  //   const unit = "kWh";

  // if(props.hasAnomally){
  //   // add a red border to the card if there is an anomally
  //   return (
  //     <div className="rounded-lg border-2 border-red-500 bg-white text-gray-950 text-center">
  //       <div className=" flex flex-col gap-2 p6 pb-2">
  //         <span className="block text-gray-600 text-sm font-medium">{props.day}</span>
  //         <span className="block text-xs text-gray-500">{props.date}</span>
  //       </div>
  //       <div className="p-6 pt-2 flex flex-col items-center">
  //         <span className="block mb-1 text-3xl font bold text-red-600">
  //           {props.production}
  //         </span>
  //         <span className="block text-sm font-medium text-gray-500">kWh</span>
  //       </div>
  //     </div>
  //   );
  // }

  //Local Variable
//   let isSelected = false;

//State Variable
const[isSelected,setIsSelected] = useState(false);


//   const handleClick = (e) => {
//     isSelected = !isSelected;
//     console.log(e.target);
//     console.log(`${props.day} was clicked`);
//   };


const handleClick = () => {
    setIsSelected(!isSelected);
}

  return (
    <button
      className={`block cursor-pointer ${
        isSelected ? "outline-2 outline-offset-2 outline-blue-600" : ""
      } relative border ${
        props.hasAnomally ? "border-red-500" : "border-gray-200"
      } rounded-lg bg-white text-gray-950 text-center`}
      onClick={handleClick}
    >
      {props.hasAnomally && (
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-sm rounded-bl-lg">
          Anomaly
        </div>
      )}
      <div className=" flex flex-col gap-2 p6 pb-2">
        <span className="block text-gray-600 text-sm font-medium">
          {props.day}
        </span>
        <span className="block text-xs text-gray-500">{props.date}</span>
      </div>
      <div className="p-6 pt-2 flex flex-col items-center">
        <span
          className={`block mb-1 text-3xl font bold ${
            props.hasAnomally ? "text-red-600" : "text-blue-600"
          }`}
        >
          {props.production}
        </span>
        <span className="block text-sm font-medium text-gray-500">kWh</span>
      </div>
    </button>
  );
};

export default EnergyCardProduction;
