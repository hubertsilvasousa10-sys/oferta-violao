
import React from 'react';
import { MODULES, BONUSES, TESTIMONIALS } from '../constants';

const SalesPage: React.FC = () => {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v2/exCM2OIbxCt2JbbNXKeI";

  // Links diretos fornecidos para os prints dos alunos
  const studentResults = [
    { url: "https://i.postimg.cc/xCH7fpKD/6.webp", label: "06" },
    { url: "https://i.postimg.cc/L4t7G79t/5.webp", label: "05" },
    { url: "https://i.postimg.cc/mkBdbLLk/4.webp", label: "04" },
    { url: "https://i.postimg.cc/3rFStv1C/3.webp", label: "03" },
    { url: "https://i.postimg.cc/YqXXHBJ0/2.webp", label: "02" },
    { url: "https://i.postimg.cc/L8wNJB4g/1.webp", label: "01" }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-indigo-500">
      
      {/* 1. Top Section - Hero & VSL */}
      <section className="relative pt-20 pb-16 px-4 bg-gradient-to-b from-indigo-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-bold tracking-wider uppercase">
            Treinamento 100% Online
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            O Método Definitivo para Dominar o Violão com <span className="text-indigo-500">Clareza e Liberdade</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Mesmo que você esteja começando do absoluto zero ou se sinta travado no nível intermediário há anos.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-yellow-500 font-bold">
            <div className="flex">
              {[1,2,3,4,5].map(i => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
            </div>
            <span>65.000+ alunos satisfeitos em todo o Brasil</span>
          </div>

          {/* VSL Wistia Embed */}
          <div className="relative aspect-video w-full max-w-3xl mx-auto bg-slate-900 rounded-3xl overflow-hidden border-4 border-slate-800 vsl-shadow">
            <iframe
              src="https://fast.wistia.net/embed/iframe/bzz2lmbz2v?seo=false&videoFoam=true"
              allow="autoplay; fullscreen"
              allowTransparency={true}
              frameBorder="0"
              scrolling="no"
              className="wistia_embed w-full h-full"
              name="wistia_embed"
              width="100%"
              height="100%"
              style={{ aspectRatio: '16/9' }}
            ></iframe>
          </div>

          <a href={checkoutUrl} className="inline-block px-12 py-5 bg-indigo-600 hover:bg-indigo-500 text-white text-2xl font-black rounded-2xl shadow-xl shadow-indigo-600/20 transform hover:-translate-y-1 transition-all active:scale-95">
            SIM! QUERO DOMINAR O INSTRUMENTO AGORA
          </a>
        </div>
      </section>

      {/* 2. Benefits Section */}
      <section className="py-20 px-4 border-y border-slate-800 bg-slate-900/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Flexibilidade Total", icon: "🕒", desc: "Assista onde e quando quiser, no seu próprio ritmo." },
            { title: "Didática Passo a Passo", icon: "👣", desc: "Do zero ao avançado sem pular etapas fundamentais." },
            { title: "Suporte Especializado", icon: "💬", desc: "Tire todas as suas dúvidas diretamente com quem entende." },
            { title: "Material de Apoio", icon: "📚", desc: "PDFs e guias visuais para acelerar sua memorização." },
            { title: "Alta Qualidade", icon: "🎥", desc: "Aulas em 4K com múltiplos ângulos de câmera." },
            { title: "Acesso Vitalício", icon: "💎", desc: "Pague uma vez e tenha o curso para sempre em sua conta." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-colors">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "Para Quem É" Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">Para quem é este treinamento?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Iniciantes", text: "Quem nunca tocou uma nota e quer aprender do jeito certo." },
              { label: "Estagnados", text: "Quem já toca mas sente que parou no tempo e não evolui mais." },
              { label: "Autodidatas", text: "Quem aprendeu sozinho mas sente falta de base e organização." }
            ].map((p, i) => (
              <div key={i} className="p-6 bg-slate-800 rounded-xl border border-indigo-900/30">
                <div className="text-indigo-400 font-black mb-3 text-lg">#{i+1} {p.label}</div>
                <p className="text-slate-300">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Instructor Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1556449895-a33c9dba33dd?auto=format&fit=crop&q=80&w=800" 
                className="relative rounded-3xl shadow-2xl border-4 border-slate-800 aspect-[4/5] object-cover w-full bg-slate-800" 
                alt="Seu Mentor de Violão" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/musician/800/1000";
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black">Quem será seu mentor?</h2>
            <div className="h-1.5 w-20 bg-indigo-500 rounded-full mb-6"></div>
            <p className="text-lg text-slate-300 leading-relaxed">
              Com mais de 20 anos de experiência e criador de um dos maiores canais de educação musical do país, 
              ele dedicou a última década a simplificar o ensino do Violão.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Após ver milhares de alunos frustrados com métodos tradicionais, lentos e puramente teóricos, ele desenvolveu uma metodologia visual e prática 
              que permite que qualquer pessoa toque sua primeira música em tempo recorde.
            </p>
            <div className="flex gap-4 items-center pt-4">
              <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/150?u=mentor${i}`} className="w-12 h-12 rounded-full border-2 border-slate-900" alt=""/>)}
              </div>
              <div>
                <p className="text-sm font-bold text-white">Líder em Educação Musical</p>
                <p className="text-xs text-slate-400">+65.000 Alunos Transformados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Modules Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12">O que você vai aprender:</h2>
          <div className="space-y-4">
            {MODULES.map((m, i) => (
              <div key={i} className="group bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:bg-slate-700/50 transition-all cursor-default">
                <div className="flex justify-between items-center">
                   <div>
                     <span className="text-indigo-500 font-bold block mb-1">Módulo 0{i+1}</span>
                     <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-indigo-400 transition-colors">{m.title}</h3>
                   </div>
                   <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-indigo-500">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
                   </div>
                </div>
                <p className="mt-4 text-slate-400 hidden group-hover:block transition-all duration-300">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bonuses */}
      <section className="py-20 px-4 bg-indigo-600 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 underline decoration-white/30">PRESENTES EXCLUSIVOS PARA VOCÊ HOJE</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {BONUSES.map((b, i) => (
              <div key={i} className="bg-white/10 p-8 rounded-3xl border border-white/20 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>
                <div className="text-sm font-bold bg-white text-indigo-600 px-3 py-1 rounded-full inline-block mb-4">BÔNUS 0{i+1}</div>
                <h3 className="text-xl font-black mb-3 leading-tight">{b.title}</h3>
                <p className="text-indigo-100 text-sm mb-6">{b.description}</p>
                <div className="text-sm">
                  De: <span className="line-through">R$ {Math.round(b.originalPrice/2)},00</span><br/>
                  Por: <span className="font-bold text-yellow-300">R$ 0,00 (GRÁTIS)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-20 px-4 bg-slate-900/50">
         <div className="max-w-6xl mx-auto">
           <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-widest text-slate-500">Resultados Reais de Pessoas Comuns</h2>
           
           {/* Depoimentos em Texto */}
           <div className="columns-1 md:columns-3 gap-6 space-y-6 mb-20">
             {TESTIMONIALS.concat(TESTIMONIALS).map((t, idx) => (
               <div key={idx} className="break-inside-avoid bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
                 <div className="flex items-center gap-3 mb-4">
                    <img src={`https://i.pravatar.cc/150?u=test${idx}`} className="w-10 h-10 rounded-full" alt=""/>
                    <div>
                      <h4 className="font-bold text-sm">{t.name}</h4>
                      <p className="text-[10px] text-slate-500">{t.location}</p>
                    </div>
                 </div>
                 <p className="text-slate-300 text-sm italic leading-relaxed">"{t.text}"</p>
               </div>
             ))}
           </div>

           {/* Galeria de Fotos de Alunos (Prints do WhatsApp) */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studentResults.map((result, index) => (
                <div key={index} className="group relative overflow-hidden rounded-3xl border-4 border-slate-800 shadow-2xl transition-all duration-300 hover:border-indigo-500/50">
                  <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-white">
                    <img 
                      src={result.url} 
                      alt={`Resultado Aluno ${result.label}`} 
                      className="w-full h-full object-contain md:object-cover transform transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-indigo-600 rounded-full text-[10px] font-black tracking-widest uppercase text-white shadow-lg border border-white/10">
                      Resultado #{result.label}
                    </span>
                  </div>
                </div>
              ))}
           </div>
         </div>
      </section>

      {/* 8. Guarantee */}
      <section className="py-20 px-4 border-y border-slate-800">
        <div className="max-w-3xl mx-auto text-center flex flex-col md:flex-row items-center gap-10">
          <div className="relative shrink-0">
             <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20"></div>
             <img 
               src="https://img.icons8.com/clouds/512/guarantee.png" 
               alt="Garantia Incondicional de 7 Dias" 
               className="relative w-48 h-48 transform hover:scale-110 transition-transform duration-500 object-contain" 
             />
          </div>
          <div className="text-left space-y-4">
            <h2 className="text-3xl font-black">Risco Zero: 7 Dias de Garantia</h2>
            <div className="h-1.5 w-16 bg-indigo-500 rounded-full"></div>
            <p className="text-lg text-slate-400">
              Eu confio tanto no meu método que te dou uma garantia incondicional. Se em até 7 dias você achar que o curso não é para você, basta um único e-mail e eu devolvo 100% do seu dinheiro. Sem perguntas, sem letras miúdas.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Pricing & CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-indigo-900/20">
        <div className="max-w-2xl mx-auto bg-slate-800 rounded-[3rem] p-10 md:p-16 border-4 border-indigo-600 shadow-3xl text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <svg className="w-40 h-40 fill-white" viewBox="0 0 24 24"><path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z"/></svg>
          </div>
          
          <h2 className="text-3xl font-black uppercase italic tracking-tighter">Recapitulando, você receberá:</h2>
          <ul className="text-left space-y-3 text-slate-300 text-sm">
            <li className="flex justify-between items-center">
              <span>✅ O Treinamento Completo</span> 
              <span className="font-bold">R$ 197,00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>✅ Acesso Premium</span> 
              <span className="font-bold">R$ 97,00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>✅ A Comunidade VIP</span> 
              <span className="font-bold">R$ 147,00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>✅ Bônus: Dedilhado Master</span> 
              <span className="font-bold">R$ 127,00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>✅ Bônus: As Cifras</span> 
              <span className="font-bold">R$ 97,00</span>
            </li>
            <li className="pt-4 border-t border-slate-700 flex justify-between font-black text-white text-lg">
              <span>VALOR TOTAL PERCEBIDO</span> 
              <span>R$ 665,00</span>
            </li>
          </ul>

          <div className="space-y-4 pt-4">
            <div className="inline-block px-4 py-1 bg-indigo-500/20 border border-indigo-500/40 rounded-full text-indigo-400 text-xs font-black uppercase tracking-widest">
              OFERTA DE ACESSO VITALÍCIO
            </div>
            <div className="space-y-1">
              <p className="text-slate-400 line-through text-lg">De R$ 665,00</p>
              <p className="text-xl font-bold text-green-400 uppercase tracking-tighter">Por Apenas um Pagamento Único de:</p>
              <div className="text-7xl md:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
                <span className="text-3xl md:text-5xl align-top">R$</span>15,99
              </div>
              <p className="text-slate-400 font-medium">Sem mensalidades • Acesso para sempre</p>
            </div>
          </div>

          <a href={checkoutUrl} className="block w-full py-7 bg-green-600 hover:bg-green-500 text-white text-3xl font-black rounded-3xl shadow-2xl shadow-green-600/40 transform hover:-translate-y-1 transition-all active:scale-95 uppercase tracking-tighter text-center">
            GARANTIR MEU ACESSO AGORA
          </a>
          
          <div className="flex flex-col items-center gap-4 pt-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Pagamento Seguro e Criptografado</p>
            <div className="flex justify-center gap-4 opacity-50 grayscale scale-75 md:scale-100">
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt=""/>
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6" alt=""/>
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt=""/>
               <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo%E2%80%94Pix.svg" className="h-6" alt=""/>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="py-12 px-4 bg-slate-950 text-slate-600 text-center text-sm border-t border-slate-900">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="uppercase font-bold tracking-widest text-slate-800">Cursos de Performance Musical • 2024</p>
          <div className="flex justify-center gap-8 text-[10px] uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-indigo-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Suporte</a>
          </div>
          <p className="max-w-xl mx-auto text-[9px] leading-relaxed">
            Este site não é afiliado ao Facebook, Google ou Instagram. Os resultados podem variar de pessoa para pessoa. Dedicação e prática constante são essenciais para o aprendizado musical.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default SalesPage;
