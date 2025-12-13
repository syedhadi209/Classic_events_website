import React, { useState } from 'react';

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

export const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({ 
  className, 
  wrapperClassName,
  onLoad,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Skeleton Loader */}
      {!isLoaded && (
        <div className={`absolute inset-0 bg-slate-800 animate-pulse z-0 ${wrapperClassName || ''}`} />
      )}
      
      {/* Actual Image */}
      <img
        {...props}
        className={`${className} transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={(e) => {
          setIsLoaded(true);
          if (onLoad) onLoad(e);
        }}
      />
    </>
  );
};