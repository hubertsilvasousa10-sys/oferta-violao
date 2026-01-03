import React, { useState, useEffect } from 'react';

const SpecialOffer: React.FC = () => {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v2/exCM2OIbxCt2JbbNXKeI"; // Recomendado atualizar para o link de 10 reais no futuro
  
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-orange-500">
      {/* No-index meta handled via useEffect logic if needed, but SPA prevents standard crawling of this state easily */}
      
      {/* Header Alerta */}
      <div className="bg-orange-600 text-white text-center py-3 px-4 font-black uppercase tracking-tighter animate-pulse text-sm md:text-base">
        ⚠️ ESPERE! NÃO FECHE ESTA PÁGINA. ESTA É SUA ÚLTIMA CHANCE.
      </div>

      <section className="pt-12 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-black leading-tight text-white italic">
              🎁 Oferta Especial de <span className="text-orange-500 underline decoration-orange-500/30">Última Chance</span> – DESCONTO EXCLUSIVO
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Você quase saiu… então liberamos algo exclusivo para você. <br className="hidden md:block" />
              Garante o acesso agora pelo menor preço possível.
            </h2>
          </div>

          {/* Timer Card */}
          <div className="inline-flex items-center gap-4 bg-slate-900 border-2 border-orange-600/50 px-8 py-4 rounded-3xl shadow-2xl shadow-orange-600/10">
            <div className="text-left">
              <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Oferta expira em:</p>
              <p className="text-4xl font-black font-mono tracking-tighter">{formatTime(timeLeft)}</p>
            </div>
            <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
          </div>

          {/* Texto de Apoio */}
          <div className="max-w-2xl mx-auto bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-800">
            <p className="text-lg text-slate-300 leading-relaxed">
              Sim, é isso mesmo. Você sabe quanto custa o valor original. <br />
              Agora você pode garantir por um preço irrisório – oferta única, exclusiva e que não estará disponível novamente. <br />
              <span className="text-white font-bold">Se você recusar aqui, o preço volta ao normal.</span>
            </p>
          </div>

          {/* Benefícios Visuais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {[
              "Acesso imediato e vitalício",
              "Mesmos bônus da oferta principal",
              "Mesma entrega e qualidade 4K",
              "Tudo igual à oferta original",
              "Diferença: Preço reduzido de última hora"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-sm font-bold text-slate-200">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Pricing Box */}
          <div className="bg-white text-slate-950 p-10 md:p-14 rounded-[3.5rem] shadow-[0_0_60px_rgba(255,102,0,0.2)] relative overflow-hidden max-w-lg mx-auto transform hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 right-0 bg-orange-600 text-white px-6 py-2 rounded-bl-3xl font-black text-xs uppercase tracking-widest">
              DESCONTO FINAL
            </div>
            
            <p className="text-slate-400 line-through text-xl font-bold mb-1">De R$ 29,99</p>
            <p className="text-orange-600 font-black uppercase tracking-tighter text-sm mb-4">ÚLTIMA OPORTUNIDADE POR:</p>
            
            <div className="flex items-start justify-center gap-1 mb-8">
              <span className="text-3xl md:text-5xl font-black mt-2">R$</span>
              <span className="text-8xl md:text-9xl font-black tracking-tighter">10</span>
              <span className="text-3xl md:text-5xl font-black mt-2">,00</span>
            </div>

            <a href={checkoutUrl} className="block w-full py-6 bg-orange-600 hover:bg-orange-500 text-white text-2xl md:text-3xl font-black rounded-3xl shadow-2xl shadow-orange-600/40 transform hover:-translate-y-1 transition-all active:scale-95 uppercase tracking-tighter text-center">
              🔒 Garantir Agora por R$ 10,00
            </a>

            <div className="mt-8 flex flex-col items-center gap-4">
               <img src="https://img.icons8.com/clouds/200/guarantee.png" className="w-24 h-24" alt="Selo de Garantia"/>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest max-w-xs leading-relaxed">
                 Garantia Incondicional de 7 Dias. Seu risco é zero ou seu dinheiro de volta.
               </p>
            </div>
          </div>
          
          <p className="text-slate-600 text-xs font-bold uppercase tracking-[0.2em]">
            Não, eu prefiro perder essa oportunidade e pagar o preço cheio depois →
          </p>
        </div>
      </section>

      {/* Footer minimalista para a oferta */}
      <footer className="py-12 border-t border-slate-900 text-center opacity-30 grayscale">
         <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <div className="flex justify-center gap-4">
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt=""/>
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt=""/>
               <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo%E2%80%94Pix.svg" className="h-4" alt=""/>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest">Ambiente de Pagamento 100% Seguro</p>
         </div>
      </footer>
    </div>
  );
};

export default SpecialOffer;