import { useState } from "react";
import { Mail, Lock, User, Phone, CalendarCheck, Sparkle } from "lucide-react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1950&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[rgba(17,25,40,0.25)] backdrop-blur-lg backdrop-saturate-100" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Form Section */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-full max-w-[720px] min-h-[680px] flex flex-col justify-center items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-10">
              <div className="text-center mb-10 text-[#F5EDE2]">
                <h2 className="text-4xl font-bold mb-1">Join Our Circle</h2>
                <p className="text-[#D9D4C8]">
                  Create your account and access a world of curated dining
                  experiences
                </p>
              </div>

              <form className="space-y-7 w-full max-w-md">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D9886A]"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D9886A]"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D9886A]"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Create Password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D9886A]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white transition hover:scale-105"
                  style={{
                    backgroundColor: "#81A68D",
                    boxShadow: "0 12px 28px rgba(129, 166, 141, 0.35)",
                  }}
                >
                  Create Account
                </button>
              </form>

              <div className="text-center mt-6">
                <a href="#" className="text-sm text-[#F5EDE2] hover:underline">
                  Already have an account? Log in here
                </a>
              </div>
            </div>
          </div>

          {/* Intro Section */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#F5EDE2] leading-tight">
              Experience
              <br />
              <span className="text-[#D9886A]">Exquisite Membership</span>
            </h1>

            <p className="text-lg text-[#D9D4C8]">
              From priority bookings to exclusive dining rooms, your membership
              gives you more than a seat at the table — it grants access to
              unforgettable moments.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-4">
              <div className="flex items-center gap-2 text-[#F5EDE2] text-sm font-medium">
                <CalendarCheck className="w-5 h-5 text-[#81A68D]" />
                Member-only reservations
              </div>
              <div className="flex items-center gap-2 text-[#F5EDE2] text-sm font-medium">
                <Sparkle className="w-5 h-5 text-[#D9886A]" />
                Curated events & menus
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
