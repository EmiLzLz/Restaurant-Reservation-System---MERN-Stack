import { User, Lock } from "lucide-react";
import { useForm } from "react-hook-form";

export default function LoginForm({ onSubmit, isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 w-full max-w-md"
    >
      {/* Username */}
      <div className="relative">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: "Username is required" })}
          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D9886A]"
        />
        {errors.username && (
          <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="relative">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D9886A]"
        />
        {errors.password && (
          <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 rounded-xl font-semibold text-white transition hover:scale-105 disabled:opacity-60"
        style={{
          backgroundColor: "#D9886A",
          boxShadow: "0 12px 28px rgba(217, 136, 106, 0.35)",
        }}
      >
        {isLoading ? "Logging In..." : "Log In"}
      </button>
    </form>
  );
}
