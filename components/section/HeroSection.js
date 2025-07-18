export default function HeroSection() {
  return (
    <section>
      <div className="h-[100vh] bg-black/98 relative overflow-hidden">
        {/* Blurred light - BACK layer */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="h-170 w-170 rounded-full bg-white/20 blur-3xl" />
        </div>

        {/* Background image - FRONT layer */}
        <div className="absolute inset-0 z-10 flex items-end justify-center">
          <img
            src="/hero.png"
            alt="Hero Background"
            className="w-145 object-cover filter grayscale"
          />
        </div>
        {/* Content - TOP layer */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
         <div className="absolute inset-0 flex items-center justify-center  text-[#F5FFC8] z-10 pointer-events-none mb-80">
            <div className="w-full max-w-5xl text-center px-4 md:px-15 ">
            <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold ">Your Journey from 
            <span className="text-[#9BCD00]"> Ordinary to Extraordinary </span>
               <div className="flex justify-around">
                    <span>Starts</span><span className="lg:pr-10">here.</span>
                </div></h1>
          </div>
        </div>
          </div>
          <div className="w-full h-full flex items-end justify-center z-10">
            <div className="flex justify-between mx-30 mb-10 w-full">
                <div className="flex justify-center items-top gap-2">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">12k+</h1>
                    <p className="text-lg md:text-xl lg:text-sm mt-4 text-white">Happy spirits</p>
                </div>
                <div>
                    <button className="p-4 bg-[#9BCD00] text-black/80 rounded-3xl text-lg font-semibold">Let's start</button>
                </div>
            </div>
          </div>
      </div>
    </section>
  );
}
