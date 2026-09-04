import React, { useState } from 'react';
import { Backpack, CheckSquare, Square, Sparkles, Shield, CloudSun } from 'lucide-react';

interface SmartPackingWidgetProps {
  destinationName: string;
  category: string;
  weatherCondition: string;
}

export const SmartPackingWidget: React.FC<SmartPackingWidgetProps> = ({
  destinationName,
  category,
  weatherCondition,
}) => {
  const [checkedItems, setCheckedItems] = useState<string[]>(['p1', 'p4']);

  const packingGroups = [
    {
      category: 'Clothing & Temperature Layers',
      items: [
        { id: 'p1', name: 'Thermal Base Layers & Warm Fleece', note: 'Essential for mountain mornings & high passes' },
        { id: 'p2', name: 'Waterproof Raincheater / Windbreaker', note: 'High altitude sudden squalls' },
        { id: 'p3', name: 'Modest Temple Attire (Covered shoulders)', note: 'Required for religious & sacred sanctums' }
      ]
    },
    {
      category: 'Footwear & Trail Mobility',
      items: [
        { id: 'p4', name: 'Ankle-Support Waterproof Trekking Shoes', note: 'Traction on stone ruins and damp clay' },
        { id: 'p5', name: 'Merino Wool Socks (3 Pairs)', note: 'Prevents blisters & odor' }
      ]
    },
    {
      category: 'Health, Permits & Tech',
      items: [
        { id: 'p6', name: 'Physical ID & 4 Photocopies of DL / Aadhaar', note: 'Required for inner line & local police checkpoints' },
        { id: 'p7', name: 'High-Capacity Power Bank (20,000 mAh)', note: 'Cold temperatures drain lithium phone batteries faster' },
        { id: 'p8', name: 'Altitude Sickness Tabs & Electrolyte Sachets', note: 'For elevations above 2,500m' }
      ]
    }
  ];

  const toggleItem = (id: string) => {
    setCheckedItems((prev: string[]) =>
      prev.includes(id) ? prev.filter((i: string) => i !== id) : [...prev, id]
    );
  };

  const totalItems = packingGroups.reduce((acc, g) => acc + g.items.length, 0);
  const packedCount = checkedItems.length;
  const progressPercent = Math.round((packedCount / totalItems) * 100);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-soft space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-brand-600 text-white flex items-center justify-center shadow-xs">
            <Backpack className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-900">Smart Packing AI Assistant</h3>
              <span className="text-[10px] font-bold uppercase bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200">
                Weather-Tailored
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Personalized checklist for {destinationName} based on terrain and "{weatherCondition}"
            </p>
          </div>
        </div>

        {/* Progress gauge */}
        <div className="flex items-center gap-3 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 self-start sm:self-auto">
          <div>
            <div className="text-xs font-bold text-slate-800">
              {packedCount} of {totalItems} Packed
            </div>
            <div className="w-24 h-1.5 bg-slate-200 rounded-full mt-1 overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <span className="text-xs font-black text-indigo-600">{progressPercent}%</span>
        </div>
      </div>

      {/* Checklist categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {packingGroups.map((group, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-2.5"
          >
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              {group.category}
            </h4>

            <div className="space-y-2">
              {group.items.map((item) => {
                const isPacked = checkedItems.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 select-none ${
                      isPacked
                        ? 'bg-white border-emerald-300 shadow-xs'
                        : 'bg-white/80 border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="mt-0.5 text-slate-400">
                      {isPacked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <span className={`text-xs font-semibold block ${
                        isPacked ? 'line-through text-slate-400' : 'text-slate-900'
                      }`}>
                        {item.name}
                      </span>
                      <span className="text-[10px] text-slate-500 leading-snug block">
                        {item.note}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
