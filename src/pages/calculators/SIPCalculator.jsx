import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { motion, AnimatePresence } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Redesigned responsive input/slider component
const SliderInput = ({ label, unit, value, setValue, min, max, step }) => (
  <div className="space-y-3">
    <div className="flex justify-between items-center">
      <label className="text-light-gray text-sm sm:text-base">{label}</label>
      <div className="w-36 sm:w-40">
        <div className="flex items-center bg-gray-800 rounded-md">
          <span className="text-secondary-gray pl-3">{unit}</span>
          <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full bg-transparent text-light-gray font-semibold p-2 border-none focus:ring-0" />
        </div>
      </div>
    </div>
    <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-thumb" />
  </div>
);

const SIPCalculator = () => {
  const [activeTab, setActiveTab] = useState('sip'); // 'sip', 'step-up', 'goal'
  
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [rate, setRate] = useState(12);
  const [period, setPeriod] = useState(10);
  const [stepUp, setStepUp] = useState(10);
  const [goalAmount, setGoalAmount] = useState(10000000);

  const [totalValue, setTotalValue] = useState(0);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [requiredInvestment, setRequiredInvestment] = useState(0);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const i = rate / 12 / 100;
    const n = period * 12;
    let futureValue = 0;
    let totalInvested = 0;
    const labels = [];
    const investedData = [];
    const returnsData = [];

    if (activeTab === 'sip') {
      futureValue = monthlyInvestment * ((((1 + i) ** n) - 1) / i) * (1 + i);
      totalInvested = monthlyInvestment * n;
      for (let year = 1; year <= period; year++) { labels.push(`${year}Y`); const months = year * 12; const currentInvested = monthlyInvestment * months; const currentValue = monthlyInvestment * ((((1 + i) ** months) - 1) / i) * (1 + i); investedData.push(Math.round(currentInvested)); returnsData.push(Math.round(currentValue - currentInvested)); }
    } else if (activeTab === 'step-up') {
      let currentInvestment = monthlyInvestment;
      for (let month = 1; month <= n; month++) { futureValue += currentInvestment * ((1 + i) ** (n - month + 1)); totalInvested += currentInvestment; if (month % 12 === 0 && month < n) { currentInvestment *= (1 + stepUp / 100); } }
      for (let year = 1; year <= period; year++) { labels.push(`${year}Y`); let yearFutureValue = 0; let yearInvested = 0; let runningInvestment = monthlyInvestment; for (let m = 1; m <= year * 12; m++) { yearFutureValue += runningInvestment * ((1 + i) ** ((year * 12) - m + 1)); yearInvested += runningInvestment; if (m % 12 === 0 && m < year * 12) { runningInvestment *= (1 + stepUp / 100); } } investedData.push(Math.round(yearInvested)); returnsData.push(Math.round(yearFutureValue - yearInvested)); }
    } else if (activeTab === 'goal') {
      const requiredSIP = goalAmount / (((((1 + i) ** n) - 1) / i) * (1 + i));
      setRequiredInvestment(requiredSIP); futureValue = goalAmount; totalInvested = requiredSIP * n;
      for (let year = 1; year <= period; year++) { labels.push(`${year}Y`); const months = year * 12; const currentInvested = requiredSIP * months; const currentValue = requiredSIP * ((((1 + i) ** months) - 1) / i) * (1 + i); investedData.push(Math.round(currentInvested)); returnsData.push(Math.round(currentValue - currentInvested)); }
    }
    
    setTotalValue(futureValue); setInvestedAmount(totalInvested); setEstimatedReturns(futureValue - totalInvested);
    setChartData({ labels, datasets: [ { label: 'Invested Amount', data: investedData, backgroundColor: '#006400', stack: 'stack1' }, { label: 'Est. Returns', data: returnsData, backgroundColor: '#00B400', stack: 'stack1' } ] });
  }, [monthlyInvestment, rate, period, stepUp, goalAmount, activeTab]);

  const chartOptions = { responsive: true, maintainAspectRatio: false, scales: { x: { grid: { display: false }, ticks: { color: '#a0a0a0' } }, y: { grid: { color: '#374151' }, ticks: { color: '#a0a0a0', callback: (value) => `${(value / 100000).toFixed(0)}L` } } }, plugins: { legend: { display: false }, tooltip: { callbacks: { label: (context) => `${context.dataset.label}: ₹${Number(context.raw).toLocaleString('en-IN')}` } } } };
  const sliderStyle = `.range-thumb::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;background:#fff;border-radius:50%;cursor:pointer;border:2px solid #00B400;}.range-thumb::-moz-range-thumb{width:20px;height:20px;background:#fff;border-radius:50%;cursor:pointer;border:2px solid #00B400;}`;

  const renderInputs = () => {
    switch (activeTab) {
      case 'step-up': return <><SliderInput label="Monthly Investment" unit="₹" value={monthlyInvestment} setValue={setMonthlyInvestment} min={500} max={100000} step={500} /><SliderInput label="Annual Step-up" unit="%" value={stepUp} setValue={setStepUp} min={0} max={25} step={1} /><SliderInput label="Expected return rate (p.a)" unit="%" value={rate} setValue={setRate} min={1} max={30} step={0.5} /><SliderInput label="Time Period" unit="Y" value={period} setValue={setPeriod} min={1} max={40} step={1} /></>;
      case 'goal': return <><SliderInput label="I want to achieve (Goal)" unit="₹" value={goalAmount} setValue={setGoalAmount} min={100000} max={50000000} step={100000} /><SliderInput label="Expected return rate (p.a)" unit="%" value={rate} setValue={setRate} min={1} max={30} step={0.5} /><SliderInput label="Time Period" unit="Y" value={period} setValue={setPeriod} min={1} max={40} step={1} /></>;
      default: return <><SliderInput label="Monthly Investment" unit="₹" value={monthlyInvestment} setValue={setMonthlyInvestment} min={500} max={100000} step={500} /><SliderInput label="Expected return rate (p.a)" unit="%" value={rate} setValue={setRate} min={1} max={30} step={0.5} /><SliderInput label="Time Period" unit="Y" value={period} setValue={setPeriod} min={1} max={40} step={1} /></>;
    }
  };

  return (
    <>
      <style>{sliderStyle}</style>
      <div className="p-4 grid lg:grid-cols-2 gap-8 text-white">
        <div className="bg-gray-900/50 p-6 space-y-6">
          <div className="flex flex-wrap items-center gap-2 border-b border-gray-700 pb-4">
            <h2 className="text-2xl font-bold text-brand-green mr-4">SIP Calculator</h2>
            <button onClick={() => setActiveTab('sip')} className={`${activeTab === 'sip' ? 'bg-brand-green/20 text-brand-green' : 'text-secondary-gray'} font-semibold py-2 px-4 rounded-lg transition-colors`}>SIP</button>
            <button onClick={() => setActiveTab('step-up')} className={`${activeTab === 'step-up' ? 'bg-brand-green/20 text-brand-green' : 'text-secondary-gray'} font-semibold py-2 px-4 rounded-lg transition-colors`}>Step-up</button>
            <button onClick={() => setActiveTab('goal')} className={`${activeTab === 'goal' ? 'bg-brand-green/20 text-brand-green' : 'text-secondary-gray'} font-semibold py-2 px-4 rounded-lg transition-colors`}>Goal SIP</button>
          </div>
          <AnimatePresence mode="wait"><motion.div key={activeTab} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.2 }} className="space-y-6">{renderInputs()}</motion.div></AnimatePresence>
        </div>
        <div className="bg-gray-900/50 p-6">
          {activeTab === 'goal' ? (<><p className="text-secondary-gray">MONTHLY INVESTMENT NEEDED</p><p className="text-2xl sm:text-4xl font-bold text-light-gray mb-4">₹ {Math.round(requiredInvestment).toLocaleString('en-IN')}</p></>) : (<><p className="text-secondary-gray">TOTAL VALUE</p><p className="text-2xl sm:text-4xl font-bold text-light-gray mb-4">₹ {Math.round(totalValue).toLocaleString('en-IN')}</p></>)}
          <div className="flex flex-col sm:flex-row justify-between text-secondary-gray mb-6 gap-4 sm:gap-0"><div>Invested Amount <p className="text-lg font-semibold text-light-gray">₹ {Math.round(investedAmount).toLocaleString('en-IN')}</p></div><div>Est. Returns <p className="text-lg font-semibold text-light-gray">₹ {Math.round(estimatedReturns).toLocaleString('en-IN')}</p></div></div>
          <div className="h-64"><Bar options={chartOptions} data={chartData} /></div>
          <div className="flex justify-center items-center gap-6 mt-4"><div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#006400]"></div><span className="text-secondary-gray">Invested amount</span></div><div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-[#00B400]"></div><span className="text-secondary-gray">Est. returns</span></div></div>
        </div>
      </div>
    </>
  );
};
export default SIPCalculator;
