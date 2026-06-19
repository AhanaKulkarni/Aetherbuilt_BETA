import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { 
  Users, Clock, Zap, IndianRupee, MapPin, 
  Factory, Heart, AlertTriangle, CheckCircle2, 
  MessageSquare, Timer, Server, ArrowUpRight, ArrowDownRight
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
        { profile: 'Fabrication • Mumbai', metric: 'Top Benefit', benefit: 'Numbers more reliable now', feature: 'Dashboard' },
        { profile: 'Plastics • Rajkot', metric: 'Insight', benefit: 'Identified root cause early', feature: 'Analytics' },
        { profile: 'Auto Parts • Kolhapur', metric: 'Culture', benefit: 'Less tension on shop floor', feature: 'Orders' },
        { profile: 'Textiles • Surat', metric: 'Accuracy', benefit: 'Duplicate entries reduced', feature: 'Quick Command' }
    ],
    criticalRoadblocks: [
        { category: 'Data Entry friction', priority: 'HIGH', icon: MessageSquare, issues: ['Needs voice typing for busy workers', 'Hard for new users to adapt quickly'], colorClass: 'border-rose-200 bg-rose-50', iconClass: 'text-rose-600 bg-rose-100' },
        { category: 'System Performance', priority: 'MEDIUM', icon: Timer, issues: ['Intermittent performance lag', 'Alerts sometimes delayed', 'Minor UI bugs in older phones'], colorClass: 'border-amber-200 bg-amber-50', iconClass: 'text-amber-600 bg-amber-100' },
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
    ]
};

const App = () => {
    const data = INITIAL_DATA;

    return (
        <div className="min-h-screen p-4 md:p-12 bg-slate-50 flex items-center justify-center">
            <div className="w-full max-w-6xl bg-white p-8 md:p-12 shadow-xl border border-slate-200 space-y-10 rounded-sm">
                
                {/* --- Infographic Header --- */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b-2 border-slate-100 pb-8">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-primary flex items-center justify-center text-white font-display font-black text-5xl">
                            A
                        </div>
                        <div>
                            <h1 className="text-4xl font-display font-black text-slate-900 tracking-tight">AetherBuilt Beta Report</h1>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="flex items-center gap-1.5 text-sm font-bold text-slate-500 uppercase tracking-widest">
                                    <Server size={16} /> Official Data Release
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                <span className="text-sm text-slate-500 font-bold uppercase tracking-widest">
                                    Q3 2026
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* --- Top KPIs --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.metrics.map((m) => (
                        <div key={m.id} className="p-6 bg-slate-50 border border-slate-100 relative overflow-hidden group">
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white to-transparent opacity-50 rounded-bl-full`}></div>
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-lg border ${m.bg} ${m.border} ${m.color}`}>
                                    <m.icon size={24} strokeWidth={2.5} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-4xl font-display font-black text-slate-900 mb-1 tracking-tight flex items-baseline gap-1 relative z-10">
                                    {m.prefix}
                                    {m.value.toLocaleString()}
                                    <span className="text-xl text-slate-500 font-bold">{m.suffix}</span>
                                </h3>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest relative z-10">{m.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Main Content Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* Left Column (Charts) */}
                    <div className="lg:col-span-2 space-y-10">
                        
                        {/* Efficiency Chart */}
                        <div className="p-8 border border-slate-200">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-display font-black text-slate-900 flex items-center gap-2 uppercase tracking-wide">
                                    <Zap className="text-amber-500" size={24} /> Workflow Efficiency Matrix
                                </h2>
                                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 uppercase tracking-widest border border-slate-200">Minutes</span>
                            </div>
                            <div className="h-[320px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={data.efficiencyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="task" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13, fontWeight: 700}} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13, fontWeight: 700}} />
                                        <Tooltip 
                                            cursor={{fill: '#f8fafc'}}
                                            contentStyle={{ backgroundColor: '#ffffff', border: '2px solid #e2e8f0', borderRadius: '0', boxShadow: 'none' }}
                                            itemStyle={{ fontWeight: 800, color: '#0f172a' }}
                                        />
                                        <Legend iconType="square" wrapperStyle={{ fontSize: '13px', color: '#64748b', paddingTop: '20px', fontWeight: 700, textTransform: 'uppercase' }}/>
                                        <Bar dataKey="manual" name="Manual Method" fill="#94a3b8" barSize={40} />
                                        <Bar dataKey="aether" name="AetherBuilt" fill="#2563eb" barSize={40} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Demographics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Sector Split */}
                            <div className="p-8 border border-slate-200">
                                <h3 className="text-lg font-display font-black text-slate-900 flex items-center gap-2 mb-8 uppercase tracking-wide">
                                    <Factory className="text-indigo-500" size={22} /> Sector Distribution
                                </h3>
                                <div className="h-56 relative">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={data.industryData}
                                                innerRadius={70}
                                                outerRadius={90}
                                                paddingAngle={2}
                                                dataKey="value"
                                                stroke="none"
                                            >
                                                {data.industryData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip contentStyle={{ borderRadius: '0', border: '2px solid #e2e8f0', boxShadow: 'none' }} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    {/* Center text for Donut */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                        <span className="text-3xl font-display font-black text-slate-900">280</span>
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Factories</span>
                                    </div>
                                </div>
                            </div>

                            {/* Regional Split */}
                            <div className="p-8 border border-slate-200 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-display font-black text-slate-900 flex items-center gap-2 mb-8 uppercase tracking-wide">
                                        <MapPin className="text-rose-500" size={22} /> Regional Footprint
                                    </h3>
                                    <div className="space-y-6">
                                        {data.regionalData.map((item, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between text-xs font-bold text-slate-600 mb-2 uppercase tracking-wider">
                                                    <span>{item.r}</span>
                                                    <span className="text-slate-900">{item.v} Active</span>
                                                </div>
                                                <div className="w-full bg-slate-100 h-2">
                                                    <div 
                                                        className={`h-full ${item.color}`} 
                                                        style={{ width: `${(item.v / 35) * 100}%` }} 
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
                    <div className="space-y-10">
                        
                        {/* Major Wins */}
                        <div className="p-8 border border-slate-200">
                            <h3 className="text-lg font-display font-black text-slate-900 flex items-center gap-2 mb-6 border-b-2 border-slate-100 pb-4 uppercase tracking-wide">
                                <CheckCircle2 className="text-emerald-500" size={22} /> Success Highlights
                            </h3>
                            <div className="space-y-6">
                                {data.majorBenefits.map((item, i) => (
                                    <div key={i} className="p-5 bg-slate-50 border border-slate-100">
                                        <div className="flex justify-between items-start mb-3">
                                            <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-2 py-1 uppercase tracking-widest border border-emerald-200">
                                                {item.metric}
                                            </span>
                                        </div>
                                        <p className="text-base font-bold text-slate-800 mb-3">"{item.benefit}"</p>
                                        <div className="flex justify-between items-end border-t border-slate-200 pt-3">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider max-w-[60%] truncate">
                                                {item.profile}
                                            </span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                                Via: <span className="text-slate-700">{item.feature}</span>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Critical Roadblocks */}
                        <div className="p-8 border-2 border-rose-100 bg-rose-50/30">
                            <h3 className="text-lg font-display font-black text-slate-900 flex items-center gap-2 mb-6 border-b-2 border-rose-100 pb-4 uppercase tracking-wide">
                                <AlertTriangle className="text-rose-500" size={22} /> Active Roadblocks
                            </h3>
                            <div className="space-y-5">
                                {data.criticalRoadblocks.map((block, i) => ( 
                                    <div key={i} className={`p-5 bg-white border ${block.colorClass}`}>
                                        <div className="flex items-center gap-3 mb-3 border-b border-slate-100 pb-3">
                                            <div className={`p-2 ${block.iconClass}`}>
                                                <block.icon size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 text-sm uppercase tracking-wide">{block.category}</h4>
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {block.issues.map((issue, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                                                    <span className="text-rose-400 mt-0.5">→</span>
                                                    <span>{issue}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <footer className="text-center pt-8 border-t-2 border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-4">
                        <span className="flex-1 h-[2px] bg-slate-100"></span>
                        AetherBuilt Operations Dashboard • Confidential • Q3 2026
                        <span className="flex-1 h-[2px] bg-slate-100"></span>
                    </p>
                </footer>

            </div>
        </div>
    );
};

export default App;
