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

const InflationCalculator = () => {
  const [currentCost, setCurrentCost] = useState(50000);
  const [rate, setRate] = useState(6);
  const [period, setPeriod] = useState(10);
  const [futureCost, setFutureCost] = useState(0);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const futureValue = currentCost * (1 + rate / 100) ** period;
    setFutureCost(futureValue);
    
    const labels = [];
    const costData = [];
    for (let year = 1; year <= period; year++) {
      labels.push(`${year}Y`);
      costData.push(currentCost * (1 + rate / 100) ** year);
    }
    setChartData({
      labels,
      datasets: [{ label: 'Future Cost', data: costData, backgroundColor: '#00B400' }],
    });
  }, [currentCost, rate, period]);

  const chartOptions = { responsive: true, maintainAspectRatio: false, scales: { x: { grid: { display: false }, ticks: { color: '#a0a0a0' } }, y: { grid: { color: '#374151' }, ticks: { color: '#a0a0a0', callback: (value) => `${(value / 1000).toFixed(0)}k` } } }, plugins: { legend: { display: false } } };
  const sliderStyle = `.range-thumb::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 20px; height: 20px; background: #fff; border-radius: 50%; cursor: pointer; border: 2px solid #00B400; } .range-thumb::-moz-range-thumb { width: 20px; height: 20px; background: #fff; border-radius: 50%; cursor: pointer; border: 2px solid #00B400; }`;

  return (
    <>
      <style>{sliderStyle}</style>
      <div className="p-4 grid lg:grid-cols-2 gap-8 text-white">
        <div className="bg-gray-900/50 p-6 space-y-6">
          <h2 className="text-2xl font-bold text-brand-green">Inflation Calculator</h2>
          <SliderInput label="Current Cost of Goal" unit="₹" value={currentCost} setValue={setCurrentCost} min={10000} max={1000000} step={10000} />
          <SliderInput label="Inflation Rate (p.a)" unit="%" value={rate} setValue={setRate} min={1} max={15} step={0.5} />
          <SliderInput label="Time Period" unit="Y" value={period} setValue={setPeriod} min={1} max={30} step={1} />
        </div>
        <div className="bg-gray-900/50 p-6">
          <p className="text-secondary-gray">FUTURE COST</p>
          <p className="text-4xl font-bold text-light-gray mb-4">₹ {Math.round(futureCost).toLocaleString('en-IN')}</p>
          <div className="text-secondary-gray mb-6">Today's ₹{currentCost.toLocaleString('en-IN')} will be worth ₹{Math.round(futureCost).toLocaleString('en-IN')} in {period} years.</div>
          <div className="h-64"><Bar options={chartOptions} data={chartData} /></div>
        </div>
      </div>
    </>
  );
};
export default InflationCalculator;