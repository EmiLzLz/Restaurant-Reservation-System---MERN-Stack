import React from "react";

const About = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Banner Image */}
      <div className="relative h-64 md:h-[480px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1734520567931-21054aba2b89?q=80&w=1183&auto=format&fit=fill&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="bg-[#F5EDE2] py-20 px-6 relative">

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#2C3E36] mb-6">
              Donde los momentos cobran vida
            </h2>
            <div className="relative w-32 h-px bg-gradient-to-r from-transparent via-[#D9886A] to-transparent mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D9886A]/60 to-transparent blur-sm"></div>
            </div>
            <p className="text-lg text-[#2C3E36] opacity-80 max-w-3xl mx-auto leading-relaxed">
              Más que un destino, somos el escenario donde cada conversación se
              vuelve memorable y cada encuentro trasciende lo ordinario
            </p>
          </div>

          {/* Quote Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="bg-white/60 p-8 rounded-2xl backdrop-blur-sm border border-[#D9886A]/20 shadow-lg max-w-3xl mx-auto relative">
              <blockquote className="text-[#2C3E36] italic text-xl leading-relaxed">
                "Aquí, cada mesa cuenta una historia diferente, pero todas
                comparten la misma esencia: la celebración de estar
                verdaderamente presente."
              </blockquote>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden group h-[480px] shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="relative z-10 flex flex-col justify-end h-full p-8 text-center">
                <h4 className="text-xl font-light text-white mb-2">
                  Encuentros auténticos
                </h4>
                <p className="text-white/90 text-sm">
                  Espacios que invitan a la conexión genuina
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group h-[480px] shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="relative z-10 flex flex-col justify-end h-full p-8 text-center">
                <h4 className="text-xl font-light text-white mb-2">
                  Perspectivas infinitas
                </h4>
                <p className="text-white/90 text-sm">
                  Vistas que expanden la mente y el corazón
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group h-[480px] shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop')`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="relative z-10 flex flex-col justify-end h-full p-8 text-center">
                <h4 className="text-xl font-light text-white mb-2">
                  Memorias perdurables
                </h4>
                <p className="text-white/90 text-sm">
                  Momentos que trascienden el tiempo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
