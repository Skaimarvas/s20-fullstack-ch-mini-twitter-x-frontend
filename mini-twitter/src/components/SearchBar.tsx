import React from "react";
//Hooks
import { useForm } from "react-hook-form";
//Icon
import { Icon } from "@iconify/react";

const SearchBar: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="sticky">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <input
            {...register("search")}
            type="text"
            className="bg-gray-100 py-2 pl-[50px] pr-2 rounded-full"
            placeholder="Search Twitter"
          />

          <div className="absolute inset-y-0 left-3 flex items-center">
            <Icon icon="ri:search-line" className="text-2xl text-gray-400" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
