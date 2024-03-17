//Hooks
import { useForm } from "react-hook-form";
//Icon
import { Icon } from "@iconify/react";
import { useAppDispatch } from "../hooks/hook";
import { postLoginData } from "../store/thunks/UserThunk";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    dispatch(postLoginData(data));
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <div className="flex flex-col gap-7 w-[350px] ">
        <div className="flex justify-center">
          <Icon icon="logos:twitter" className="text-[40px]" />
        </div>
        <div className="flex ">
          <h3 className="text-2xl font-bold">Log in to Kiwitter</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <input
              {...register("email")}
              className="py-3 px-2 rounded-md border border-gray-300"
              type="text"
              placeholder="Email or Username"
            />
            <input
              {...register("password")}
              className="py-3 px-2 rounded-md border border-gray-300"
              type="text"
              placeholder="Password"
            />
            <button type="submit" className="bg-[#1DA1F2] rounded-full py-2">
              <span className="text-white font-bold">Log in</span>
            </button>
            <div className="flex justify-between text-sm text-[#1DA1F2]">
              <span>Forgot password?</span>
              <span>Sign up to Kiwitter</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
