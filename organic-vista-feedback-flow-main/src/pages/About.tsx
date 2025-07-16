import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Users, Award, ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

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
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4"
            >
              <Sparkles size={24} className="text-accent" />
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-forest-800 mb-6">
              Our Story
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl lg:text-2xl text-forest-600 max-w-4xl mx-auto leading-relaxed"
          >
            Born from a passion for pure, sustainable living, Organic Vista is more than a marketplace—
            it's a movement towards a healthier, more conscious world.
          </motion.p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-serif font-bold text-center text-forest-800 mb-16"
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Leaf,
              title: "Sustainability",
              description: "Every product we curate supports environmental harmony and regenerative practices.",
              color: "text-forest-600"
            },
            {
              icon: Heart,
              title: "Wellness",
              description: "We believe in nourishing both body and soul with products that promote holistic health.",
              color: "text-accent"
            },
            {
              icon: Users,
              title: "Community",
              description: "Building connections between conscious consumers and ethical producers worldwide.",
              color: "text-primary"
            },
            {
              icon: Award,
              title: "Quality",
              description: "Rigorous standards ensure every item meets our promise of purity and excellence.",
              color: "text-earth-600"
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 ${value.color} mb-6 shadow-lg`}
              >
                <value.icon size={28} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-forest-800 mb-4">{value.title}</h3>
              <p className="text-forest-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-forest-500 to-primary rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                <Leaf size={24} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto opacity-95">
              To create a thriving ecosystem where organic, sustainable products are accessible to all, 
              fostering a world where every choice nurtures both personal health and planetary wellbeing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-serif font-bold text-forest-800 mb-8">
            Join Our Journey
          </h2>
          <p className="text-lg text-forest-600 mb-12 leading-relaxed">
            Every purchase you make is a vote for the kind of world you want to live in. 
            Together, we're cultivating a future where health, sustainability, and consciousness flourish.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="bg-gradient-to-r from-primary to-forest-600 hover:from-primary/90 hover:to-forest-600/90 text-white px-8 py-3 rounded-2xl shadow-lg"
            >
              <Leaf size={20} className="mr-2" />
              Explore Our Garden
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;