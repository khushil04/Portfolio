import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  wordDelay?: number;
}

export default function AnimatedText({ text, className = '', wordDelay = 0.1 }: AnimatedTextProps) {
  const words = text.split(' ');
  
  return (
    <span className={className}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span 
            className="word-animation"
            style={{ animationDelay: `${index * wordDelay}s` }}
          >
            {word}
          </span>
          {index < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </span>
  );
}