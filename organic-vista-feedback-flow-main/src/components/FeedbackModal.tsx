import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Star, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  onSubmit: (feedback: { name: string; message: string }) => Promise<{ success: boolean }>;
}

export function FeedbackModal({ isOpen, onClose, productName, onSubmit }: FeedbackModalProps) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim() || rating === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields and provide a rating.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const result = await onSubmit({ name: name.trim(), message: message.trim() });
      
      if (result?.success !== false) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSuccess(false);
          setName('');
          setMessage('');
          setRating(0);
          onClose();
          toast({
            title: "Feedback Submitted!",
            description: "Thank you for your valuable feedback.",
            variant: "default",
          });
        }, 1500);
      }
    } catch (error) {
      console.error('Failed to submit feedback:', error);
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold">
            Share Your Experience
          </DialogTitle>
          <p className="text-muted-foreground">
            Tell us about <span className="font-medium text-primary">{productName}</span>
          </p>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle size={64} className="mx-auto text-success success-animation" />
            <h3 className="text-xl font-semibold text-success">Thank You!</h3>
            <p className="text-muted-foreground">Your feedback has been submitted successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            {/* Rating */}
            <div className="space-y-3">
              <Label>Rate this product</Label>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-125"
                  >
                    <Star
                      size={28}
                      className={`${
                        star <= rating 
                          ? 'text-warning fill-current' 
                          : 'text-muted-foreground/30 hover:text-warning/50'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <Label htmlFor="feedback-name">Your Name</Label>
              <Input
                id="feedback-name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="glass-input"
                disabled={isSubmitting}
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <Label htmlFor="feedback-message">Your Feedback</Label>
              <Textarea
                id="feedback-message"
                placeholder="Share your thoughts about this product..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="glass-input resize-none"
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <Button
            type="submit"
            onClick={handleSubmit}
            variant="organic"
            size="lg"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-2 
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
            `}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                <span className="text-foreground">Submitting...</span>
              </>
            ) : (
              <>
                <Send size={18} className="shrink-0 text-foreground" />
                <span className="text-foreground">Submit Feedback</span>
              </>
            )}
          </Button>


          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}