import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useState } from 'react';

export default function ProductListingPage() {
    const [products] = useState([
        { id: 1, name: 'Premium Wireless Headphones', price: 199.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', rating: 4.5, reviews: 128, category: 'Electronics' },
        { id: 2, name: 'Smartwatch Pro', price: 299.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500', rating: 4.8, reviews: 95, category: 'Electronics' },
        { id: 3, name: 'Laptop Backpack', price: 79.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500', rating: 4.3, reviews: 234, category: 'Accessories' },
        { id: 4, name: '4K Webcam', price: 149.99, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500', rating: 4.6, reviews: 87, category: 'Electronics' },
        { id: 5, name: 'USB-C Hub', price: 49.99, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500', rating: 4.4, reviews: 156, category: 'Accessories' },
        { id: 6, name: 'Mechanical Keyboard', price: 159.99, image: 'https://images.unsplash.com/photo-1587829191301-4e2e0dcc40e2?w=500', rating: 4.7, reviews: 312, category: 'Accessories' }
    ]);
    const [favorites, setFavorites] = useState([]);
    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]);
    };
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Shop Our Collection</h1>
                <p className="text-gray-600 text-lg">Discover amazing products at great prices</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="card hover:shadow-lg transition">
                        <div className="relative mb-4">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
                            <button onClick={() => toggleFavorite(product.id)} className="absolute top-2 right-2 p-2 bg-white rounded-full shadow">
                                <Heart className={`w-5 h-5 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                            </button>
                            <span className="absolute top-2 left-2 bg-accent text-white px-3 py-1 rounded-full text-sm">{product.category}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                        <div className="flex items-center mb-3">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <span className="text-sm text-gray-600 ml-2">{product.rating} ({product.reviews} reviews)</span>
                        </div>
                        <div className="border-t pt-4 mt-4">
                            <p className="text-3xl font-bold text-blue-600 mb-4">${product.price}</p>
                            <button className="btn-primary w-full flex items-center justify-center gap-2">
                                <ShoppingCart className="w-5 h-5" /> Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}