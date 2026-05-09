import React, { useState, useMemo } from "react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Copy, 
  Check, 
  Languages, 
  Sparkles, 
  ChevronRight, 
  Filter,
  ArrowRight,
  Loader2,
  FileText,
  MousePointer2
} from "lucide-react";
import { PROMPTS, TRANSLATIONS } from "./constants";
import { Category } from "./types";

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function App() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [copyId, setCopyId] = useState<string | null>(null);
  
  // AI Enhancer state
  const [inputPrompt, setInputPrompt] = useState("");
  const [enhancedResult, setEnhancedResult] = useState("");
  const [isEnhancing, setIsEnhancing] = useState(false);

  const t = TRANSLATIONS[lang];

  // Filtering logic
  const filteredPrompts = useMemo(() => {
    return PROMPTS.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           p.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyId(id);
      setTimeout(() => setCopyId(null), 2000);
    });
  };

  const handleEnhance = async () => {
    if (!inputPrompt.trim() || isEnhancing) return;
    setIsEnhancing(true);
    try {
      const prompt = `
        You are an AI Prompt Engineer.
        The user wants to improve this simple idea: "${inputPrompt}"
        Convert it into a professional, structured, and high-quality prompt for business use.
        Use clear roles, context, and expected output format.
        Language: ${lang === "ko" ? "Korean" : "English"}.
        Output only the improved prompt text without any introductory chat.
      `;
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt
      });
      
      setEnhancedResult(response.text || "Failed to generate prompt.");
    } catch (error) {
      console.error("Enhance error:", error);
      setEnhancedResult("Error connecting to Gemini API.");
    } finally {
      setIsEnhancing(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-brand-primary/30">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass border-b border-zinc-800 py-4 px-6 md:px-12 flex justify-between items-center bg-zinc-950/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/20">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              PROMPT ARCHITECT
              <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full font-mono uppercase tracking-widest hidden sm:inline-block">v2.0</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
          <button 
            onClick={() => setLang("ko")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${lang === "ko" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-white"}`}
          >
            KOREAN
          </button>
          <button 
            onClick={() => setLang("en")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${lang === "en" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-white"}`}
          >
            ENGLISH
          </button>
        </div>
      </nav>

      <main className="max-w-[1600px] mx-auto px-6 md:px-12 py-10">
        <section className="mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight tracking-tighter">
                {t.title}
              </h2>
              <p className="text-lg text-zinc-400 font-light max-w-xl">
                {t.subtitle}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* AI Enhancer (Main Card) */}
          <section className="lg:col-span-5 bento-card p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{t.enhancerTitle}</h3>
            </div>

            <div className="flex-1 flex flex-col gap-6">
              <div className="space-y-4 flex-1 flex flex-col">
                <textarea
                  value={inputPrompt}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  placeholder={t.enhancerPlaceholder}
                  className="w-full flex-1 min-h-[150px] bg-zinc-950 border border-zinc-800 rounded-2xl p-5 text-lg text-zinc-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all resize-none font-light placeholder:text-zinc-600"
                />
                <button
                  onClick={handleEnhance}
                  disabled={isEnhancing || !inputPrompt.trim()}
                  className="w-full py-5 bg-brand-primary hover:bg-brand-secondary disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-primary/20 active:scale-[0.98]"
                >
                  {isEnhancing ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Sparkles className="w-5 h-5" />
                  )}
                  {t.enhanceButton}
                </button>
              </div>

              {enhancedResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800"
                >
                  <p className="text-lg leading-relaxed text-zinc-300 whitespace-pre-wrap mb-4 font-light">
                    {enhancedResult}
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => copyToClipboard(enhancedResult, "enhanced")}
                      className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl flex items-center gap-2 transition-all group"
                    >
                      {copyId === "enhanced" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400 group-hover:text-white" />}
                      <span className="text-[10px] font-bold uppercase tracking-widest">{t.labels.copy}</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </section>

          {/* Prompt Library */}
          <section className="lg:col-span-7 space-y-6">
            {/* Search and Filter Row */}
            <div className="bento-card p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full md:w-auto no-scrollbar">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === "all" 
                    ? "bg-brand-primary text-white" 
                    : "bg-zinc-950 text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  ALL
                </button>
                {(Object.keys(t.categories) as Category[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      selectedCategory === cat 
                      ? "bg-brand-primary text-white" 
                      : "bg-zinc-950 text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    {t.categories[cat].toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:ring-1 focus:ring-brand-primary/50 outline-none transition-all placeholder:text-zinc-600"
                />
              </div>
            </div>

            {/* Prompts Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredPrompts.map((prompt, idx) => (
                  <motion.div
                    layout
                    key={prompt.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, delay: idx * 0.03 }}
                    className="bento-card p-6 flex flex-col group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-[10px] font-bold text-brand-primary uppercase tracking-widest mb-1">
                          {t.categories[prompt.category]}
                        </h4>
                        <p className="text-xl font-bold text-white leading-tight group-hover:text-brand-primary transition-colors">
                          {prompt.title}
                        </p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(prompt.content, prompt.id)}
                        className="p-2 bg-zinc-950 hover:bg-brand-primary text-zinc-500 hover:text-white rounded-lg transition-all"
                        title={t.labels.copy}
                      >
                         {copyId === prompt.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                       <span className="flex items-center gap-1">
                         <MousePointer2 className="w-3 h-3" /> {prompt.role}
                       </span>
                       <span className="flex items-center gap-1">
                         <Filter className="w-3 h-3" /> {prompt.type}
                       </span>
                    </div>

                    <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800 flex-1 overflow-hidden">
                      <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed font-light italic">
                        "{prompt.content}"
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredPrompts.length === 0 && (
              <div className="bento-card py-20 text-center">
                <FileText className="w-12 h-12 text-zinc-800 mx-auto mb-4" />
                <p className="text-zinc-500 font-medium">No prompts matching your search.</p>
              </div>
            )}
          </section>
        </div>
      </main>

      <footer className="max-w-[1600px] mx-auto px-6 md:px-12 py-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 font-mono tracking-widest uppercase gap-4">
        <div className="flex gap-8">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> SYSTEM STATUS: OPTIMIZED</span>
          <span>MEMORY: 12GB FREE</span>
        </div>
        <div>
          © 2026 PROMPT ARCHITECT • BUILT FOR PRODUCTIVITY
        </div>
      </footer>
    </div>
  );
}
