const Shimmer = () => {
    return (
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mt-28">
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="w-52 h-[450px] bg-shimmer rounded-xl cursor-pointer animate-shimmer"
          ></div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  