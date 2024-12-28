import Video from "../../components/Video";

const Java = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full animate-leftSlideFade space-y-5 lg:space-y-0">
      {/* Text Section */}
      <div className="lg:w-2/3 w-full flex justify-start lg:pl-20 sm:pl-10">
        <h1 className="font-headings text-5xl font-extrabold text-center lg:text-left">
          Java
        </h1>
      </div>

      {/* Video Section */}
      <div className="lg:w-1/3 sm:w-full flex items-center justify-center h-1/2">
        <Video src="videos/zulfbungee1.mp4" />
      </div>
    </div>
  );
};

export default Java;
