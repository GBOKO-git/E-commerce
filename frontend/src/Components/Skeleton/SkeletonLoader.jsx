const Loader = () => {
  return (
    <>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="w-64 h-80 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg shadow-md p-4"
          >
            <div className="w-full h-40 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Loader;