/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wand2, Lock, User, Sparkles } from 'lucide-react';

export default function App() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isMagicActive, setIsMagicActive] = useState(false);

  const isPasswordValid = password.length >= 8;
  const isFormValid = login.trim() !== '' && isPasswordValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setIsMagicActive(true);
      setTimeout(() => {
        alert('Bem-vindo a Hogwarts, ' + login + '!');
        setIsMagicActive(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-hogwarts-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-hogwarts-burgundy rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2 
            }}
            className="inline-block p-4 rounded-full bg-hogwarts-gold/10 border border-hogwarts-gold/30 mb-4"
          >
            <Wand2 className="w-12 h-12 text-hogwarts-gold" />
          </motion.div>
          <h1 className="font-display text-4xl md:text-5xl text-hogwarts-gold tracking-widest mb-2">
            HOGWARTS
          </h1>
          <p className="text-gray-400 italic tracking-wide">Escola de Magia e Bruxaria</p>
        </div>

        <div className="parchment-bg p-8 rounded-lg shadow-2xl border-4 border-double border-hogwarts-burgundy relative overflow-hidden">
          {/* Decorative Corner Seals */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-hogwarts-burgundy/30 m-2" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-hogwarts-burgundy/30 m-2" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-hogwarts-burgundy/30 m-2" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-hogwarts-burgundy/30 m-2" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-hogwarts-burgundy font-bold text-sm uppercase tracking-tighter mb-2 flex items-center gap-2">
                <User size={16} /> Login
              </label>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Nome do Bruxo ou Bruxa"
                className="w-full bg-white/50 border-b-2 border-hogwarts-burgundy/40 p-3 text-hogwarts-dark focus:outline-none focus:border-hogwarts-burgundy transition-colors placeholder:text-gray-500 font-serif italic"
              />
            </div>

            <div>
              <label className="block text-hogwarts-burgundy font-bold text-sm uppercase tracking-tighter mb-2 flex items-center gap-2">
                <Lock size={16} /> Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Encantamento de Acesso"
                className="w-full bg-white/50 border-b-2 border-hogwarts-burgundy/40 p-3 text-hogwarts-dark focus:outline-none focus:border-hogwarts-burgundy transition-colors placeholder:text-gray-500 font-serif italic"
              />
              <p className={`text-[10px] mt-1 transition-opacity ${password.length > 0 && !isPasswordValid ? 'opacity-100 text-red-700' : 'opacity-0'}`}>
                O feitiço deve conter pelo menos 8 caracteres.
              </p>
            </div>

            <button
              type="submit"
              disabled={!isFormValid || isMagicActive}
              className={`w-full py-4 px-6 rounded font-display text-lg tracking-widest transition-all duration-500 flex items-center justify-center gap-3 relative group
                ${isFormValid 
                  ? 'bg-hogwarts-burgundy text-hogwarts-gold hover:bg-red-900 cursor-pointer shadow-lg active:scale-95' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-70'
                }`}
            >
              {isMagicActive ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              ) : (
                <>
                  <span className="relative z-10">ACESSAR SISTEMA</span>
                  {isFormValid && (
                    <motion.div
                      className="absolute inset-0 bg-hogwarts-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    />
                  )}
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 1997-2026 Hogwarts School of Witchcraft and Wizardry</p>
          <p className="mt-1 italic">"Draco Dormiens Nunquam Titillandus"</p>
        </div>
      </motion.div>

      {/* Floating Particles Effect (Simplified) */}
      <AnimatePresence>
        {isMagicActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  scale: 0,
                  opacity: 1 
                }}
                animate={{ 
                  x: (Math.random() - 0.5) * 600, 
                  y: (Math.random() - 0.5) * 600,
                  scale: Math.random() * 2,
                  opacity: 0
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute w-2 h-2 bg-hogwarts-gold rounded-full"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
