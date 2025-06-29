import { Heart, PawPrint as Paw, Users, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Paw className="h-8 w-8 text-cute-orange" />
              <h1 className="text-2xl font-bold text-gray-900">Stray Kind</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-cute-orange transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-cute-orange transition-colors">Services</a>
              <a href="#adopt" className="text-gray-700 hover:text-cute-orange transition-colors">Adopt</a>
              <a href="#contact" className="text-gray-700 hover:text-cute-orange transition-colors">Contact</a>
            </nav>
            <Button className="bg-cute-orange hover:bg-orange-600">
              Donate Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Every Stray Deserves <span className="text-cute-orange">Love</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We rescue, rehabilitate, and rehome stray animals, giving them a second chance at happiness. 
            Join us in making a difference, one paw at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cute-orange hover:bg-orange-600">
              <Heart className="mr-2 h-5 w-5" />
              Adopt a Pet
            </Button>
            <Button size="lg" variant="outline" className="border-cute-teal text-cute-teal hover:bg-cute-teal hover:text-white">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-cute-orange mb-2">2,500+</div>
              <div className="text-gray-600">Animals Rescued</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-cute-teal mb-2">1,800+</div>
              <div className="text-gray-600">Successful Adoptions</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-cute-green mb-2">500+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive care for stray animals through various programs and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-cute-pink mb-4" />
                <CardTitle>Rescue Operations</CardTitle>
                <CardDescription>
                  24/7 emergency rescue services for injured and abandoned animals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Paw className="h-12 w-12 text-cute-blue mb-4" />
                <CardTitle>Medical Care</CardTitle>
                <CardDescription>
                  Complete veterinary care including vaccinations, treatments, and surgeries
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-cute-purple mb-4" />
                <CardTitle>Adoption Program</CardTitle>
                <CardDescription>
                  Matching loving families with rescued animals for forever homes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cute-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Whether you want to adopt, volunteer, or donate, every action helps save lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-cute-orange hover:bg-gray-100">
              Get Involved Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cute-orange">
              <MapPin className="mr-2 h-5 w-5" />
              Find Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Paw className="h-6 w-6 text-cute-orange" />
                <span className="text-xl font-bold">Stray Kind</span>
              </div>
              <p className="text-gray-400">
                Dedicated to rescuing and rehoming stray animals with love and care.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#adopt" className="hover:text-white transition-colors">Adopt</a></li>
                <li><a href="#volunteer" className="hover:text-white transition-colors">Volunteer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 info@straykind.org</p>
                <p>📞 (555) 123-4567</p>
                <p>📍 123 Animal Rescue St, City, State 12345</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Stray Kind. All rights reserved. Made with ❤️ for animals in need.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}