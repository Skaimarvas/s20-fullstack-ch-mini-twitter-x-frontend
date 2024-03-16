//Hooks
import { useForm } from "react-hook-form";
//Icon
import { Icon } from "@iconify/react";
import { useAppDispatch } from "../hooks/hook";
import { postSignupData } from "../store/thunks/UserThunk";

const SignUpPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    dispatch(postSignupData(data));
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <div className="flex flex-col gap-7 w-[350px] ">
        <div className="flex justify-center">
          <Icon icon="logos:twitter" className="text-[40px]" />
        </div>
        <div className="flex ">
          <h3 className="text-2xl font-bold">Create An Account</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <input
              {...register("fullName")}
              className="py-3 px-2 rounded-md border border-gray-300"
              type="text"
              placeholder="Fullname"
            />
            <input
              {...register("userName")}
              type="text"
              className="py-3 px-2 rounded-md border border-gray-300"
              placeholder="Username"
            />
            <input
              {...register("email")}
              type="text"
              className="py-3 px-2 rounded-md border border-gray-300"
              placeholder="Email"
            />
            <input
              {...register("password")}
              type="text"
              className="py-3 px-2 rounded-md border border-gray-300"
              placeholder="Password"
            />
            <button type="submit" className="bg-[#1DA1F2] rounded-full py-2">
              <span className="text-white font-bold">Sign Up</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
