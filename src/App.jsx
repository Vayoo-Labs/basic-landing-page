function App() {
  return (
    <div className="App">
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

          <div class="mt-4 flex items-center">
            <div class="ml-3">
              <a
                class="hover:opacity-70 transition duration-200 ease-in-out"
                href="https://twitter.com/VayooMarkets"
              >
                <img
                  class="h-6"
                  src="/src/assets/twitter-logo.svg"
                  alt="Solana"
                />
              </a>
            </div>
            <div class="ml-3">
              <a
                class="hover:opacity-70 transition duration-200 ease-in-out"
                href="#"
              >
                <img
                  class="h-6"
                  src="/src/assets/telegram-logo.svg"
                  alt="Solana"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
