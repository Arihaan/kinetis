export const metadata = {
  title: "Kinetis",
  description: "Reach Goals Faster with sBTC Crowdfunding",
};

export default function Home() {
  return (
    <>
      <section className="bg-[url('backgr.png')] bg-cover bg-center h-[80vh] flex items-center font-sans">
        <div className="container mx-auto text-center">
          <h1 className="text-7xl font-bold text-gray-100 mb-4">Empowering Dreams with sBTC Crowdfunding</h1>
          <p className="text-5xl text-gray-300 mb-8">κινητής</p>
        </div>
      </section>
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-100">About Kinetis</h2>
            <p className="text-gray-400 mb-8">
                Kinetis is a revolutionary crowdfunding platform that empowers individuals and entrepreneurs to turn their dreams into reality. Our unique feature allows users to set funding goals in USD with sBTC conversion.
            </p>
            <a href="#" className="bg-[#00A6E2] py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700">Learn More</a>
        </div>
      </section>
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-8">How It Works</h2>
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-700 rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-semibold text-gray-100 mb-2">Set Your Goal</h4>
                    <p className="text-gray-400">Start by setting your funding goal in USD.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-semibold text-gray-100 mb-2">Smart Conversion</h4>
                    <p className="text-gray-400">Our smart contract converts sBTC to USD.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-6 shadow-md">
                    <h4 className="text-xl font-semibold text-gray-100 mb-2">Funds Released</h4>
                    <p className="text-gray-400">Funds are released upon meeting the goal.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<footer className="custom-header text-gray-400 py-8">
    <div className="container mx-auto text-center">
        <div className="mb-4">
            <a href="#"><img src="logo.png" alt="Kinetis Logo" className="w-10"/></a>
        </div>
        <nav className="mb-8">
            <a href="#" className="text-gray-300 hover:text-gray-100">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-gray-100 ml-4">Terms of Use</a>
        </nav>
        <p className="text-gray-300">&copy; 2023 Kinetis. All rights reserved.</p>
    </div>
</footer>
    </>
  );
}
