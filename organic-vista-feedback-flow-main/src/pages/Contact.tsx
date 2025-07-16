import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, Send, Leaf, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🌱",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 via-background to-earth-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-4 text-forest-600 hover:text-forest-700"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Garden
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4"
            >
              <MessageCircle size={24} className="text-accent" />
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-forest-800 mb-6">
              Get in Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl lg:text-2xl text-forest-600 max-w-3xl mx-auto leading-relaxed"
          >
            We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, 
            our garden is always open to meaningful conversations.
          </motion.p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-serif font-bold text-forest-800 mb-8">
              Connect With Us
            </h2>

            {[
              {
                icon: Mail,
                title: "Email Us",
                content: "hello@organicvista.com",
                description: "Send us a message anytime"
              },
              {
                icon: Phone,
                title: "Call Us",
                content: "+1 (555) 123-4567",
                description: "Mon-Fri, 9AM-6PM EST"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "123 Garden Street, Green Valley, CA 90210",
                description: "Our sustainable headquarters"
              },
              {
                icon: Clock,
                title: "Response Time",
                content: "Within 24 hours",
                description: "We value your time"
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-forest-600 rounded-xl flex items-center justify-center text-white shadow-lg"
                >
                  <contact.icon size={20} />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-forest-800 mb-1">{contact.title}</h3>
                  <p className="text-forest-700 font-medium mb-1">{contact.content}</p>
                  <p className="text-forest-500 text-sm">{contact.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-white/20 shadow-xl rounded-3xl">
              <h2 className="text-3xl font-serif font-bold text-forest-800 mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/70 border-forest-200 focus:border-primary focus:ring-primary rounded-xl"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/70 border-forest-200 focus:border-primary focus:ring-primary rounded-xl"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/70 border-forest-200 focus:border-primary focus:ring-primary rounded-xl"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-white/70 border-forest-200 focus:border-primary focus:ring-primary rounded-xl resize-none"
                    placeholder="Tell us more about how we can help you..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-forest-600 hover:from-primary/90 hover:to-forest-600/90 text-white rounded-xl shadow-lg"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Leaf size={16} className="ml-2" />
                    </motion.div>
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold text-forest-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-forest-600 max-w-2xl mx-auto">
            Quick answers to common questions about our organic products and services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              question: "Are all your products certified organic?",
              answer: "Yes! Every product in our garden is certified organic by recognized certification bodies, ensuring the highest standards of purity and sustainability."
            },
            {
              question: "How do you ensure product freshness?",
              answer: "We work directly with organic farms and producers, maintaining cold-chain logistics and quick turnover to guarantee maximum freshness upon delivery."
            },
            {
              question: "What's your return policy?",
              answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, we'll make it right with a full refund or replacement."
            },
            {
              question: "Do you offer bulk discounts?",
              answer: "Absolutely! We offer tiered discounts for bulk orders and have special pricing for restaurants, cafes, and other businesses focused on organic offerings."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
            >
              <h3 className="font-semibold text-forest-800 mb-3 text-lg">
                {faq.question}
              </h3>
              <p className="text-forest-600 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;