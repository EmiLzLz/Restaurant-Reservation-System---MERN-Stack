// src/components/RegisterForm.jsx
import { Mail, Lock, User, Phone } from "lucide-react";
import { useForm } from "react-hook-form";

export default function RegisterForm({ onSubmit, isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-7 w-full max-w-md"
    >
      {/* Name */}
      <div className="relative">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Full Name"
          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D9886A]"
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/, message: "Invalid email" },
          })}
          type="email"
          placeholder="Email Address"
          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D9886A]"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
        )}
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="relative">
        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
        <input
          {...register("phone", { required: "Phone number is required" })}
          type="tel"
          placeholder="Phone Number"
          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D9886A]"
        />
        {errors.phone && (
          <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="relative">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters" },
          })}
          type="password"
          placeholder="Create Password"
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
        className="w-full py-4 rounded-xl font-semibold text-white transition hover:scale-105"
        style={{
          backgroundColor: "#81A68D",
          boxShadow: "0 12px 28px rgba(129, 166, 141, 0.35)",
        }}
      >
        {isLoading ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
}
