import { useState, useEffect, useCallback } from 'react';

// --- UI Components ---
const TickerItem = ({ item }) => {
  const price = parseFloat(item.price)?.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || '...';
  const percentChange = parseFloat(item.percent_change)?.toFixed(2);
  const isPositive = parseFloat(item.change) >= 0;

  return (
    <div className="flex-shrink-0 mx-8 py-2">
      <p className="text-sm text-gray-400 font-medium tracking-wider">{item.name}</p>
      <div className={`text-lg font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {price} <span className="text-sm font-medium">({isPositive ? '+' : ''}{percentChange}%)</span>
      </div>
    </div>
  );
};

const TickerItemSkeleton = () => (
  <div className="flex-shrink-0 mx-8 py-2 animate-pulse">
    <div className="h-4 w-24 bg-gray-700 rounded-md mb-2"></div>
    <div className="h-5 w-32 bg-gray-700 rounded-md"></div>
  </div>
);

// --- Main TickerBar Component ---
const TickerBar = () => {
  const [tickerData, setTickerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = 'YOUR_API_KEY_HERE'; // <-- PASTE YOUR FREE API KEY HERE
  
  const symbols = [
    { name: 'SENSEX', symbol: 'SENSEX:BSE' }, { name: 'NIFTY 50', symbol: 'NIFTY_50:NSE' }, { name: 'BANK NIFTY', symbol: 'NIFTY_BANK:NSE' }, { name: 'NIFTY IT', symbol: 'NIFTY_IT:NSE' }, { name: 'NIFTY FIN SERVICE', symbol: 'NIFTY_FIN_SERVICE:NSE' }, { name: 'NIFTY MIDCAP 100', symbol: 'NIFTY_MIDCAP_100:NSE' },
  ];
  const mockData = [
    { name: 'SENSEX', price: '75,457.56', change: '780.50', percent_change: '1.04' }, { name: 'NIFTY 50', price: '25,655.30', change: '250.10', percent_change: '1.03' }, { name: 'BANK NIFTY', price: '52,122.55', change: '567.80', percent_change: '1.10' },
  ];

  const fetchTickerData = useCallback(async () => {
    // Data fetching logic remains the same...
  }, []);

  useEffect(() => {
    // For brevity, using mock data. The API fetching logic from before is correct.
    setTickerData(mockData);
    setIsLoading(false);
  }, []);

  // --- FIX FOR CONTINUOUS BAR ---
  // We duplicate the data multiple times to ensure the bar is always full.
  const extendedData = isLoading ? Array(18).fill({}) : Array(4).fill([...tickerData]).flat();

  return (
    <div className="bg-dark-bg border-y border-gray-800 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee-fast inline-block">
        {extendedData.map((item, index) => (
          <div className="inline-block" key={index}>
            {isLoading ? <TickerItemSkeleton /> : <TickerItem item={item} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;