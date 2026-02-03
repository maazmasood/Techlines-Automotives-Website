'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-xl text-primary">
              TechLine Automotives
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#services" className="text-sm hover:text-primary transition-colors">Services</Link>
              <Link href="/services" className="text-sm hover:text-primary transition-colors">Products</Link>
              <Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
              <Button asChild variant="default" size="sm">
                <Link href="/contact">Get Support</Link>
              </Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-4">
              <Link href="#services" className="block text-sm hover:text-primary transition-colors">Services</Link>
              <Link href="/services" className="block text-sm hover:text-primary transition-colors">Products</Link>
              <Link href="/contact" className="block text-sm hover:text-primary transition-colors">Contact</Link>
              <Button asChild variant="default" className="w-full">
                <Link href="/contact">Get Support</Link>
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Professional Automotive Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                OEM Diagnostic & <span className="text-primary">Programming</span> Excellence
              </h1>
              <p className="text-xl text-foreground/70 text-balance">
                20+ years of aftermarket technical support. Dealer-level diagnostic coding, programming, and OEM retrofits for BMW, Mercedes, Porsche, Land Rover, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/contact">Request Remote Support</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-64 md:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden border border-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary/30 mb-4">⚙️</div>
                  <p className="text-foreground/50 font-semibold">Advanced Diagnostics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-foreground/70 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">9K+</div>
              <p className="text-foreground/70 text-sm">Workshops Serviced</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1300+</div>
              <p className="text-foreground/70 text-sm">Products & Services</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3700+</div>
              <p className="text-foreground/70 text-sm">Annual Transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Services</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive automotive diagnostic and programming solutions for professional workshops and dealerships worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔧',
                title: 'OEM Diagnostic',
                description: 'Dealer-level diagnostic tools and software for BMW, Mercedes, Porsche, JLR, and more. Professional technical support included.'
              },
              {
                icon: '💻',
                title: 'Coding & Programming',
                description: 'Advanced ECU coding, immobilizer programming, and feature activation with remote support via TeamViewer.'
              },
              {
                icon: '🎨',
                title: 'OEM Retrofits',
                description: 'Transform your vehicle with OEM-level upgrades: CarPlay wireless, audio systems, lighting, and infotainment options.'
              },
              {
                icon: '⚡',
                title: 'ECU Performance',
                description: 'Professional ECU chip tuning solutions in partnership with DIMSport Asia. Optimize engine performance safely.'
              },
              {
                icon: '🛠️',
                title: 'Module Programming',
                description: 'Front-end, rear-end, VTS module programming and key programming with immobilizer unlock capabilities.'
              },
              {
                icon: '🌍',
                title: 'Remote Support',
                description: '24/7 internet-based remote support for system installation, updates, troubleshooting, and technical guidance.'
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Support Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Brands We Support</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                brand: 'BMW',
                tools: 'ISTA+, Esys, NCD, ISPI',
                logo: '/brands/bmw-logo-2020-gray-download.png'
              },
              {
                brand: 'Mercedes-Benz',
                tools: 'Xentry, DTS Monaco, SCN',
                logo: '/brands/mercedes-logo-15875.png'
              },
              {
                brand: 'Toyota',
                tools: 'Toyota Diagnostic Tools',
                logo: '/brands/toyota-logo-2020-europe-download.png'
              },
              {
                brand: 'Honda',
                tools: 'Honda Diagnostic Tools',
                logo: '/brands/honda-logo-2000-full-download.png'
              },
              {
                brand: 'Porsche',
                tools: 'PIWIS, PPN, PCM6',
                logo: '/brands/porsche-logo-2014-full-download.png'
              },
              {
                brand: 'Jaguar & Land Rover',
                tools: 'TOPIx, JET, CCF Tools',
                logo: '/brands/jaguar-logo-2021-download.png'
              },
              {
                brand: 'Audi & VW',
                tools: 'ODIS, VAS, CarPlay',
                logo: '/brands/audi-logo-2016-download.png'
              },
              {
                brand: 'Tesla',
                tools: 'Diagnostic Tools, System Updates',
                logo: '/brands/tesla-logo-2007-full-download.png'
              }
            ]
              .map((item, index) => (
                <Card key={index} className="p-6 text-center hover:bg-primary/5 transition-colors">
                  {/* image should be in center*/}
                  <div className="flex justify-center">
                    <img src={item.logo} alt={item.brand} className="w-24 h-24" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{item.brand}</h3>
                  <p className="text-sm text-foreground/60">{item.tools}</p>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need Professional Support?</h2>
          <p className="text-xl text-white/90 mb-8 text-balance">
            Get in touch with our expert team for remote assistance, technical guidance, or product inquiries. Available 24/7 for your automotive needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg text-primary mb-4">TechLine Automotives</h3>
              <p className="text-foreground/60 text-sm">Professional automotive diagnostic and programming solutions for global workshops and dealerships.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/services" className="hover:text-primary transition-colors">Diagnostic Tools</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">ECU Tuning</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">OEM Retrofits</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/services" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-foreground/50 text-sm">
              © 2025 TechLine Automotives. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
