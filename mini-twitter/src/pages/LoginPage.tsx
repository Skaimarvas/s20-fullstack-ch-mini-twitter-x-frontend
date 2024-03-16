import { useForm } from "react-hook-form";

export const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} type="text" />
        <input {...register("password")} type="text" />
      </form>
    </div>
  );
};
