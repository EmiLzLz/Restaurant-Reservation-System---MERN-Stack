import React from "react";
import restaurant2 from "../../assets/images/restaurant2.webp"
import restaurant3 from "../../assets/images/restaurant3.webp"
import restaurant4 from "../../assets/images/restaurant4.webp"
import restaurant5 from "../../assets/images/restaurant5.webp"
const About = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Banner Image */}
      <div className="relative h-64 md:h-[480px] w-full overflow-hidden">
        <img
          src={restaurant2}
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
                  backgroundImage: `url(${restaurant3})`,
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
                  backgroundImage: `url(${restaurant4})`,
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
                  backgroundImage: `url(${restaurant5})`,
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
