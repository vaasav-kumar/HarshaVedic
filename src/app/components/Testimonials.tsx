import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      condition: "Chronic Migraine",
      text: "After years of suffering from migraines, Dr. Harsita Devi's Ayurvedic treatment gave me relief within weeks. Her personalized approach made all the difference.",
      rating: 5,
      image: "👩",
    },
    {
      name: "Rajesh Kumar",
      condition: "Digestive Issues",
      text: "The Panchakarma detox program was life-changing. I feel energized and my digestive problems have completely resolved. Highly recommend!",
      rating: 5,
      image: "👨",
    },
    {
      name: "Anita Desai",
      condition: "Stress & Anxiety",
      text: "The holistic treatments and Dr. Harsita's compassionate care helped me overcome anxiety naturally. I'm grateful for the online consultation option.",
      rating: 5,
      image: "👩‍🦰",
    },
    {
      name: "Vikram Singh",
      condition: "Joint Pain",
      text: "My arthritis pain reduced significantly with the Ayurvedic therapies. The herbal oils and massages work wonders. Thank you, Harsha Vedic!",
      rating: 5,
      image: "👴",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-amber-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm mb-4 shadow-md">
            <Star className="text-amber-500 fill-amber-500" size={16} />
            <span className="font-semibold">Patient Stories</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Healing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Testimonials
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who found healing through Ayurveda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative transform hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-amber-500"></div>
              <CardContent className="pt-8 pb-6 px-6">
                <Quote className="text-green-200 mb-4" size={32} />
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-amber-500 fill-amber-500"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-green-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-2xl shadow-md">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-green-600">
                      {testimonial.condition}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-3xl shadow-xl border border-green-100">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-green-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700">100+</div>
              <div className="text-sm text-gray-600">Happy Patients</div>
            </div>
            <div className="h-12 w-px bg-green-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
