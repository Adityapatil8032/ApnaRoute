import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, Compass, ShieldAlert, ArrowRight } from 'lucide-react';
import { ChatMessage } from '../../types';

export const AIConciergeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'assistant',
      text: 'Namaste! I am your APNA ROUTE AI Travel Concierge. Ask me anything about ground transport rules, seasonal terrain warnings, local delicacies, or packing tips.',
      timestamp: 'Just now',
      suggestions: [
        'Is bike taxi working in Munnar?',
        'Best season to visit Manali?',
        'What should I pack for Chopta trek?',
        'How to reach Dashashwamedh Ghat?'
      ]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages((prev: ChatMessage[]) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Contextual responses based on Indian tourism query keywords
    setTimeout(() => {
      let reply = "I've logged your request into our SIH 2026 intelligence router. ";
      const q = query.toLowerCase();

      if (q.includes('bike taxi') || q.includes('rapido')) {
        reply = "⚠️ Ground Rule Check: In hill districts like Munnar (Idukki) and upper Manali ascents, app bike taxis are restricted due to gradient safety laws. However, in urban Varanasi, Pondicherry, and lower towns, Rapido operates actively with average wait times under 7 mins.";
      } else if (q.includes('manali') || q.includes('atal tunnel')) {
        reply = "🏔️ Manali Ground Intel: Atal Tunnel north portal road is clear with mild black ice advisory in early mornings. Cab unions charge fixed ₹2,600 shared tariffs for the Sissu/Solang circuit. HRTC electric buses run between Mall Road and Naggar.";
      } else if (q.includes('chopta') || q.includes('pack')) {
        reply = "🎒 Chopta Packing Intel: High alpine terrain at 2,680m. Homestays operate on solar energy without room geysers. Carry thermal fleece base layers, headlamp, sturdy grip shoes, and offline cash since mobile ATMs are 30km away in Ukhimath.";
      } else if (q.includes('varanasi') || q.includes('ghat') || q.includes('aarti')) {
        reply = "🕉️ Varanasi Transit Intel: Godowlia to Dashashwamedh Ghat is pedestrian-only after 4:00 PM. Take an e-rickshaw to Godowlia Chowk, then walk 500m. Dawn non-motorized wooden rowboats are recommended at ₹100-200/seat.";
      } else if (q.includes('cost') || q.includes('budget')) {
        reply = "💰 Budget Estimation: For moderate travel in Himachal or Karnataka, budget approx ₹2,800 to ₹4,200 per day including local homestay, shared cabs, and authentic local meals. Use our Dynamic Cost Calculator tab to see exact per-person costs!";
      } else {
        reply = `🔍 APNA ROUTE Ground Check: For "${query}", our database verifies baseline regional transport permits, weather safety windows, and local artisan homestays. Cloud LLM API is ready to provide live dynamic streaming responses in Phase 2.`;
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: reply,
        timestamp: 'Just now'
      };

      setMessages((prev: ChatMessage[]) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-3.5 bg-gradient-to-tr from-brand-700 via-brand-600 to-cyan-500 text-white rounded-2xl shadow-elevated hover:shadow-brand-500/30 hover:scale-105 transition-all flex items-center gap-2.5 group cursor-pointer"
          aria-label="Open AI Concierge"
        >
          <div className="relative">
            <Bot className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-white animate-pulse" />
          </div>
          <span className="text-xs font-bold hidden sm:inline-block pr-1">
            AI Concierge
          </span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-96 max-h-[580px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold flex items-center gap-1.5">
                  <span>AI Travel Concierge</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </h3>
                <p className="text-[10px] text-emerald-400 font-medium">Ground Conditions Intelligence</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-slate-50/70 text-xs max-h-[380px]">
            {messages.map((m: ChatMessage) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-brand-600 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200/80 shadow-xs rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1">{m.timestamp}</span>

                {/* Quick suggestions pills */}
                {m.suggestions && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {m.suggestions.map((s: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(s)}
                        className="text-[11px] font-medium bg-brand-50 text-brand-700 hover:bg-brand-100 border border-brand-200 px-2.5 py-1 rounded-full text-left transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-slate-400 text-xs py-1">
                <Bot className="w-3.5 h-3.5 animate-bounce text-brand-600" />
                <span>Concierge checking ground conditions...</span>
              </div>
            )}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
              placeholder="Ask about cabs, weather, packing..."
              className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            />
            <button
              type="submit"
              className="p-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
