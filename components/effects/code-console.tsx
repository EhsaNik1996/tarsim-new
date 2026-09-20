"use client";

import { useEffect, useState } from "react";

const sequences = [
  ["const problem = observe(realNeed);", "const product = simplify(problem);", "ship(product);"],
  ["knowledge.connect(libraries);", "resources.organize();", "access.enable(\"everyone\");"],
  ["idea.prototype();", "prototype.test();", "team.ship();"],
];

export function CodeConsole() {
  const [sequence, setSequence] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setSequence((value) => (value + 1) % sequences.length), 3200); return () => window.clearInterval(timer); }, []);
  return <div className="w-full max-w-md overflow-hidden bg-ink/80 text-white border border-white/15 shadow-2xl backdrop-blur-xl p-5 rounded-2xl" aria-label="فرآیند ساخت ترسیم"><div className="flex items-center gap-2"><i className="size-2 bg-red-400 rounded-full"/><i className="size-2 bg-yellow-300 rounded-full"/><i className="size-2 bg-green-400 rounded-full"/><span className="font-mono text-xs text-white/40 ml-auto">tarsim.build</span></div><div className="font-mono text-sm leading-7 mt-5" key={sequence}>{sequences[sequence].map((line,index)=><p className="animate-blur-in text-left" dir="ltr" style={{animationDelay:`${index*160}ms`}} key={line}><span className="text-accent ml-2">›</span>{line}</p>)}</div><div className="flex items-center text-xs text-white/40 border-t border-white/10 mt-5 pt-4"><span className="relative flex size-2 ml-2"><i className="absolute inline-flex size-full animate-ping bg-green-400 opacity-70 rounded-full"/><i className="relative inline-flex size-2 bg-green-400 rounded-full"/></span>build system online</div></div>;
}
