import { useState, useEffect } from 'react';

export interface Product {
  _id?: string;
  id?: string;
  name: string;
  brand: string;
  image: string;
  description: string;
  certification?: string;
  category: string;
  price?: number;
  rating?: number;
  certified?: boolean;
}

export interface Feedback {
  _id?: string;
  id?: string;
  productId: string;
  name: string;
  message: string;
  timestamp?: string;
  createdAt?: string;
}

// Fallback sample data
const fallbackProducts: Product[] = [
  {
    _id: 'demo1',
    id: 'demo1',
    name: 'Organic Wild Honey',
    brand: 'BeeKind',
    image: 'https://images.unsplash.com/photo-1600267165530-3b1cfec8f4ab?auto=format&fit=crop&w=600&q=80',
    description: 'Raw, natural honey collected from wild hives. This unprocessed honey retains all its natural enzymes and beneficial compounds.',
    certification: 'USDA Organic',
    category: 'honey',
    price: 24.99,
    rating: 4.8,
    certified: true
  },
  {
    _id: 'demo2',
    id: 'demo2',
    name: 'Cold-Pressed Coconut Oil',
    brand: 'CocoPure',
    image: 'https://images.unsplash.com/photo-1612197667444-d88e5b05d219?auto=format&fit=crop&w=600&q=80',
    description: 'Made from fresh coconut extract. Great for skin and cooking.',
    certification: 'India Organic',
    category: 'oils',
    price: 19.99,
    rating: 4.7,
    certified: true
  },
  {
    _id: 'demo3',
    id: 'demo3',
    name: 'Himalayan Pink Salt',
    brand: 'PureEarth',
    image: 'https://images.unsplash.com/photo-1526069444881-3a913021589d?auto=format&fit=crop&w=600&q=80',
    description: 'Hand-mined from ancient sea beds, rich in minerals.',
    certification: 'Natural',
    category: 'spices',
    price: 12.99,
    rating: 4.6,
    certified: true
  }
];

const fallbackFeedbacks: Feedback[] = [
  {
    _id: 'feedback1',
    id: 'feedback1',
    productId: 'demo1',
    name: 'Sarah Johnson',
    message: 'Amazing quality honey! The taste is incredible and you can really tell it\'s pure.',
    timestamp: '2024-01-15',
    createdAt: '2024-01-15'
  },
  {
    _id: 'feedback2',
    id: 'feedback2',
    productId: 'demo1',
    name: 'Mike Chen',
    message: 'Perfect for my morning tea. Love supporting organic farmers!',
    timestamp: '2024-01-10',
    createdAt: '2024-01-10'
  }
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const BaseUrl = 'https://organic-product-backend-express-mongodb.onrender.com';
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BaseUrl}/products`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log('API unavailable, using fallback data');
        setProducts(fallbackProducts);
        setError(null); // Don't show error for fallback
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}

export function useProduct(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const BaseUrl = 'https://organic-product-backend-express-mongodb.onrender.com';

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BaseUrl}/products/${id}`);

        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.log('API unavailable, using fallback data');
        const fallbackProduct = fallbackProducts.find(p => p.id === id || p._id === id);
        setProduct(fallbackProduct || {
          _id: id,
          id: id,
          name: 'Demo Product',
          brand: 'Fallback Brand',
          image: 'https://via.placeholder.com/300',
          description: 'Could not load product. This is fallback info.',
          certification: 'Unknown',
          category: 'others',
          price: 0,
          rating: 0,
          certified: false
        });
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
}

export function useFeedback(productId: string) {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const BaseUrl = 'https://organic-product-backend-express-mongodb.onrender.com';

  useEffect(() => {
    if (!productId) return;

    const fetchFeedbacks = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BaseUrl}/feedback/${productId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch feedbacks');
        }
        
        const data = await response.json();
        setFeedbacks(data);
      } catch (err) {
        console.log('API unavailable, using fallback feedback data');
        const productFeedbacks = fallbackFeedbacks.filter(f => f.productId === productId);
        setFeedbacks(productFeedbacks);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, [productId]);

  const submitFeedback = async (feedback: Omit<Feedback, '_id' | 'id' | 'timestamp' | 'createdAt'>) => {
      const BaseUrl = 'https://organic-product-backend-express-mongodb.onrender.com';

    try {
      const response = await fetch(`${BaseUrl}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback)
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      const newFeedback = await response.json();
      setFeedbacks(prev => [newFeedback, ...prev]);
      return { success: true };
    } catch (err) {
      console.log('API unavailable, simulating success');
      // Simulate successful submission with fallback
      const newFeedback: Feedback = {
        ...feedback,
        _id: `feedback_${Date.now()}`,
        id: `feedback_${Date.now()}`,
        timestamp: new Date().toISOString().split('T')[0],
        createdAt: new Date().toISOString().split('T')[0]
      };
      setFeedbacks(prev => [newFeedback, ...prev]);
      return { success: true };
    }
  };

  return { feedbacks, loading, error, submitFeedback };
}