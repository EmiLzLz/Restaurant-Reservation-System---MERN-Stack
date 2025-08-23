import { useState } from "react";
import { ChefHat, Sparkle } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";

export default function Login() {
  const { user, login, error, loading } = useAuth();
  const navigate = useNavigate();
  const [formError, setFormError] = useState(null);

  const handleLogin = async ({ name, password }) => {
    const result = await login(name, password);

    if (result.success) {
      setTimeout(() => {
        if (user?.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      }, 100);
    } else {
      setFormError(result.error || "Login failed");
    }
  };

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
          {/* Login Form Section */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="w-full max-w-[700px] min-h-[620px] flex flex-col justify-center items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-10">
              <div className="text-center mb-10 text-[#F5EDE2]">
                <h2 className="text-4xl font-bold mb-1">Welcome Back</h2>
                <p className="text-[#D9D4C8]">Please log into your account</p>
              </div>

              <LoginForm onSubmit={handleLogin} isLoading={loading} />

              {formError && (
                <p className="text-red-400 text-sm mt-4 text-center">
                  {formError}
                </p>
              )}

              <div className="text-center mt-6 space-y-2">
                <a
                  href="#"
                  className="text-sm text-[#D9D4C8] hover:underline block"
                >
                  Forgot your password?
                </a>
                <a
                  href="/register"
                  className="text-sm text-[#F5EDE2] font-medium hover:underline"
                >
                  Don’t have an account? Register here
                </a>
              </div>
            </div>
          </div>

          {/* Brand Section */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#F5EDE2] leading-tight">
              Where every <br />
              <span className="text-[#F5EDE2]">moment</span> <br />
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
