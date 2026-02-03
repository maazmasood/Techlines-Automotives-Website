'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function ServicesPage() {
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
              <Link href="/#services" className="text-sm hover:text-primary transition-colors">Services</Link>
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

          {isOpen && (
            <div className="md:hidden pb-4 space-y-4">
              <Link href="/#services" className="block text-sm hover:text-primary transition-colors">Services</Link>
              <Link href="/services" className="block text-sm hover:text-primary transition-colors">Products</Link>
              <Link href="/contact" className="block text-sm hover:text-primary transition-colors">Contact</Link>
              <Button asChild variant="default" className="w-full">
                <Link href="/contact">Get Support</Link>
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary hover:text-primary/80">Home</Link>
            <ChevronRight size={16} className="text-foreground/50" />
            <span className="text-foreground/70">Services & Products</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Professional Diagnostic Solutions
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Comprehensive range of OEM diagnostic tools, software, and support services for automotive professionals worldwide.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Service Categories</h2>

          <div className="space-y-12">
            {/* BMW Services */}
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🚙</div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">BMW Solutions</h3>
                  <p className="text-foreground/70">Complete BMW diagnostic and coding ecosystem</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-foreground/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> ISPI & ISTA Online</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> ISTA+ BMW System</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> Esys & EsysPlus Online</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> NCD 2.0 Secure</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> SMG Retrofit</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> FSC Code Generation</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> CarPlay Wireless</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> Map Updates</li>
              </ul>
            </Card>

            {/* Mercedes Services */}
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🏎️</div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">Mercedes-Benz Solutions</h3>
                  <p className="text-foreground/70">Advanced diagnostics and coding for all Mercedes platforms</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-foreground/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> Xentry Diagnosis</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> DTS Monaco 9.0.2</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> SCN Online</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> Map PIN Code</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> NTG5.x to NTG6 Upgrade</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> AMG Menu Activation</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> Air Suspension Control</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> Anti-theft PIN</li>
              </ul>
            </Card>


            {/* Toyota Services */}

            <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🚗</div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">Toyota Solutions</h3>
                  <p className="text-foreground/70">Complete Toyota diagnostic and coding ecosystem</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-foreground/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> TIS 2024</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> </li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> </li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> </li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> </li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> </li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> </li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> </li>
              </ul>
            </Card>


            {/* Porsche Services */}
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">⚡</div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">Porsche Solutions</h3>
                  <p className="text-foreground/70">Premium Porsche diagnostics and programming</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-foreground/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> PIWIS Tester 2024</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> PPN Remote</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> PCM6 Programming</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> Sport Chrono Enable</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> CarPlay Wireless</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> Feature Activation</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> Performance Tuning</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> Retrofit Integration</li>
              </ul>
            </Card>

            {/* JLR Services */}
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🛡️</div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">Jaguar & Land Rover Solutions</h3>
                  <p className="text-foreground/70">Engineering-level support for JLR vehicles</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-foreground/80">
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> JET Master Token</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> TOPIx Remote</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> CCF Tools Editor</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> DOIP Pathfinder</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> Key Programming</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> Module Coding</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> VBF AsBuilt File</li>
                <li className="flex items-center gap-2"><ChevronRight size={16} className="text-accent" /> Engineering Master</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Additional Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'CarPlay & Android Auto',
                description: 'Wireless and wired CarPlay/Android Auto activation for modern infotainment systems.',
                icon: '📱'
              },
              {
                title: 'ECU Performance',
                description: 'Professional chip tuning with DIMSport partnership. Safe performance optimization.',
                icon: '⚙️'
              },
              {
                title: 'Spare Parts',
                description: 'OEM retrofit parts, wiring harness, and technical manuals with coding support.',
                icon: '📦'
              },
              {
                title: 'Software Updates',
                description: 'Navigation updates, platform updates, and regional system conversions.',
                icon: '💾'
              },
              {
                title: 'Training & Support',
                description: '24/7 remote support via TeamViewer. Technical training and troubleshooting.',
                icon: '👨‍🏫'
              },
              {
                title: 'Diagnostic Testing',
                description: 'Complete vehicle diagnostics, module testing, and system health checks.',
                icon: '🔍'
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact our team for product information, pricing, or to schedule a demo of our diagnostic solutions.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link href="/contact">Schedule a Demo</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg text-primary mb-4">TechLine Automotives</h3>
              <p className="text-foreground/60 text-sm">Professional automotive diagnostic and programming solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/services" className="hover:text-primary transition-colors">BMW Solutions</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Mercedes Solutions</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Porsche Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
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
              © 2025 TechLine Automotives. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
