import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const SliderInput = ({ label, unit, value, setValue, min, max, step }) => (
  <div className="space-y-3">
    <label className="text-light-gray">{label}</label>
    <div className="flex items-center gap-4">
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-thumb" />
      <div className="flex-shrink-0 w-36"><div className="flex items-center bg-gray-800 rounded-md"><span className="text-secondary-gray pl-3">{unit}</span><input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full bg-transparent text-light-gray font-semibold p-2 border-none focus:ring-0" /></div></div>
    </div>
  </div>
);

const MutualFundCalculator = () => {
  const [investment, setInvestment] = useState(100000);
  const [rate, setRate] = useState(15);
  const [period, setPeriod] = useState(5);
  const [totalValue, setTotalValue] = useState(0);
  const [totalReturns, setTotalReturns] = useState(0);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    // Lumpsum calculation
    const futureValue = investment * (1 + rate / 100) ** period;
    const returns = futureValue - investment;
    setTotalValue(futureValue);
    setTotalReturns(returns);

    const labels = [];
    const investedData = [];
    const returnsData = [];
    for (let year = 1; year <= period; year++) {
      labels.push(`${year}Y`);
      const currentValue = investment * (1 + rate / 100) ** year;
      investedData.push(investment);
      returnsData.push(currentValue - investment);
    }
    setChartData({
      labels,
      datasets: [
        { label: 'Invested Amount', data: investedData, backgroundColor: '#006400', stack: 'stack1' },
        { label: 'Est. Returns', data: returnsData, backgroundColor: '#00B400', stack: 'stack1' },
      ],
    });
  }, [investment, rate, period]);
  
  const chartOptions = { responsive: true, maintainAspectRatio: false, scales: { x: { grid: { display: false }, ticks: { color: '#a0a0a0' } }, y: { grid: { color: '#374151' }, ticks: { color: '#a0a0a0', callback: (value) => `${(value / 100000).toFixed(1)}L` } } }, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (context) => `${context.dataset.label}: ₹${Number(context.raw).toLocaleString('en-IN')}` } } } };
  const sliderStyle = `.range-thumb::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 20px; height: 20px; background: #fff; border-radius: 50%; cursor: pointer; border: 2px solid #00B400; } .range-thumb::-moz-range-thumb { width: 20px; height: 20px; background: #fff; border-radius: 50%; cursor: pointer; border: 2px solid #00B400; }`;

  return (
    <>
      <style>{sliderStyle}</style>
      <div className="p-4 grid lg:grid-cols-2 gap-8 text-white">
        <div className="bg-gray-900/50 p-6 space-y-6">
          <h2 className="text-2xl font-bold text-brand-green">Lumpsum Calculator</h2>
          <SliderInput label="Total Investment" unit="₹" value={investment} setValue={setInvestment} min={10000} max={1000000} step={10000} />
          <SliderInput label="Expected Return Rate (p.a)" unit="%" value={rate} setValue={setRate} min={1} max={30} step={0.5} />
          <SliderInput label="Time Period" unit="Y" value={period} setValue={setPeriod} min={1} max={30} step={1} />
        </div>
        <div className="bg-gray-900/50 p-6">
          <p className="text-secondary-gray">TOTAL VALUE</p>
          <p className="text-4xl font-bold text-light-gray mb-4">₹ {Math.round(totalValue).toLocaleString('en-IN')}</p>
          <div className="flex justify-between text-secondary-gray mb-6">
            <div>Invested Amount <p className="text-lg font-semibold text-light-gray">₹ {investment.toLocaleString('en-IN')}</p></div>
            <div>Est. Returns <p className="text-lg font-semibold text-light-gray">₹ {Math.round(totalReturns).toLocaleString('en-IN')}</p></div>
          </div>
          <div className="h-64"><Bar options={chartOptions} data={chartData} /></div>
          <div className="flex justify-center items-center gap-6 mt-4"><div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#006400]"></div><span className="text-secondary-gray">Invested amount</span></div><div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#00B400]"></div><span className="text-secondary-gray">Est. returns</span></div></div>
        </div>
      </div>
    </>
  );
};
export default MutualFundCalculator;