import React from "react";
//Icon
import { Icon } from "@iconify/react";
//Layouts
import Footer from "./Footer";
import { useForm } from "react-hook-form";

export default function SidebarRight() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col ">
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
        <span>Search Bar sticky</span>
      </div>
      <div>
        <span>Trends</span>
      </div>
      <div>
        <span>You might like</span>
      </div>
      <Footer />
    </div>
  );
}
