import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ClipboardList,
  Wind,
  Flame,
  Droplet,
  CheckCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function PrakritiAssessment() {
  const doshas = [
    {
      icon: Wind,
      name: "Vata",
      element: "Air & Space",
      description: "Movement, creativity, and flexibility",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Flame,
      name: "Pitta",
      element: "Fire & Water",
      description: "Transformation, intelligence, and metabolism",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Droplet,
      name: "Kapha",
      element: "Earth & Water",
      description: "Structure, stability, and nourishment",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
    },
  ];

  const benefits = [
    "Understand your unique body constitution (Prakriti)",
    "Identify current imbalances (Vikriti)",
    "Get personalized diet recommendations",
    "Receive customized lifestyle suggestions",
    "Discover suitable Ayurvedic treatments",
    "Learn about your strengths and tendencies",
  ];

  const handleFormClick = () => {
    // Replace this URL with your actual Google Form link
    // Example: window.open('https://forms.gle/YOUR_FORM_ID', '_blank');
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfSr7eVWbBR_i9ZNlj7xw1YaoDYUaMSEzY0e0LFLE6-matZuA/viewform?usp=sharing&ouid=105114454375095617855";
    window.open(googleFormUrl, "_blank");
  };

  return (
    <section
      id="prakriti"
      className="py-20 bg-gradient-to-br from-white via-amber-50 to-green-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm mb-4 shadow-md">
            <ClipboardList size={16} className="text-amber-600" />
            <span className="font-semibold">Know Your Dosha</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Prakriti{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Assessment
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover your unique Ayurvedic body constitution through our
            comprehensive Prakriti Assessment. Understanding your Prakriti is
            the foundation of personalized Ayurvedic treatment and optimal
            health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Sparkles className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      What is Prakriti?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Prakriti is your unique Ayurvedic body-mind constitution
                      determined at conception. It's a combination of three
                      fundamental energies or Doshas:{" "}
                      <span className="font-semibold text-blue-600">Vata</span>,
                      <span className="font-semibold text-orange-600">
                        {" "}
                        Pitta
                      </span>
                      , and{" "}
                      <span className="font-semibold text-green-600">
                        {" "}
                        Kapha
                      </span>
                      . Each person has a unique balance of these doshas that
                      influences physical characteristics, mental tendencies,
                      and susceptibility to health issues.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {doshas.map((dosha, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-lg ${dosha.bgColor} hover:shadow-xl transition-all transform hover:-translate-y-1 group`}
                >
                  <CardContent className="py-4 px-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${dosha.color} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <dosha.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg">
                          {dosha.name} Dosha
                        </h4>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">{dosha.element}</span>{" "}
                          - {dosha.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-green-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition"></div>
              <Card className="relative border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  }}
                ></div>
                <CardContent className="py-10 px-8 relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                    <ClipboardList className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Take Your Prakriti Assessment
                  </h3>
                  <p className="text-green-50 mb-6 leading-relaxed">
                    Complete our detailed questionnaire to discover your unique
                    Ayurvedic constitution. This assessment takes only 5-7
                    minutes and will help Dr. Harsita Devi provide you with
                    personalized treatment recommendations.
                  </p>

                  <div className="space-y-3 mb-8">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 text-green-50"
                      >
                        <CheckCircle
                          className="text-amber-300 flex-shrink-0 mt-0.5"
                          size={18}
                        />
                        <span className="text-sm leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    onClick={handleFormClick}
                    className="w-full bg-white text-green-700 hover:bg-green-50 py-6 text-lg shadow-xl transform hover:-translate-y-1 transition-all"
                  >
                    <ExternalLink className="mr-2" size={20} />
                    Start Assessment Now
                  </Button>

                  <p className="text-center text-green-100 text-sm mt-4">
                    ✓ Free Assessment • ✓ Takes 5-7 Minutes • ✓ Instant Results
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1650046825506-8901c4b837b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGFzc2Vzc21lbnQlMjBmb3JtJTIwcXVlc3Rpb25uYWlyZXxlbnwxfHx8fDE3NzE4MjE4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Prakriti Assessment"
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <p className="text-white font-semibold text-lg">Personalized Ayurvedic Guidance</p>
                <p className="text-green-100 text-sm">Based on your unique constitution</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all transform hover:-translate-y-1">
            <CardContent className="pt-6 pb-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                Comprehensive Questions
              </h4>
              <p className="text-sm text-gray-600">
                Detailed questionnaire covering physical, mental, and emotional
                characteristics
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all transform hover:-translate-y-1">
            <CardContent className="pt-6 pb-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                Accurate Analysis
              </h4>
              <p className="text-sm text-gray-600">
                Get precise dosha identification based on authentic Ayurvedic
                principles
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-all transform hover:-translate-y-1">
            <CardContent className="pt-6 pb-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">💚</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Expert Review</h4>
              <p className="text-sm text-gray-600">
                Dr. Harsita Devi will review your assessment and provide
                personalized guidance
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
