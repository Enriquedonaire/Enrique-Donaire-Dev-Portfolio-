import { useState } from 'react';

interface FlipAvatarProps {
  front: string;
  back: string;
  altFront?: string;
  altBack?: string;
  flipped?: boolean; // Permite control externo
}

const FlipAvatar = ({ front, back, altFront = '', altBack = '', flipped }: FlipAvatarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isFlipped = flipped !== undefined ? flipped : isHovered;
  return (
    <div
      className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-black/20 z-10 flip-avatar"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: '1200px' }}
    >
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-700 flip-inner ${isFlipped ? 'flip-rotated' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(0deg)', zIndex: 2 }}
        >
          <img 
            src={front} 
            alt={altFront} 
            className="w-full h-full object-center rounded-full"
            style={{ aspectRatio: '1/1', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)', zIndex: 1 }}
        >
          <img 
            src={back} 
            alt={altBack} 
            className="w-full h-full object-center rounded-full"
            style={{ aspectRatio: '1/1', width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
      </div>
      <style>{`
        .flip-avatar .flip-inner {
          transition: transform 0.7s cubic-bezier(0.4,0.2,0.2,1);
        }
        .flip-avatar .flip-inner.flip-rotated {
          transform: rotateY(180deg) !important;
        }
      `}</style>
    </div>
  );
};

export default FlipAvatar;
