"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const easing = [0.16, 1, 0.3, 1] as const;

const products = [
  { id: 1, name: "Home Kit 26/27", type: "Official Jersey", price: "Rp 599.000" },
  { id: 2, name: "Away Kit 26/27", type: "Official Jersey", price: "Rp 599.000" },
  { id: 3, name: "Training Top", type: "Merchandise", price: "Rp 349.000" },
];

export default function ShopTeaser() {
  return (
    <section id="store" className="w-full bg-background py-24 border-b border-border-subtle">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border-subtle pb-4">
          <div>
            <span className="text-primary font-black uppercase tracking-widest text-sm block mb-2">
              Official Merchandise
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter">
              Fan <span className="text-primary">Shop</span>
            </h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:flex items-center justify-center font-black uppercase text-foreground hover:bg-neutral-light/5 transition-colors border border-border-subtle px-10 py-4 mt-4 tracking-widest"
          >
            View Full Store
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: easing }}
              className="bg-surface border border-border-subtle flex flex-col group relative"
            >
              {/* Product Image Area / SVG Placeholder */}
              <div className="aspect-square bg-background relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-10 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110 group-hover:opacity-30"
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l1.414 1.414-2.828 2.828 1.414 1.414 2.828-2.828 1.414 1.414-2.828 2.828 1.414 1.414 2.828-2.828 1.414 1.414-2.828 2.828 1.414 1.414 2.828-2.828 1.414 1.414-2.828 2.828 1.414 1.414 2.828-2.828 1.414 1.414-2.828 2.828 1.414 1.414 2.828-2.828 1.414 1.414-2.828 2.828 1.414 1.414 2.828-2.828 1.414 1.414-2.828 2.828 1.414 1.414 2.828-2.828 1.414 1.414-5.656 5.656-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414 2.828-2.828-1.414-1.414-2.828 2.828-1.414-1.414z' fill='%2300933d' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
                  }} 
                />
                 <div className="absolute top-4 left-4 bg-secondary/90 text-dark font-black px-4 py-2 uppercase tracking-widest text-xs border border-secondary">
                   New Release
                 </div>
              </div>
              
              {/* Product Details */}
              <div className="p-8 flex flex-col flex-1 border-t border-border-subtle z-10 bg-surface">
                <span className="text-foreground/50 font-black text-xs uppercase tracking-widest mb-2">{product.type}</span>
                <h3 className="text-3xl font-black text-foreground uppercase mb-6">{product.name}</h3>
                
                <div className="mt-auto mb-8">
                  <span className="text-2xl font-black text-foreground inline-block border-b border-primary/50 pb-1">
                    {product.price}
                  </span>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full bg-background text-foreground border border-border-subtle font-black py-4 flex items-center justify-center gap-3 uppercase tracking-widest overflow-hidden group/btn"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-dark">Pre-Order Now</span>
                  <ShoppingBag size={20} className="relative z-10 transition-colors duration-300 group-hover/btn:text-dark" />
                  <div className="absolute inset-0 bg-secondary -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full md:hidden mt-10 bg-transparent text-foreground font-black border border-border-subtle px-10 py-5 hover:bg-neutral-light/5 transition-colors uppercase tracking-widest"
        >
          View Full Store
        </motion.button>

      </div>
    </section>
  );
}
