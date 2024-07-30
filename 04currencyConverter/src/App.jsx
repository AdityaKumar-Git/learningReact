import { useEffect, useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo/";
import countryList from "./components/countrycodes";



function App() {
  const [amount, setAmount] = useState(0);
  const [convAmount, setConvAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const currencyInfo = useCurrencyInfo(from.toLowerCase());
  const options = Object.keys(countryList);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convAmount);
    setConvAmount(amount);
  };

  const convert = () => {
    setConvAmount(amount * currencyInfo[to.toLowerCase()]);
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
    <div className="flex justify-center items-center font-bold text-5xl text-black drop-shadow-xl bg-white/50 pt-6 pb-8 border-b-2 border-black/40 font-serif">Currency Converter</div>

    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto rounded-lg border-2 border-black/30 p-5 backdrop-blur-sm bg-black/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox 
              label="From"
              amount={amount}
              onAmountChange = {(amount)=>{setAmount(amount)}}
              currencyOptions = {options}
              onCurrencyChange = {(currency)=>{setAmount(amount)}}
              selectCurrency = {from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-300 border border-black/40 text-white px-2 py-0.5"
                onClick={swap}
              >
                <p className="mb-0.5 h-7 w-10"><img src="./exc.svg" alt="" className="h-full w-full object-contain" /></p>

              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox 
              label="To" 
              amount={convAmount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>{setTo(currency)}}
              selectCurrency={to}
              amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
            <div className="w-full flex justify-center bg-white/40 mt-2 rounded-lg">Exchange rate for {from} to {to} is :<p className="ml-2 font-bold">{currencyInfo[to.toLowerCase()]}</p></div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
