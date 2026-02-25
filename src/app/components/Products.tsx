import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingBag, Star, Sparkles, Phone } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export function Products() {
  const products = [
    {
      name: 'Ayurvedic Hair Oil',
      description: 'Enriched with Bhringraj, Amla & 15 potent herbs for strong, lustrous hair',
      price: '₹399',
      image: 'https://images.unsplash.com/photo-1608571899793-a1c0c27a7555?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBoYWlyJTIwb2lsJTIwYm90dGxlJTIwbmF0dXJhbHxlbnwxfHx8fDE3NzE4MjEzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.8,
      reviews: 124,
      badge: 'Bestseller',
      color: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Herbal Neem Soap',
      description: 'Pure neem & turmeric soap for clear, glowing skin. 100% natural ingredients',
      price: '₹149',
      image: 'https://images.unsplash.com/photo-1758534272283-bbbeacf06b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGVyYmFsJTIwc29hcCUyMG9yZ2FuaWN8ZW58MXx8fHwxNzcxODIxMzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.9,
      reviews: 203,
      badge: 'Top Rated',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Kumkumadi Face Cream',
      description: 'Saffron-infused night cream for radiant, youthful complexion',
      price: '₹599',
      image: 'https://images.unsplash.com/photo-1760488029475-41ff1eaa904b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBmYWNlJTIwY3JlYW0lMjBuYXR1cmFsJTIwc2tpbmNhcmV8ZW58MXx8fHwxNzcxODIxMzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.7,
      reviews: 89,
      badge: 'Premium',
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Ayurvedic Massage Oil',
      description: 'Relaxing blend of sesame oil with Ashwagandha for stress relief',
      price: '₹449',
      image: 'https://images.unsplash.com/photo-1600493570893-3d5c65dce3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjBtYXNzYWdlJTIwb2lsJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzcxODIxMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.6,
      reviews: 67,
      badge: 'New',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Herbal Wellness Tea',
      description: 'Immunity-boosting blend of Tulsi, Ginger & traditional herbs',
      price: '₹299',
      image: 'https://images.unsplash.com/photo-1547965010-3189f704431b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjB0ZWElMjBheXVydmVkaWMlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzE4MjEzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.9,
      reviews: 156,
      badge: 'Popular',
      color: 'from-lime-500 to-green-600'
    },
    {
      name: 'Natural Body Lotion',
      description: 'Deep moisturizing lotion with Aloe Vera & Sandalwood',
      price: '₹349',
      image: 'https://images.unsplash.com/photo-1762760625095-a8401a4206ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYm9keSUyMGxvdGlvbiUyMG9yZ2FuaWN8ZW58MXx8fHwxNzcxODIxMzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.7,
      reviews: 98,
      badge: 'Trending',
      color: 'from-rose-500 to-pink-600'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-amber-50 via-white to-green-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm mb-4 shadow-md">
            <ShoppingBag size={16} className="text-green-600" />
            <span className="font-semibold">Ayurvedic Products</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Natural{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Ayurvedic Products
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            100% natural, handcrafted products made with authentic Ayurvedic ingredients. 
            Experience the power of nature in every product
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden relative transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Product Image */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${product.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20 flex items-center gap-1`}>
                  <Sparkles size={14} />
                  {product.badge}
                </div>
                
                {/* Rating */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                    <Star className="text-amber-500 fill-amber-500" size={16} />
                    <span className="font-bold text-gray-900">{product.rating}</span>
                    <span className="text-xs text-gray-600">({product.reviews})</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="font-bold text-green-700 text-lg">{product.price}</span>
                  </div>
                </div>
              </div>

              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg"
                    onClick={scrollToContact}
                  >
                    <ShoppingBag size={16} className="mr-2" />
                    Order Now
                  </Button>
                </div>
              </CardContent>
              
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="relative group mt-16">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition"></div>
          <Card className="relative border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }}></div>
            <CardContent className="py-12 px-8 text-center relative z-10">
              <div className="max-w-3xl mx-auto">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <ShoppingBag className="text-white" size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Want to Order Our Products?
                </h3>
                <p className="text-green-50 text-lg mb-8 leading-relaxed">
                  Call us to place your order or get detailed information about our product range. 
                  We deliver authentic Ayurvedic products across India with special care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="tel:7904094949">
                    <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-6 text-lg shadow-xl transform hover:-translate-y-1 transition-all">
                      <Phone className="mr-2" size={20} />
                      Call 7904094949
                    </Button>
                  </a>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm transform hover:-translate-y-1 transition-all"
                    onClick={scrollToContact}
                  >
                    View Contact Details
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-green-50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                    <span>100% Natural</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                    <span>Handcrafted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                    <span>Certified Quality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                    <span>Pan India Delivery</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
