import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import React from "react";

const InfoCard = (props: ILocation) => {
  return (
    <div className="flex py-7 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 flex-shrink-0">
        <img src={props.img} className='rounded-2xl w-40 md:h-52 md:w-80' />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{props.location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4>{props.title}</h4>
        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">
          {props.description}
        </p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {props.star}
          </p>
        </div>

        <div>
          <p className="text-lg lg:text-2xl font-semibold pb-2">
            {props.price}
          </p>
          <p className="text-right font-extralight">{props.total}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
