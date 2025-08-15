"use client";

import React, { useState, useEffect } from 'react';

interface BackgroundElementsProps {
  isLoaded: boolean;
}

interface FloatingElement {
  id: number;
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

const BackgroundElements = ({ isLoaded }: BackgroundElementsProps) => {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Generate random positions only on client side to avoid hydration mismatch
    const elements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${10 + Math.random() * 80}%`,
      top: `${10 + Math.random() * 80}%`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <>
      {/* Refined Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orbs */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-violet-500/8 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxkZWZzPgogICAgICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8L3BhdHRlcm4+CiAgICA8L2RlZnM+CiAgICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-30"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute w-1 h-1 bg-gradient-to-r from-purple-300 to-violet-300 rounded-full opacity-20 ${isLoaded ? 'animate-pulse' : ''}`}
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.animationDelay,
              animationDuration: element.animationDuration
            }}
          />
        ))}
      </div>
    </>
  );
};

export default BackgroundElements;
