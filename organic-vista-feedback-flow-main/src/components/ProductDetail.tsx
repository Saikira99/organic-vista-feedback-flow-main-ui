import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { FeedbackModal } from '@/components/FeedbackModal';
import { ArrowLeft, MessageCircle, Star, Sparkles, Loader } from 'lucide-react';
import { useFeedback, Product } from '@/hooks/useApi';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const productId = product.id || product._id || '';
  const { feedbacks, loading: feedbackLoading, submitFeedback } = useFeedback(productId);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleFeedbackSubmit = async (feedback: { name: string; message: string }) => {
    const result = await submitFeedback({
      productId,
      name: feedback.name,
      message: feedback.message
    });
    
    if (result.success) {
      setShowFeedbackModal(false);
    }
    
    return result;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6 relative z-10">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 group hover:bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Products
        </Button>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="space-y-6">
            <Card className="glass-card overflow-hidden group">
              <div className="relative p-8 bg-gradient-to-br from-white/30 to-accent/20">
                {/* 3D Image Container */}
                <div className="relative aspect-square flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  {/* Loading State */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Loader className="h-12 w-12 animate-spin text-primary" />
                    </div>
                  )}
                  
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-contain transition-all duration-700 ${
                      imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                  
                  {/* Floating Sparkles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <Sparkles
                        key={i}
                        className="absolute text-primary/30 animate-pulse"
                        size={16}
                        style={{
                          left: `${20 + i * 20}%`,
                          top: `${15 + i * 15}%`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </Card>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-3">
                {product.certified && (
                  <Badge className="bg-success/90 text-success-foreground animate-fade-in">
                    <Sparkles size={14} className="mr-1" />
                    Certified Organic
                  </Badge>
                )}
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent animate-fade-in">
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  by {product.brand}
                </p>
              </div>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`transition-all duration-300 ${
                          i < Math.floor(product.rating!) 
                            ? 'text-warning fill-current' 
                            : 'text-muted-foreground/30'
                        }`}
                        style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">{product.rating}/5</span>
                  <span className="text-muted-foreground">
                    ({Math.floor(Math.random() * 200) + 50} reviews)
                  </span>
                </div>
              )}

              {/* Price */}
              {product.price && (
                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <span className="text-4xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              )}

              {/* Description */}
              <Card className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold mb-3">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-16 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Customer Feedback</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what other customers are saying about this product
            </p>
          </div>

          {/* Feedback Cards */}
          <div className="space-y-6">
            {feedbackLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : feedbacks.length > 0 ? (
              <div className="grid gap-6">
                {feedbacks.map((feedback, index) => (
                  <Card 
                    key={feedback._id || feedback.id || index}
                    className="glass-card p-6 animate-fade-in hover:scale-[1.02] transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-semibold">
                        {feedback.name.charAt(0).toUpperCase()}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{feedback.name}</h4>
                          <span className="text-sm text-muted-foreground">
                            {feedback.timestamp || feedback.createdAt}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{feedback.message}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="glass-card p-12 text-center">
                <MessageCircle size={48} className="mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No feedback yet</h3>
                <p className="text-muted-foreground">
                  Be the first to share your experience with this product!
                </p>
              </Card>
            )}
          </div>
        </div>

      </div>

      {/* Floating Feedback Button */}
      <Button
        onClick={() => setShowFeedbackModal(true)}
        className="floating-button group"
      >
        <MessageCircle className="mr-2 group-hover:scale-110 transition-transform duration-300" />
        Share Feedback
      </Button>

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        onSubmit={handleFeedbackSubmit}
        productName={product.name}
      />
    </div>
  );
}