import React, { useState } from "react";

const Video: React.FC<{ src: string }> = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsLoading(false); // Update state when the video is ready
  };

  return (
    <div className="relative overflow-hidden rounded-lg w-full h-full">
      {/* Pulsing Placeholder */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-600 bg-opacity-10 animate-pulse rounded-lg z-0"></div>
      )}

      {/* Video Element */}
      <video
        className="relative w-full h-full object-cover z-10"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoaded} // Trigger state change when the video is ready
      />
    </div>
  );
};

export default Video;
