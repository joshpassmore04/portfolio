import React, { useState } from "react";
import PageMediaType from "./PageMediaType"; 

interface MediaProps {
  src: string;
  type: PageMediaType;
}

const PageMedia: React.FC<MediaProps> = ({ src, type }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleMediaLoaded = () => {
    setIsLoading(false); 
  };

  const sharedClasses = "relative w-full h-full object-cover z-10";

  const renderMedia = () => {
    switch (type) {
      case PageMediaType.VIDEO:
        return (
          <video
            className={sharedClasses}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={handleMediaLoaded} 
          />
        );

      case PageMediaType.IMAGE:
        return (
          <img
            className={sharedClasses}
            src={src}
            alt="Media content"
            onLoad={handleMediaLoaded} 
          />
        );

      default:
        return <p>Unsupported media type</p>;
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-600 bg-opacity-10 animate-pulse rounded-lg z-0"></div>
      )}
      {renderMedia()}
    </div>
  );
};

export default PageMedia;
