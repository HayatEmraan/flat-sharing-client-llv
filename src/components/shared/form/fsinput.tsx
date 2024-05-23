import { useFormContext } from "react-hook-form";

const FsInput = () => {
  const { register, watch } = useFormContext();

  return (
    <>
      <input type="text" {...register("username")} placeholder="Username" />
      <input type="email" {...register("email")} placeholder="Email" />
      <input type="password" {...register("password")} placeholder="Password" />
      <input
        type="password"
        {...register("cPassword")}
        placeholder="Confirm Password"
      />
      <button type="submit">Sign Up</button>
    </>
  );
};

export default FsInput;
