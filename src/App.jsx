import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { 
  Users, Clock, Zap, IndianRupee, MapPin, 
  Factory, Heart, AlertTriangle, CheckCircle2, 
  Download, Filter, MessageSquare, Globe, WifiOff, Puzzle, Timer,
  Activity, Server, ArrowUpRight, ArrowDownRight
} from 'lucide-react';

const COLORS = ['#2563eb', '#059669', '#d97706', '#dc2626', '#7c3aed', '#0891b2'];

const INITIAL_DATA = {
    metrics: [
        { id: 'factories', label: 'Active Beta Factories', value: 280, prefix: '', suffix: '', delta: 12, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
        { id: 'time', label: 'Avg. Time Saved', value: 1.8, prefix: '', suffix: ' hrs', delta: 5, icon: Clock, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
        { id: 'opex', label: 'Monthly OpEx Gain', value: 42500, prefix: '₹', suffix: '', delta: 8.4, icon: IndianRupee, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
        { id: 'nps', label: 'Avg Ease Score', value: 6.5, prefix: '', suffix: '/10', delta: 2.1, icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100' },
    ],
    majorBenefits: [
        { profile: 'Top Benefit', metric: '#1', benefit: 'Numbers more reliable now', feature: 'Dashboard' },
        { profile: 'Top Benefit', metric: '#2', benefit: 'Identified root cause early', feature: 'Analytics' },
        { profile: 'Top Benefit', metric: '#3', benefit: 'Less tension on floor', feature: 'Orders' }
    ],
    criticalRoadblocks: [
        { category: 'Data Entry', priority: 'HIGH', icon: MessageSquare, issues: ['Needs voice typing', 'Hard for new users'], colorClass: 'border-rose-200 bg-rose-50', iconClass: 'text-rose-600 bg-rose-100' },
        { category: 'System Performance', priority: 'MEDIUM', icon: Timer, issues: ['Performance lag', 'Alerts not timely', 'Minor bugs'], colorClass: 'border-amber-200 bg-amber-50', iconClass: 'text-amber-600 bg-amber-100' },
    ],
    efficiencyData: [
        { task: 'Inventory Audit', manual: 120, aether: 15 },
        { task: 'Order Logging', manual: 45, aether: 8 },
        { task: 'Report Gen.', manual: 90, aether: 5 },
        { task: 'Machine Check', manual: 60, aether: 10 },
    ],
    industryData: [
        { name: 'Fabrication', value: 72 },
        { name: 'Plastics', value: 71 },
        { name: 'Textiles', value: 69 },
        { name: 'Auto Parts', value: 68 },
    ],
    regionalData: [
        { r: 'Mumbai', v: 35, color: 'bg-blue-600' },
        { r: 'Kolhapur', v: 32, color: 'bg-emerald-600' },
        { r: 'Rajkot', v: 32, color: 'bg-amber-600' },
        { r: 'Surat', v: 30, color: 'bg-rose-600' },
        { r: 'Chennai', v: 28, color: 'bg-purple-600' },
    ],
    activityStream: [
        { time: '10:42 AM', event: 'New Factory Onboarded (Rajkot)' },
        { time: '10:38 AM', event: 'Maintenance Alert Auto-resolved' },
        { time: '10:15 AM', event: 'Weekly Reports Generated for 120 users' },
        { time: '09:55 AM', event: 'Predictor model updated' },
    ]
};

const App = () => {
    const [data, setData] = useState(INITIAL_DATA);
    const [isLive, setIsLive] = useState(true);
    const [lastUpdated, setLastUpdated] = useState(new Date());

    useEffect(() => {
        if (!isLive) return;
        const interval = setInterval(() => {
            setLastUpdated(new Date());
        }, 5000);
        return () => clearInterval(interval);
    }, [isLive]);

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                
                {/* --- Header --- */}
                <header className="card flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white font-display font-black text-3xl shadow-md">
                            A
                        </div>
                        <div>
                            <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">AetherBuilt Beta Dashboard</h1>
                            <div className="flex items-center gap-3 mt-1">
                                <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    <Server size={14} /> Internal Data
                                </span>
                                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                <span className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${isLive ? 'text-emerald-600' : 'text-slate-500'}`}>
                                    <span className="relative flex h-2 w-2">
                                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${!isLive ? 'hidden' : ''}`}></span>
                                      <span className={`relative inline-flex rounded-full h-2 w-2 ${isLive ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                                    </span>
                                    {isLive ? 'Live Connection' : 'Paused'}
                                </span>
                                <span className="text-xs text-slate-400 ml-2 font-medium">
                                    Updated: {lastUpdated.toLocaleTimeString()}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => setIsLive(!isLive)}
                            className={`flex items-center gap-2 px-4 py-2 border ${isLive ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'border-emerald-200 text-emerald-700 bg-emerald-50'} rounded-lg text-sm font-semibold transition-all`}
                        >
                            <Activity size={16} className={isLive ? 'text-slate-400' : 'text-emerald-600'} /> 
                            {isLive ? 'Pause Stream' : 'Resume Stream'}
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-brand hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all shadow-sm">
                            <Download size={16} /> Export
                        </button>
                    </div>
                </header>

                {/* --- Top KPIs --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.metrics.map((m) => (
                        <div key={m.id} className="card p-6">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-xl border ${m.bg} ${m.border} ${m.color}`}>
                                    <m.icon size={22} strokeWidth={2.5} />
                                </div>
                                <span className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 ${m.delta > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                                    {m.delta > 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                    {m.delta > 0 ? '+' : ''}{m.delta}%
                                </span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-display font-bold text-slate-900 mb-1 tracking-tight flex items-baseline gap-1">
                                    {m.prefix}
                                    {m.value.toLocaleString()}
                                    <span className="text-lg text-slate-500 font-medium">{m.suffix}</span>
                                </h3>
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{m.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Main Content Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column (Charts) */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Efficiency Chart */}
                        <div className="card p-6 md:p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2">
                                    <Zap className="text-amber-500" size={20} /> Workflow Efficiency Matrix
                                </h2>
                                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">Time in Minutes</span>
                            </div>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={data.efficiencyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="task" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 500}} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 500}} />
                                        <Tooltip 
                                            cursor={{fill: '#f8fafc'}}
                                            contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                            itemStyle={{ fontWeight: 600, color: '#0f172a' }}
                                        />
                                        <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#64748b', paddingTop: '20px', fontWeight: 500 }}/>
                                        <Bar dataKey="manual" name="Manual Method" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={32} />
                                        <Bar dataKey="aether" name="AetherBuilt" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={32} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Demographics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Sector Split */}
                            <div className="card p-6 md:p-8">
                                <h3 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2 mb-6">
                                    <Factory className="text-indigo-500" size={20} /> Sector Distribution
                                </h3>
                                <div className="h-48 relative">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={data.industryData}
                                                innerRadius={60}
                                                outerRadius={80}
                                                paddingAngle={5}
                                                dataKey="value"
                                                stroke="none"
                                            >
                                                {data.industryData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    {/* Center text for Donut */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                        <span className="text-2xl font-display font-bold text-slate-900">4</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Sectors</span>
                                    </div>
                                </div>
                            </div>

                            {/* Regional Split */}
                            <div className="card p-6 md:p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-display font-bold text-slate-900 flex items-center gap-2 mb-6">
                                        <MapPin className="text-rose-500" size={20} /> Regional Footprint
                                    </h3>
                                    <div className="space-y-5">
                                        {data.regionalData.map((item, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between text-xs font-semibold text-slate-600 mb-2">
                                                    <span>{item.r}</span>
                                                    <span className="font-bold">{item.v} Active</span>
                                                </div>
                                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                                    <div 
                                                        className={`h-full rounded-full ${item.color}`} 
                                                        style={{ width: `${(item.v / 85) * 100}%` }} 
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Feedback & Alerts) */}
                    <div className="space-y-8">
                        
                        {/* Live Activity Stream */}
                        <div className="card p-6 border-emerald-200 bg-emerald-50/50">
                            <div className="flex justify-between items-center mb-4 border-b border-emerald-100 pb-3">
                                <h3 className="text-base font-display font-bold text-slate-900 flex items-center gap-2">
                                    <Activity className="text-emerald-600" size={18} /> Live Activity Stream
                                </h3>
                                <span className={`relative flex h-2 w-2`}>
                                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${!isLive ? 'hidden' : ''}`}></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                            </div>
                            <div className="space-y-4">
                                {data.activityStream.map((log, i) => (
                                    <div key={i} className="flex gap-3 items-start border-l-2 border-emerald-200 pl-3 relative">
                                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-emerald-400 border-2 border-white"></div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 mb-0.5">{log.time}</p>
                                            <p className="text-sm font-semibold text-slate-800">{log.event}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Major Wins */}
                        <div className="card p-6">
                            <h3 className="text-base font-display font-bold text-slate-900 flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                                <CheckCircle2 className="text-emerald-500" size={18} /> Success Highlights
                            </h3>
                            <div className="space-y-4">
                                {data.majorBenefits.map((item, i) => (
                                    <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase border border-emerald-200">
                                                {item.metric}
                                            </span>
                                        </div>
                                        <p className="text-sm font-semibold text-slate-800 mb-2">"{item.benefit}"</p>
                                        <div className="flex justify-between items-end">
                                            <span className="text-[9px] font-bold text-slate-500 uppercase max-w-[60%] truncate">
                                                {item.profile}
                                            </span>
                                            <span className="text-[9px] font-bold text-slate-400">
                                                Via: <span className="text-slate-700">{item.feature}</span>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Critical Roadblocks */}
                        <div className="card p-6 border-rose-200 bg-rose-50/50">
                            <h3 className="text-base font-display font-bold text-slate-900 flex items-center gap-2 mb-4 border-b border-rose-100 pb-3">
                                <AlertTriangle className="text-rose-500" size={18} /> Active Roadblocks
                            </h3>
                            <div className="space-y-4">
                                {data.criticalRoadblocks.slice(0, 2).map((block, i) => ( 
                                    <div key={i} className={`p-4 rounded-xl border ${block.colorClass}`}>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className={`p-1.5 rounded-lg ${block.iconClass}`}>
                                                <block.icon size={16} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm">{block.category}</h4>
                                            </div>
                                        </div>
                                        <ul className="space-y-1 mt-2">
                                            {block.issues.map((issue, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                                                    <span className="text-rose-400 mt-0.5">•</span>
                                                    <span>{issue}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors uppercase tracking-widest">
                                View All Roadblocks
                            </button>
                        </div>

                    </div>
                </div>

                <footer className="text-center py-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                        <span className="w-8 h-[1px] bg-slate-200"></span>
                        AetherBuilt Operations Dashboard • Confidential
                        <span className="w-8 h-[1px] bg-slate-200"></span>
                    </p>
                </footer>

            </div>
        </div>
    );
};

export default App;
