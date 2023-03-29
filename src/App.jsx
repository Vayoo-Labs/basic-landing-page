import twitterLogo from "./assets/twitter-logo.svg";
import telegramLogo from "./assets/telegram-logo.svg";

function App() {
  return (
    <div className="App">
      <div className="relative h-screen w-screen bg-black overflow-hidden">
        <div class="flex flex-col flex-1 items-center justify-center h-screen w-screen bg-dark-square">
          <div
            class="md:ml-0 ml-[30px]
      "
          >
            <h1 class="font-roboto font-thin italic text-7xl text-lime-200 drop-shadow-white">
              Vayoo
              <span class="break-normal text-gray-300 drop-shadow-none font-thin">
                {" "}
                Markets
              </span>
              .
            </h1>
            <h1 class="ml-2 md:ml-3 mt-2 font-roboto font- italic text-2xl text-gray-400">
              tradeFi synthetics
            </h1>
    <div className="flex gap-2">

            <a href="https://trade.vayoo.markets/">
              <div className="ml-2 mt-5 text-md text-gray-300 hover:text-gray-200 rounded-xl border-2 border-lime-200/50 px-4 py-2 hover:border-lime-200/70">
                Launch App
              </div>
            </a>
            <a href="https://vayoo-markets.gitbook.io/vayoo-labs-docs/">
              <div className="ml-2 mt-5 text-md text-gray-400 rounded-xl border-2 border-gray-600 px-4 py-2 w-36 hover:border-gray-400/70">
                Read the Docs
              </div>
            </a>
    </div>
            
            <div class="mt-10 flex items-center">
              <div class="ml-3">
                <a
                  class="hover:opacity-70 transition duration-200 ease-in-out"
                  href="https://twitter.com/VayooMarkets"
                >
                  <img
                    class="h-6"
                    src={twitterLogo}
                    alt="Twitter of Vayoo Markets"
                  />
                </a>
              </div>
              <div class="ml-3">
                <a
                  class="hover:opacity-70 transition duration-200 ease-in-out"
                  href="https://t.me/+UrUNxjJxU1w1NTg1"
                >
                  <img
                    class="h-6"
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
