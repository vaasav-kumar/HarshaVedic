import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, GraduationCap, Heart, Users, Sparkles } from "lucide-react";
import Doctor from "../../assets/doctor.png";

export function About() {
  const features = [
    {
      icon: GraduationCap,
      title: "Certified Expertise",
      description:
        "Experienced and certified Ayurvedic doctor with years of practice",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "Complete mind, body, and spirit wellness solutions",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "Successful treatment of numerous health conditions naturally",
      color: "from-green-600 to-teal-600",
    },
    {
      icon: Users,
      title: "Patient-Centric",
      description: "Personalized care tailored to your unique constitution",
      color: "from-lime-500 to-green-600",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, #16a34a 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-amber-500 rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-30 transition"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent z-10"></div>
              <ImageWithFallback
                src={Doctor}
                alt="Ayurvedic consultation"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* <div className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-400 to-amber-600 text-white p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform">
              <div className="text-5xl font-bold">15+</div>
              <div className="text-sm font-semibold">Years of Excellence</div>
            </div> */}
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm shadow-md">
              <Sparkles size={16} className="text-green-600" />
              <span className="font-semibold">About Dr. Harsita Devi</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Your Journey to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
                Natural Wellness
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Harsha Vedic, we believe in the power of ancient Ayurvedic
              wisdom combined with modern understanding. Our clinic is dedicated
              to providing authentic Ayurvedic treatments that address the root
              cause of health issues, not just symptoms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Led by{" "}
              <span className="font-semibold text-green-700">
                Dr. Harsita Devi
              </span>
              , an experienced and certified Ayurvedic physician, we offer
              personalized treatment plans based on your unique body
              constitution (Prakriti). Whether you visit us in person or opt for
              online consultations, you receive the same quality of care and
              attention.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition`}
                  ></div>
                  <div className="relative bg-white border border-green-100 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-3 shadow-md`}
                    >
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
