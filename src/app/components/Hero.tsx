import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowRight, Star, Leaf } from "lucide-react";
import AyurvedaFlower from "../../assets/ayurveda-flower.jpeg";

export function Hero() {
  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-amber-50 to-green-100"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 right-1/4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Floating leaf decorations */}
      <div className="absolute top-32 left-20 opacity-20 animate-float">
        <Leaf className="text-green-600 w-16 h-16 rotate-45" />
      </div>
      <div className="absolute bottom-32 right-32 opacity-20 animate-float animation-delay-2000">
        <Leaf className="text-green-600 w-20 h-20 -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-green-800 rounded-full text-sm shadow-lg border border-green-200">
              <Star className="text-amber-500 fill-amber-500" size={16} />
              <span className="font-semibold">Ancient Wisdom, Modern Care</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Heal Naturally with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
                Ayurveda
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Experience authentic Ayurvedic treatments by{" "}
              <span className="font-semibold text-green-700">
                Dr. Harsita Devi
              </span>
              , an experienced and certified Ayurvedic physician. Personalized
              care for your holistic wellness journey, both in-person and
              online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToConsultation}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-7 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
              >
                Book Online Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById("prakriti");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-8 py-7 text-lg shadow-lg backdrop-blur-sm bg-white/80 transform hover:-translate-y-1 transition-all"
              >
                Take Prakriti Test
              </Button>
            </div>
            <div className="flex gap-8 pt-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-green-700">100+</div>
                  <div className="text-gray-600 text-sm">Happy Patients</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-green-700">75+</div>
                  <div className="text-gray-600 text-sm">
                    Online Consultations
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-green-700">100%</div>
                  <div className="text-gray-600 text-sm">Natural Care</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-500">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent z-10"></div>
              <ImageWithFallback
                src={AyurvedaFlower}
                alt="Ayurvedic herbs and treatments"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-white to-green-50 p-6 rounded-3xl shadow-2xl hidden md:block border border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🌿</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    Dr. Harsita Devi
                  </div>
                  <div className="text-sm text-green-700">
                    Certified Ayurvedic Physician
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
