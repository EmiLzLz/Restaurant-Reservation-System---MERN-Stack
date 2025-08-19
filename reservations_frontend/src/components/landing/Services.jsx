import React from "react";
import {
  User,
  UserPlus,
  Calendar,
  Sparkles,
  Clock,
  Diamond,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="bg-gradient-to-br from-[#2C3E36] via-[#1a241f] via-30% to-[#0f1812] to-70% min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Multiple gradient overlays for luxury depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D9886A]/5 via-transparent to-[#81A68D]/8"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#2C3E36]/20 to-black/30"></div>
      <div className="absolute inset-0 bg-radial-gradient from-[#D9886A]/3 at-30%-20% via-transparent to-transparent"></div>

      {/* Animated gradient orbs for luxury feel */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-[#D9886A]/10 to-[#81A68D]/8 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#81A68D]/8 to-[#D9886A]/6 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-[#2C3E36]/15 to-transparent rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,.3) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-[#F5EDE2] mb-6 tracking-wide drop-shadow-2xl">
            Your Journey Begins
          </h2>
          {/* Enhanced luxury divider line */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D9886A] to-transparent"></div>
              <div className="absolute inset-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D9886A] to-transparent blur-sm opacity-60"></div>
              <div className="absolute inset-0 w-40 h-1 bg-gradient-to-r from-transparent via-[#D9886A]/20 to-transparent blur-md"></div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Experience Description with Image */}
          <div className="space-y-8">
            {/* Elegant Image with enhanced effects */}
            <div className="relative overflow-hidden rounded-2xl mb-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Elegant dining experience"
                className="w-full h-64 object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E36] via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#D9886A]/10 via-transparent to-[#81A68D]/10"></div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-light text-[#F5EDE2] mb-4 drop-shadow-lg">
                Curated for the Extraordinary
              </h3>
              <p className="text-[#D9D4C8] text-lg leading-relaxed drop-shadow-sm">
                Whether celebrating intimate moments between two hearts,
                gathering cherished family memories, or creating new stories
                with beloved friends, every table tells a tale worth
                remembering.
              </p>
            </div>

            {/* Experience Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 text-[#D9D4C8]">
                <Sparkles className="w-6 h-6 text-[#D9886A] flex-shrink-0 mt-1 drop-shadow-lg" />
                <span className="text-lg leading-relaxed">
                  Personalized dining experiences tailored to your occasion
                </span>
              </div>
              <div className="flex items-start space-x-4 text-[#D9D4C8]">
                <Clock className="w-6 h-6 text-[#D9886A] flex-shrink-0 mt-1 drop-shadow-lg" />
                <span className="text-lg leading-relaxed">
                  Seamless reservations with preferred time selections
                </span>
              </div>
              <div className="flex items-start space-x-4 text-[#D9D4C8]">
                <Diamond className="w-6 h-6 text-[#D9886A] flex-shrink-0 mt-1 drop-shadow-lg" />
                <span className="text-lg leading-relaxed">
                  Exclusive member benefits and priority seating
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Service Flow with enhanced glass effect */}
          <div className="service-flow p-10 shadow-2xl rounded-3xl relative">
            {/* Glass effect enhancement */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-[#D9886A]/5 to-transparent rounded-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-light text-[#2C3E36] mb-8 text-center">
                Begin Your Experience
              </h3>

              {/* Existing Members */}
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <User className="w-7 h-7 text-[#81A68D] mr-3" />
                  <h4 className="text-xl font-medium text-[#2C3E36]">
                    Welcome Back, Connoisseur
                  </h4>
                </div>
                <p className="text-[#2C3E36] mb-6 opacity-80">
                  Your table awaits. Access your personalized dashboard and
                  secure your next unforgettable evening.
                </p>
                <Link to="/dashboard">
                  <button className="w-full bg-gradient-to-r from-[#2C3E36] to-[#1a241f] text-[#F5EDE2] py-4 px-6 rounded-xl font-medium text-lg hover:from-[#1a241f] hover:to-[#2C3E36] transition-all duration-300 transform hover:scale-[1.02] shadow-lg cursor-pointer">
                    Continue to Dashboard
                  </button>
                </Link>
              </div>

              {/* Divider */}
              <div className="relative mb-10">
                <div className="w-full border-t border-gradient-to-r from-transparent via-[#D9D4C8] to-transparent"></div>
              </div>

              {/* New Members */}
              <div>
                <div className="flex items-center mb-4">
                  <UserPlus className="w-7 h-7 text-[#D9886A] mr-3" />
                  <h4 className="text-xl font-medium text-[#2C3E36]">
                    Join Our Circle
                  </h4>
                </div>
                <p className="text-[#2C3E36] mb-6 opacity-80">
                  Become part of our community in moments. Effortless
                  registration, immediate access, and a world of culinary
                  excellence at your fingertips.
                </p>

                {/* Benefits List with enhanced styling */}
                <div className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/20">
                  <h5 className="text-[#2C3E36] font-medium mb-3">
                    Member Privileges
                  </h5>
                  <div className="space-y-3 text-sm text-[#2C3E36]">
                    <div className="flex items-start">
                      <Calendar className="w-4 h-4 text-[#81A68D] mr-3 flex-shrink-0 mt-0.5" />
                      <span>Priority reservations during peak hours</span>
                    </div>
                    <div className="flex items-start">
                      <Sparkles className="w-4 h-4 text-[#81A68D] mr-3 flex-shrink-0 mt-0.5" />
                      <span>
                        Personalized recommendations & special occasions
                      </span>
                    </div>
                    <div className="flex items-start">
                      <Diamond className="w-4 h-4 text-[#81A68D] mr-3 flex-shrink-0 mt-0.5" />
                      <span>
                        Exclusive access to private dining experiences
                      </span>
                    </div>
                  </div>
                </div>

                <Link to="/register">
                  <button className="w-full bg-gradient-to-r from-[#D9886A] to-[#C67B5C] text-[#F5EDE2] py-4 px-6 rounded-xl font-medium text-lg hover:from-[#C67B5C] hover:to-[#D9886A] transition-all duration-300 transform hover:scale-[1.02] shadow-lg cursor-pointer">
                    Create Your Account
                  </button>
                </Link>

                <p className="text-xs text-[#2C3E36] opacity-60 text-center mt-4">
                  Registration takes less than 60 seconds. Instant access
                  guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center">
          <div className="group">
            <div className="text-4xl md:text-5xl font-light text-[#D9886A] mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
              300+
            </div>
            <div className="text-[#D9D4C8] text-lg">
              Cherished Moments Daily
            </div>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-light text-[#81A68D] mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
              180+
            </div>
            <div className="text-[#D9D4C8] text-lg">Culinary Masterpieces</div>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-light text-[#D9886A] mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
              24/7
            </div>
            <div className="text-[#D9D4C8] text-lg">Reservation Access</div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="text-center mt-16">
          <p className="text-[#D9D4C8] text-lg mb-6 drop-shadow-sm">
            Ready to transform an ordinary evening into an extraordinary memory?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 border-2 border-[#F5EDE2] text-[#F5EDE2] rounded-xl font-medium hover:bg-[#F5EDE2] hover:text-[#2C3E36] transition-all duration-300 backdrop-blur-sm">
              Explore Our Story
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-[#81A68D] to-[#6B8E73] text-[#F5EDE2] rounded-xl font-medium hover:from-[#6B8E73] hover:to-[#81A68D] transition-all duration-300 shadow-lg">
              Reserve Your Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
