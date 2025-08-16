import { useState } from "react";
import { User, Lock, ChefHat, Sparkle } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1974&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[rgba(17,25,40,0.2)] backdrop-blur-lg backdrop-saturate-100" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Login Form */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="w-full max-w-[700px] min-h-[620px] flex flex-col justify-center items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-10">
              <div className="text-center mb-10 text-[#F5EDE2]">
                <h2 className="text-4xl font-bold mb-1">Welcome Back</h2>
                <p className="text-[#D9D4C8]">Please log into your account</p>
              </div>

              <form className="space-y-8 w-full max-w-md">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D9886A]"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D9886A]"
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-4 rounded-xl font-semibold text-white transition hover:scale-105"
                  style={{
                    backgroundColor: "#D9886A",
                    boxShadow: "0 12px 28px rgba(217, 136, 106, 0.35)",
                  }}
                >
                  Log In
                </button>
              </form>

              <div className="text-center mt-6 space-y-2">
                <a
                  href="#"
                  className="text-sm text-[#D9D4C8] hover:underline block"
                >
                  Forgot your password?
                </a>
                <a
                  href="#"
                  className="text-sm text-[#F5EDE2] font-medium hover:underline"
                >
                  Don’t have an account? Register here
                </a>
              </div>
            </div>
          </div>

          {/* Brand Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#F5EDE2] leading-tight">
              Where every <br />
              <span className="text-[#F5EDE2]">
                moment
              </span>{" "}
              <br />
              feels unforgettable
            </h1>

            <p className="text-lg text-[#D9D4C8]">
              Unique culinary experiences for families, couples, and friends
              creating lasting memories.
            </p>

            <p className="text-base text-[#81A68D] opacity-90">
              Accessible luxury • Authentic flavors • Shared moments
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-4">
              <div className="flex items-center gap-2 text-[#F5EDE2] text-sm font-medium">
                <Sparkle className="w-5 h-5 text-[#81A68D]" />
                Exclusive ambiance
              </div>
              <div className="flex items-center gap-2 text-[#F5EDE2] text-sm font-medium">
                <ChefHat className="w-5 h-5 text-[#D9886A]" />
                Signature gastronomy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
