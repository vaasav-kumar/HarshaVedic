import { useState } from 'react';
import { Video, Clock, CheckCircle, Calendar, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function OnlineConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    concern: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you! We will contact you shortly to confirm your consultation.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      concern: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: Video,
      title: 'Video Consultation',
      description: 'Face-to-face consultation via secure video call',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Book appointments at your convenient time',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: CheckCircle,
      title: 'Expert Guidance',
      description: 'Get personalized treatment plans from certified doctors',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Calendar,
      title: 'Follow-up Support',
      description: 'Ongoing care and monitoring of your progress',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <section id="consultation" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #16a34a 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm mb-4 shadow-md">
            <Video size={16} className="text-green-600" />
            <span className="font-semibold">Online Consultations</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Consult from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Anywhere
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Can't visit in person? No problem! Get expert Ayurvedic consultation 
            from <span className="font-semibold text-green-700">Dr. Harsita Devi</span> through our online platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition`}></div>
                  <div className="relative bg-gradient-to-br from-green-50 to-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-green-100">
                    <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md mb-3`}>
                      <benefit.icon className="text-white" size={24} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-amber-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={16} />
                  </span>
                  Consultation Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { step: 1, title: 'Book Your Slot', desc: 'Fill the form with your details and preferred time' },
                  { step: 2, title: 'Receive Confirmation', desc: 'Get video call link and appointment details via email' },
                  { step: 3, title: 'Join Video Call', desc: 'Connect with Dr. Harsita Devi at scheduled time' },
                  { step: 4, title: 'Get Treatment Plan', desc: 'Receive personalized care plan and prescriptions' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-2xl border-0 overflow-hidden sticky top-24">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-700 to-green-800"></div>
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }}></div>
              <CardHeader className="relative text-white">
                <CardTitle className="text-2xl">Book Your Consultation</CardTitle>
                <CardDescription className="text-green-50">
                  Fill in your details and we'll get back to you
                </CardDescription>
              </CardHeader>
            </div>
            <CardContent className="pt-6 pb-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-2 border-green-200 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="mt-2 border-green-200 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your contact number"
                    className="mt-2 border-green-200 focus:border-green-500"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-gray-700 font-semibold">Preferred Date *</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-2 border-green-200 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-gray-700 font-semibold">Preferred Time *</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="mt-2 border-green-200 focus:border-green-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="concern" className="text-gray-700 font-semibold">Health Concern</Label>
                  <Textarea
                    id="concern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                    placeholder="Briefly describe your health concern..."
                    rows={4}
                    className="mt-2 border-green-200 focus:border-green-500"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 py-6 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                  <Send className="mr-2" size={20} />
                  Schedule Consultation
                </Button>
                <p className="text-center text-sm text-gray-500 pt-2">
                  Or call us directly at <a href="tel:7904094949" className="text-green-700 font-semibold hover:underline">7904094949</a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}