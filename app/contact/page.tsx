'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState, FormEvent, ChangeEvent } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

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
            <span className="text-foreground/70">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Get in Touch</h1>
          <p className="text-xl text-foreground/70 max-w-3xl">
            Have questions about our services? Need technical support? Our expert team is here to help. Reach out today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Phone size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone Support</h3>
              <p className="text-foreground/70 mb-4">Call us for immediate assistance</p>
              <a href="tel:+1234567890" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                +1 (234) 567-890
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Mail size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-foreground/70 mb-4">Send us your inquiries anytime</p>
              <a href="mailto:support@techlineautomotives.com" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                support@techlineautomotives.com
              </a>
            </Card>


          </div>

          <Card className="p-8 bg-card border-2 border-primary/20">
            <div className="flex items-start gap-4">
              <Clock size={24} className="text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Business Hours</h3>
                <p className="text-foreground/70">Monday - Saturday</p>
                <p className="text-foreground/70">09:00 AM - 05:00 PM</p>
                <p className="text-accent font-semibold mt-3">24/7 Remote Support Available</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Form 
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Send Us a Message</h2>

          {submitted && (
            <Card className="p-6 mb-8 bg-accent/10 border-accent">
              <p className="text-center text-foreground">
                ✓ Thank you for your message! We'll get back to you within 24 hours.
              </p>
            </Card>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address *</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (000) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject *</label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-background text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button type="submit" size="lg" className="w-full font-semibold">
              Send Message
            </Button>

            <p className="text-center text-foreground/60 text-sm">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </form>
        </div>
      </section>
*/}
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, bank transfers, and PayPal. Contact us for custom payment arrangements.'
              },
              {
                q: 'Do you provide technical support after purchase?',
                a: 'Yes, we offer 24/7 remote support via TeamViewer for all our products and services. Technical assistance is included with your purchase.'
              },
              {
                q: 'How long does remote support typically take?',
                a: 'Most issues are resolved within 30-60 minutes. Complex diagnostics may take longer depending on the vehicle system involved.'
              },
              {
                q: 'Can you support vehicles outside of Europe?',
                a: 'Yes! We support vehicles worldwide. We have expertise with North American, Asian, and European automotive brands.'
              },
              {
                q: 'What is your typical response time?',
                a: 'We aim to respond to all inquiries within 2 hours during business hours, and typically the same day on weekends.'
              },
              {
                q: 'Do you offer training for new technicians?',
                a: 'Absolutely. We provide comprehensive training on all diagnostic tools and coding procedures. Contact us for training packages.'
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-3">{item.q}</h3>
                <p className="text-foreground/70">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl text-white/90 mb-8">
            Call our support team or use our live chat for instant help with your automotive diagnostic needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <a href="tel:+1234567890">Call Now</a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-semibold">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
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
                <li><Link href="/services" className="hover:text-primary transition-colors">Diagnostic Tools</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Coding Services</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">OEM Retrofits</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Support</Link></li>
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
