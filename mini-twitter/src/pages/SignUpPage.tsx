import { useForm } from "react-hook-form";

export const SignUpPage: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("fullName")} type="text" placeholder="Fullname" />
        <input {...register("userName")} type="text" placeholder="Username" />
        <input {...register("email")} type="text" placeholder="Email" />
        <input {...register("password")} type="text" placeholder="Password" />
      </form>
    </div>
  );
};
