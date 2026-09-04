import React from 'react';
import { Landmark, BookOpen, Camera, ShieldCheck, Heart, Languages } from 'lucide-react';
import { HeritageIntel } from '../../types';

interface HeritageIntelligenceCardProps {
  heritageIntel?: HeritageIntel;
  destinationName: string;
}

export const HeritageIntelligenceCard: React.FC<HeritageIntelligenceCardProps> = ({
  heritageIntel,
  destinationName,
}) => {
  const defaultIntel: HeritageIntel = heritageIntel || {
    historicalSignificance: `${destinationName} boasts an extraordinary history rooted in classical Indian heritage, ancient trading corridors, and centuries-old spiritual sanctums.`,
    architecturalStyle: 'Traditional regional stone and timber masonry, featuring seismic-resilient Kath-Kuni joinery or Dravidian Dravidian stone sculptures.',
    culturalEtiquette: [
      'Always remove shoes and leather gear before stepping onto temple and sacred stone sanctums.',
      'Seek verbal permission from local artisans before filming or photographing handloom processes.',
      'Dress modestly with shoulders and knees covered in residential and religious quarters.'
    ],
    recommendedDressCode: 'Light cottons or layered woolens depending on altitude; scarves/dupatta for temple sanctums.',
    photographyRules: 'Permitted in open courtyards; strictly prohibited inside sanctum sanctorum or during inner pujas.',
    localDialectGreeting: {
      phrase: 'Namaste / Vanakkam / Khublei',
      meaning: 'I bow to the divine presence within you'
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-soft space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <Landmark className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-900">Heritage Intelligence & Cultural Etiquette</h3>
              <span className="text-[10px] font-bold uppercase bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                INTACH Verified
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Responsible traveler protocols, historical roots, and linguistic etiquette in {destinationName}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Historical Significance & Architecture */}
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-brand-600" />
              Historical Context
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {defaultIntel.historicalSignificance}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-amber-600" />
              Architectural Lineage
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {defaultIntel.architecturalStyle}
            </p>
          </div>

          {/* Local Dialect Greeting */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50/60 to-orange-50/40 border border-amber-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Languages className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-amber-800 font-bold uppercase block">Local Greeting</span>
                <span className="text-sm font-extrabold text-amber-950">{defaultIntel.localDialectGreeting.phrase}</span>
              </div>
            </div>
            <span className="text-xs text-amber-800 italic">"{defaultIntel.localDialectGreeting.meaning}"</span>
          </div>
        </div>

        {/* Etiquette, Dress Code & Photography Rules */}
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Cultural Etiquette & Customs
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {defaultIntel.culturalEtiquette.map((tip: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Dress Code</span>
              <p className="text-slate-800 font-medium leading-relaxed">{defaultIntel.recommendedDressCode}</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1 mb-1">
                <Camera className="w-3 h-3 text-slate-500" /> Photography Rule
              </span>
              <p className="text-slate-800 font-medium leading-relaxed">{defaultIntel.photographyRules}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
