const Video: React.FC<{ src: string }> = ({ src }) => {
    return (
      <div className="overflow-hidden rounded-lg w-full h-full">
        <video
          className="w-full h-full object-cover"
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    );
  };
  
  export default Video;
  