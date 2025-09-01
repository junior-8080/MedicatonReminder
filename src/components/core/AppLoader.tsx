
const AppLoader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full py-8">
            <img
                src="/logo.png"
                alt="Loading Animation"
                className="w-[40%] md:w-[25%] animate-bounce"
            />
        </div>
    )
};

export default AppLoader;