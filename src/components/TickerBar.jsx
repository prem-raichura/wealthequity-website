import { useState, useEffect, useCallback } from 'react';

// --- Custom Hook for Data Fetching Logic ---
// This separates the logic from the presentation for cleaner code.
const useTickerData = (apiKey, symbols) => {
  const [tickerData, setTickerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fallback mock data in case the API fails or key is missing
  const mockData = [
    { name: 'SENSEX', price: '75,457.56', change: '780.50', percent_change: '1.04' },
    { name: 'NIFTY 50', price: '25,655.30', change: '250.10', percent_change: '1.03' },
    { name: 'BANK NIFTY', price: '52,122.55', change: '567.80', percent_change: '1.10' },
  ];

  const fetchTickerData = useCallback(async () => {
    if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
      console.warn("API key not provided. Using fallback mock data for TickerBar.");
      setTickerData(mockData);
      setIsLoading(false);
      return;
    }

    try {
      const symbolString = symbols.map(s => s.symbol).join(',');
      const response = await fetch(`https://api.twelvedata.com/quote?symbol=${symbolString}&apikey=${apiKey}`);
      if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
      
      const data = await response.json();
      const quotes = symbols.map(s => {
        const quoteData = data[s.symbol];
        if (quoteData && quoteData.price) {
          return { ...quoteData, name: s.name };
        }
        return null;
      }).filter(Boolean);

      if (quotes.length > 0) {
        setTickerData(quotes);
      } else {
        throw new Error("API response was empty or invalid.");
      }
    } catch (err) {
      console.error("Failed to fetch live stock data:", err);
      setTickerData(mockData); // Fallback on error
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, symbols]);

  useEffect(() => {
    fetchTickerData();
    // Refresh data every 5 minutes to stay within free tier limits
    const interval = setInterval(fetchTickerData, 300000); 
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [fetchTickerData]);

  return { tickerData, isLoading };
};

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
  const API_KEY = 'YOUR_API_KEY_HERE'; // <-- PASTE YOUR FREE API KEY HERE
  
  const symbols = [
    { name: 'SENSEX', symbol: 'SENSEX:BSE' },
    { name: 'NIFTY 50', symbol: 'NIFTY_50:NSE' },
    { name: 'BANK NIFTY', symbol: 'NIFTY_BANK:NSE' },
    { name: 'NIFTY IT', symbol: 'NIFTY_IT:NSE' },
    { name: 'NIFTY FIN SERVICE', symbol: 'NIFTY_FIN_SERVICE:NSE' },
    { name: 'NIFTY MIDCAP 100', symbol: 'NIFTY_MIDCAP_100:NSE' },
  ];

  const { tickerData, isLoading } = useTickerData(API_KEY, symbols);

  // Duplicate the data multiple times to ensure the bar is always full and loops seamlessly
  const extendedData = isLoading ? Array(18).fill({}) : Array(4).fill(tickerData).flat();

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