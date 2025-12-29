
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';

interface QuizProps {
  onComplete: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0); // 0-5: Questions, 6: Auth, 7: Benefits Recap, 8: Audio, 9: Result
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const totalSteps = 10;

  const handleOptionSelect = (option: string) => {
    if (feedback) return;
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (!selectedOption || feedback) return;

    setFeedback(QUIZ_QUESTIONS[step].feedback);
    
    setTimeout(() => {
      setFeedback(null);
      setSelectedOption(null);
      setIsTransitioning(true);
      setTimeout(() => {
        setStep(step + 1);
        setIsTransitioning(false);
      }, 500);
    }, 2000);
  };

  const nextTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(step + 1);
      setIsTransitioning(false);
    }, 500);
  };

  const renderPlayIcon = () => (
    <div className="flex justify-center mb-6">
      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#FF6600] to-[#E63946] rounded-2xl shadow-xl shadow-orange-500/40 flex items-center justify-center transform hover:scale-105 transition-transform duration-300 group cursor-default">
        <div className="absolute inset-0 bg-white/10 rounded-2xl transform translate-y-1"></div>
        <div className="absolute inset-0 border-t-2 border-white/30 rounded-2xl"></div>
        <svg 
          className="w-8 h-8 md:w-10 md:h-10 text-white fill-current translate-x-1 drop-shadow-md" 
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );

  const renderProgress = () => {
    const isFinished = step === totalSteps - 1;
    const progress = (step / (totalSteps - 1)) * 100;
    
    return (
      <div className="w-full max-w-sm mx-auto mb-8 text-center">
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden shadow-inner">
          <div 
            className="bg-[#FF6600] h-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,102,0,0.5)]" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 text-[12px] font-black text-[#FF6600] uppercase tracking-widest flex justify-between items-center px-1">
          <span>{step === 0 ? "Início" : `${Math.round(progress)}%`}</span>
          <span>{isFinished ? "Concluído" : "Evoluindo..."}</span>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (step < 6) {
      const q = QUIZ_QUESTIONS[step];
      return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {step === 0 && (
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-1 bg-orange-100 text-[#FF6600] text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                ⏱️ Leva menos de 1 minuto
              </span>
            </div>
          )}
          <h2 className="text-2xl md:text-3xl font-black text-center leading-tight text-[#333333] tracking-tight">
            {q.question}
          </h2>
          <div className="grid gap-3">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                disabled={!!feedback}
                onClick={() => handleOptionSelect(opt)}
                className={`w-full p-5 text-center font-bold rounded-2xl border-2 transition-all duration-200 text-lg shadow-sm ${
                  selectedOption === opt 
                    ? 'border-[#FF6600] bg-orange-50 text-[#FF6600] translate-y-[-2px]' 
                    : 'border-gray-100 bg-white text-gray-600 hover:border-orange-200 hover:bg-orange-50/20'
                } ${feedback ? 'opacity-50 cursor-not-allowed' : 'active:scale-[0.98]'}`}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="pt-4">
            <button
              disabled={!selectedOption || !!feedback}
              onClick={handleNext}
              className={`w-full py-5 rounded-2xl font-black text-xl transition-all shadow-xl active:scale-95 uppercase tracking-tighter ${
                !selectedOption || feedback 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none' 
                  : 'bg-[#FF6600] text-white hover:bg-[#e65c00] shadow-orange-500/30'
              }`}
            >
              CONTINUAR
            </button>
          </div>

          {feedback && (
            <div className="mt-4 p-5 bg-orange-50 border border-orange-100 rounded-2xl text-center text-[#FF6600] font-bold animate-bounce shadow-sm">
              {feedback}
            </div>
          )}
        </div>
      );
    }

    if (step === 6) {
      return (
        <div className="text-center space-y-8 py-4 animate-in fade-in duration-700">
          <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto flex items-center justify-center text-5xl shadow-inner">⚡</div>
          <h2 className="text-3xl font-black text-[#333333]">Análise em Tempo Real</h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium">
            Estamos cruzando seus dados com a nossa metodologia para criar seu plano personalizado...
          </p>
          <button 
            onClick={nextTransition} 
            className="w-full py-5 bg-[#FF6600] text-white rounded-2xl font-black text-lg shadow-xl shadow-orange-500/20 active:scale-95 transition-transform"
          >
            VER RESULTADOS PARCIAIS
          </button>
        </div>
      );
    }

    if (step === 7) {
      return (
        <div className="space-y-6 py-4 text-center animate-in slide-in-from-right-8 duration-500">
          <h2 className="text-3xl font-black text-[#333333]">Diagnóstico Preparado:</h2>
          <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl text-left space-y-5">
            {[
              "Acesso ao Método Passo a Passo",
              "Guia Visual de Visualização",
              "Módulos de Fluência e Técnica"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</span>
                <span className="font-bold text-gray-700">{item}</span>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-50 space-y-5">
              {[
                "Cifras e Playbacks Premium",
                "Acesso à Comunidade VIP"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-orange-100 text-[#FF6600] rounded-full flex items-center justify-center font-bold">★</span>
                  <span className="font-bold text-[#FF6600]">BÔNUS: {item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-6">
            <p className="font-extrabold text-gray-500 mb-6 uppercase tracking-widest text-xs">Deseja desbloquear seu cronograma completo?</p>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={nextTransition}
                className="py-5 bg-[#FF6600] text-white rounded-2xl font-black text-xl shadow-lg hover:bg-[#e65c00] transition-colors active:scale-95"
              >
                SIM
              </button>
              <button 
                onClick={nextTransition}
                className="py-5 bg-gray-100 text-gray-500 rounded-2xl font-black text-xl hover:bg-gray-200 transition-colors active:scale-95"
              >
                NÃO
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (step === 8) {
      return (
        <div className="space-y-8 text-center py-4 animate-in fade-in zoom-in duration-500">
          <div className="bg-orange-50 p-10 rounded-[2.5rem] border-2 border-dashed border-orange-200 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
               <svg className="w-20 h-20 fill-[#FF6600]" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
             </div>
             <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 bg-[#FF6600] rounded-full flex items-center justify-center shadow-xl shadow-orange-500/40">
                   <svg className="w-9 h-9 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <div className="flex-1 text-left">
                   <p className="font-black text-[#333333] text-lg">Aviso Importante</p>
                   <p className="text-xs text-orange-500 font-black uppercase tracking-[0.2em]">Escute Agora</p>
                </div>
             </div>
             <p className="text-left text-gray-600 text-lg leading-relaxed italic font-medium">
               "Parabéns pela sua dedicação! Analisamos suas respostas e identificamos exatamente onde você está travando. Preparamos uma solução exclusiva que vai acelerar sua evolução em até 10x. Clique no botão abaixo para ver o resultado final."
             </p>
          </div>
          <button 
            onClick={nextTransition} 
            className="w-full py-6 bg-[#FF6600] text-white rounded-3xl font-black text-2xl animate-pulse shadow-2xl shadow-orange-500/40 active:scale-95 uppercase tracking-tighter"
          >
            VER MEU RESULTADO FINAL
          </button>
        </div>
      );
    }

    if (step === 9) {
      return (
        <div className="text-center space-y-10 py-4 animate-in zoom-in duration-700">
          <div className="space-y-2">
            <h2 className="text-5xl md:text-6xl font-black text-[#FF6600] tracking-tighter italic">PERFIL APROVADO!</h2>
            <div className="h-1.5 w-24 bg-[#FF6600] mx-auto rounded-full"></div>
          </div>
          <div className="p-10 bg-white border-4 border-[#FF6600] rounded-[3rem] shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <p className="text-2xl md:text-3xl font-black leading-tight text-[#333333]">
              Parabéns! Você está apto a ingressar no <span className="text-[#FF6600] underline decoration-orange-200">Próximo Nível</span> hoje mesmo.
            </p>
          </div>
          <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px]">
            Sua oferta exclusiva expira em poucos minutos
          </p>
          <button 
            onClick={onComplete}
            className="w-full py-7 bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-[2.5rem] font-black text-3xl shadow-2xl shadow-orange-500/50 transition-all active:scale-95 uppercase tracking-tighter"
          >
            ACESSAR MINHA SOLUÇÃO
          </button>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[#FDFDFD]">
      <div className={`max-w-md w-full transition-all duration-700 ${isTransitioning ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
        {renderPlayIcon()}
        {renderProgress()}
        <div className="relative">
          {renderContent()}
        </div>
        
        {/* Footer de Direitos Reservados */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © 2024 Todos os Direitos Reservados • Tecnologia Verificada
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
