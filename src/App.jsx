import twitterLogo from "./assets/twitter-logo.svg";
import telegramLogo from "./assets/telegram-logo.svg";
import vayooMarketsLogo from "./assets/vayooMarketsLogo.svg";

function App() {
  return (
    <div className="App">
      <div className="relative h-screen w-screen bg-black overflow-hidden">
        <div className="flex flex-col flex-1 items-center justify-center h-screen w-screen bg-dark-square">
          <div
            className="md:ml-0 ml-[30px]
      "
          >
            <img src={vayooMarketsLogo} alt="" className="h-20" />

            <h1 className="ml-2 md:ml-3 mt-5 font-akku-light text-2xl text-gray-400">
              tradeFi synthetics
            </h1>
            <div className="flex gap-2 -mt-1">
              <a href="https://trade.vayoo.markets/">
                <div className="font-akku-mono ml-2 mt-5 text-md text-gray-300 hover:text-gray-200 rounded-xl border-2 border-lime-200/50 px-4 py-2 hover:border-lime-200/70">
                  Launch App
                </div>
              </a>
              <a href="https://vayoo-markets.gitbook.io/vayoo-labs-docs/">
                <div className="font-akku-mono ml-2 mt-5 text-md text-gray-400 rounded-xl border-2 border-gray-600 px-4 py-2 w-42 hover:border-gray-400/70">
                  Read the Docs
                </div>
              </a>
            </div>

            <div className="mt-8 flex items-center">
              <div className="ml-3">
                <a
                  className="hover:opacity-70 transition duration-200 ease-in-out"
                  href="https://twitter.com/VayooMarkets"
                >
                  <img
                    className="h-6"
                    src={twitterLogo}
                    alt="Twitter of Vayoo Markets"
                  />
                </a>
              </div>
              <div className="ml-3">
                <a
                  className="hover:opacity-70 transition duration-200 ease-in-out"
                  href="https://t.me/+UrUNxjJxU1w1NTg1"
                >
                  <img
                    className="h-6"
                    src={telegramLogo}
                    alt="Telegram Channel of Vayoo Markets"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-[2] w-[25%] h-[30%] -left-[20%] -top-10 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[70%] -right-[45%] bottom-20 blue__gradient"></div>
      </div>
    </div>
  );
}

export default App;
