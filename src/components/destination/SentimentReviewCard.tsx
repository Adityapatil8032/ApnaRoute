import React from 'react';
import { ThumbsUp, AlertTriangle, Sparkles, Star, MessageSquare } from 'lucide-react';
import { SentimentAnalysis } from '../../types';

interface SentimentReviewCardProps {
  sentiment?: SentimentAnalysis;
  destinationName: string;
}

export const SentimentReviewCard: React.FC<SentimentReviewCardProps> = ({
  sentiment,
  destinationName,
}) => {
  const defaultSentiment: SentimentAnalysis = sentiment || {
    overallScore: 92,
    totalReviewsAnalyzed: 840,
    aiHighlights: [
      'Unmatched panoramic morning views and pristine air quality.',
      'Warm local homestay hospitality with authentic, home-cooked regional thalis.',
      'Safe environment for solo backpackers and women travelers.'
    ],
    reportedGroundIssues: [
      'Limited mobile connectivity on remote switchback sections.',
      'Local taxi union fixed pricing requires bargaining or advance booking.',
      'Peak weekend afternoon traffic on single-lane town roads.'
    ]
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-soft space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-900">Traveler Reviews & AI Sentiment Analyzer</h3>
              <span className="text-[10px] font-bold uppercase bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                NLP Synthesis
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Synthesized from {defaultSentiment.totalReviewsAnalyzed.toLocaleString()} verified visitor reviews for {destinationName}
            </p>
          </div>
        </div>

        {/* Overall Sentiment Badge */}
        <div className="flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-200 self-start sm:self-auto">
          <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs">
            {defaultSentiment.overallScore}%
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-950 block leading-tight">Positive Sentiment</span>
            <span className="text-[10px] text-emerald-700">High Traveler Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Grid: Highlights vs Ground Issues */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Positives */}
        <div className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-200/80 space-y-2.5">
          <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wide flex items-center gap-1.5">
            <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
            Top AI-Identified Highlights
          </h4>
          <ul className="space-y-2">
            {defaultSentiment.aiHighlights.map((item: string, idx: number) => (
              <li key={idx} className="text-xs text-slate-700 flex items-start gap-2 bg-white/80 p-2 rounded-xl border border-emerald-100">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reported Issues */}
        <div className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/80 space-y-2.5">
          <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            Reported Ground Issues & Travel Tips
          </h4>
          <ul className="space-y-2">
            {defaultSentiment.reportedGroundIssues.map((item: string, idx: number) => (
              <li key={idx} className="text-xs text-slate-700 flex items-start gap-2 bg-white/80 p-2 rounded-xl border border-amber-100">
                <span className="text-amber-600 font-bold">!</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
