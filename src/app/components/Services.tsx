import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Droplets,
  Leaf,
  Sparkles,
  Stethoscope,
  HeartPulse,
  User,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import PanchakarmaDetox from "../../assets/panchakarma-detox.png";
import HerbalTreatments from "../../assets/herbal-treatments.jpeg";
import TherapeuticMassages from "../../assets/therapeutic-massages.png";
import ChronicDiseaseManagement from "../../assets/chronic-disease-management.png";
import StressAndAnxietyRelief from "../../assets/stress-and-anxiety-relief.png";
import DietManagement from "../../assets/diet-management.png";

export function Services() {
  const services = [
    {
      icon: Droplets,
      title: "Panchakarma Detox",
      description:
        "Deep cleansing and rejuvenation therapy to eliminate toxins and restore balance",
      image: PanchakarmaDetox,
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Leaf,
      title: "Herbal Treatments",
      description:
        "Custom herbal formulations prepared according to your specific health needs",
      image: HerbalTreatments,
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Sparkles,
      title: "Therapeutic Massages",
      description:
        "Traditional Ayurvedic massages including Abhyanga, Shirodhara, and more",
      image: TherapeuticMassages,
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Stethoscope,
      title: "Chronic Disease Management",
      description:
        "Natural treatment for diabetes, arthritis, digestive disorders, and more",
      image: ChronicDiseaseManagement,
      color: "from-orange-500 to-red-600",
    },
    {
      icon: HeartPulse,
      title: "Stress & Anxiety Relief",
      description:
        "Holistic therapies to calm the mind and restore emotional balance",
      image: StressAndAnxietyRelief,
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: User,
      title: "Online Consultations",
      description:
        "Get expert Ayurvedic guidance from the comfort of your home",
      image: DietManagement,
      color: "from-lime-500 to-green-600",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-white via-green-50 to-amber-50 relative overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0z' fill='%2316a34a' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm mb-4 shadow-md">
            <Sparkles size={16} className="text-green-600" />
            <span className="font-semibold">Our Services</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Ayurvedic Care
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From detox therapies to chronic disease management, we offer a
            complete range of authentic Ayurvedic treatments tailored to your
            needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden relative transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all`}
                  >
                    <service.icon className="text-white" size={28} />
                  </div>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-green-700 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed pb-5">
                  {service.description}
                </CardDescription>
              </CardContent>
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
              ></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
