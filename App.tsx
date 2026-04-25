import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Volume2, 
  ChevronRight, 
  X, 
  Trophy, 
  Play, 
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle
} from 'lucide-react';
import { LEVELS, VOCABULARY } from './constants';
import { Exercise, Level, ExerciseType } from './types';

// Components
const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-[0_0_15px_rgba(96,165,250,0.5)]"
    />
  </div>
);

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false,
  className = '' 
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  disabled?: boolean;
  className?: string;
}) => {
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/20',
    secondary: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10',
    outline: 'border-2 border-indigo-500/50 hover:border-indigo-400 text-white hover:bg-indigo-500/10',
    ghost: 'text-white/60 hover:text-white hover:bg-white/5',
    danger: 'bg-rose-600 hover:bg-rose-500 text-white'
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02, translateY: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-2xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default function App() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number | null>(null);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [lives, setLives] = useState(10);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [scrambledSelected, setScrambledSelected] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentLevel = currentLevelIndex !== null ? LEVELS[currentLevelIndex] : null;
  const currentExercise = currentLevel?.exercises[exerciseIndex];

  // TTS
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleCheck = () => {
    if (!currentExercise) return;

    let isCorrect = false;
    if (currentExercise.type === 'SCRAMBLE') {
      isCorrect = scrambledSelected.join(' ') === currentExercise.target;
    } else {
      isCorrect = selectedOption?.toLowerCase() === currentExercise.target.toLowerCase();
    }

    if (isCorrect) {
      setFeedback('correct');
      if (currentExercise.audioText) speak(currentExercise.audioText);
    } else {
      setFeedback('incorrect');
      setLives(prev => {
        const next = prev - 1;
        if (next <= 0) setIsGameOver(true);
        return next;
      });
    }
  };

  const nextExercise = () => {
    setFeedback(null);
    setSelectedOption(null);
    setScrambledSelected([]);
    
    if (currentLevel && exerciseIndex < currentLevel.exercises.length - 1) {
      setExerciseIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const restart = () => {
    setLives(10);
    setExerciseIndex(0);
    setFeedback(null);
    setSelectedOption(null);
    setScrambledSelected([]);
    setIsGameOver(false);
    setIsComplete(false);
  };

  if (currentLevelIndex === null) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(30,58,138,0.2),_transparent_70%)]" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 2000 - 1000, 
                y: Math.random() * 2000 - 1000,
                opacity: Math.random() 
              }}
              animate={{ 
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 2 + Math.random() * 4, 
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center max-w-2xl w-full"
        >
          <h1 className="text-5xl font-black mb-8 tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Տիեզերական Ճանապարհորդություն
          </h1>
          <p className="text-white/40 mb-12 text-lg">Ընտրեք թեման իսպաներեն սովորելու համար</p>
          
          <div className="grid gap-4 w-full">
            {LEVELS.map((level, idx) => (
              <motion.button
                key={level.id}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentLevelIndex(idx)}
                className="group relative flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 rounded-3xl border border-white/5 transition-all"
              >
                <div className="text-left">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-1">Մակարդակ {level.id}</span>
                  <h3 className="text-xl font-bold">{level.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                  <Play className="w-5 h-5 text-white" fill="currentColor" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  if (isGameOver) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-6 relative">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center z-10">
          <XCircle className="w-24 h-24 text-rose-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Վա՜յ: Կյանքերը վերջացան</h1>
          <p className="text-white/60 mb-12">Մի՛ հանձնվեք, նորից փորձեք:</p>
          <Button onClick={restart} className="w-64">Կրկնել</Button>
          <Button variant="ghost" onClick={() => setCurrentLevelIndex(null)} className="w-64 mt-4">Մենյու</Button>
        </motion.div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-6 relative">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center z-10">
          <Trophy className="w-32 h-32 text-amber-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Առաքելությունն ավարտված է:</h1>
          <p className="text-white/60 mb-12">Դուք հաջողությամբ ավարտեցիք մակարդակը՝ {currentLevel?.title}</p>
          <Button onClick={() => setCurrentLevelIndex(null)} className="w-64">Շարունակել ճանապարհը</Button>
        </motion.div>
      </div>
    );
  }

  const progress = (exerciseIndex / (currentLevel?.exercises.length || 1)) * 100;

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans flex flex-col">
      {/* Header */}
      <header className="p-4 md:p-6 flex items-center gap-6 max-w-4xl mx-auto w-full">
        <button onClick={() => setCurrentLevelIndex(null)} className="text-white/40 hover:text-white transition-colors">
          <X className="w-8 h-8" />
        </button>
        <ProgressBar progress={progress} />
        <div className="flex items-center gap-2 text-rose-500 font-bold min-w-[60px]">
          <Heart className="w-6 h-6 fill-current" />
          <span className="text-xl">{lives}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-12 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentExercise?.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full flex flex-col gap-8"
          >
            {/* Instruction */}
            <h2 className="text-2xl font-bold text-center md:text-3xl">
              {currentExercise?.instruction}
            </h2>

            {/* Prompt Area */}
            <div className="flex items-center justify-center gap-4 bg-white/5 p-8 rounded-[40px] border border-white/5 relative group">
              {currentExercise?.audioText && (
                <button 
                  onClick={() => speak(currentExercise.audioText!)}
                  className="w-14 h-14 rounded-2xl bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 hover:scale-105 transition-transform"
                >
                  <Volume2 className="w-6 h-6 text-white" />
                </button>
              )}
              <p className="text-3xl font-medium tracking-wide">{currentExercise?.prompt}</p>
            </div>

            {/* Answers Interaction */}
            <div className="flex flex-col gap-4 mt-4">
              {currentExercise?.type === 'SELECT' && (
                <div className="grid gap-3">
                  {currentExercise.choices?.map(choice => (
                    <button
                      key={choice}
                      onClick={() => !feedback && setSelectedOption(choice)}
                      className={`
                        w-full p-5 rounded-2xl text-lg font-bold border-2 transition-all text-left flex items-center justify-between
                        ${selectedOption === choice ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400' : 'border-white/10 hover:border-white/30 bg-white/5'}
                        ${feedback && choice === currentExercise.target ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : ''}
                      `}
                    >
                      {choice}
                      {selectedOption === choice && <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white">✓</div>}
                    </button>
                  ))}
                </div>
              )}

              {currentExercise?.type === 'IMAGE_SELECT' && (
                <div className="grid grid-cols-2 gap-4">
                  {currentExercise.choices?.map(choice => (
                    <button
                      key={choice}
                      onClick={() => !feedback && setSelectedOption(choice)}
                      className="
                        aspect-square p-2 rounded-3xl border-2 transition-all flex flex-col items-center justify-center gap-2
                        border-white/10 bg-white/5
                      "
                    >
                      <div className="w-full h-full bg-white/5 rounded-2xl flex items-center justify-center">
                        {currentExercise.image ? <img src={currentExercise.image} alt={choice} className="w-full h-full object-cover rounded-2xl opacity-80" /> : <HelpCircle className="w-12 h-12 text-white/10" />}
                      </div>
                      <span className="font-bold">{choice}</span>
                    </button>
                  ))}
                </div>
              )}

              {currentExercise?.type === 'FILL' && (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  {currentExercise.choices?.map(choice => (
                    <button
                      key={choice}
                      onClick={() => !feedback && setSelectedOption(choice)}
                      className={`
                        p-4 rounded-xl font-bold border-2 transition-all
                        ${selectedOption === choice ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400' : 'border-white/10 bg-white/5'}
                      `}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              )}

              {currentExercise?.type === 'SCRAMBLE' && (
                <div className="flex flex-col gap-8">
                  {/* Selected words line */}
                  <div className="flex flex-wrap gap-2 min-h-[60px] p-4 border-b-2 border-white/10">
                    {scrambledSelected.map((word, idx) => (
                      <motion.button
                        key={`${word}-${idx}`}
                        layoutId={`${word}-${idx}`}
                        onClick={() => {
                          if (feedback) return;
                          setScrambledSelected(prev => prev.filter((_, i) => i !== idx));
                        }}
                        className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-xl font-bold border border-indigo-500/30"
                      >
                        {word}
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* Word bank */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {currentExercise.scrambledWords?.filter(w => {
                      const countInSelected = scrambledSelected.filter(sw => sw === w).length;
                      const totalInOriginal = currentExercise.scrambledWords?.filter(ow => ow === w).length || 0;
                      return countInSelected < totalInOriginal;
                    }).map((word, idx) => (
                      <motion.button
                        key={`${word}-bank-${idx}`}
                        layoutId={`${word}-bank-${idx}`}
                        onClick={() => {
                          if (feedback) return;
                          setScrambledSelected(prev => [...prev, word]);
                        }}
                        className="px-6 py-3 bg-white/5 rounded-2xl font-bold border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        {word}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {currentExercise?.type === 'MATCH' && (
                <div className="text-center p-12 bg-indigo-500/5 rounded-3xl border border-indigo-500/10">
                  <p className="text-indigo-400 font-bold mb-4">ԿՐԿՆՈՒԹՅԱՆ ՌԵԺԻՄ</p>
                  <h3 className="text-2xl font-bold">{currentExercise.prompt}</h3>
                  <p className="text-white/60 mt-2">{currentExercise.translation}</p>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer / Feedback */}
      <footer className="p-6 max-w-4xl mx-auto w-full">
        {!feedback ? (
          <Button 
            disabled={
              (!selectedOption && currentExercise?.type !== 'SCRAMBLE' && currentExercise?.type !== 'MATCH') ||
              (currentExercise?.type === 'SCRAMBLE' && scrambledSelected.length === 0)
            }
            onClick={currentExercise?.type === 'MATCH' ? nextExercise : handleCheck}
            className="w-full py-5 text-xl tracking-wide"
          >
            {currentExercise?.type === 'MATCH' ? 'ՀԱՍԿԱՆԱԼԻ Է' : 'ՍՏՈՒԳԵԼ'}
          </Button>
        ) : (
          <motion.div 
            initial={{ y: 100 }} 
            animate={{ y: 0 }} 
            className={`fixed bottom-0 left-0 right-0 p-8 pt-10 pb-12 z-50 rounded-t-[40px] shadow-2xl ${
              feedback === 'correct' ? 'bg-[#065f46]' : 'bg-[#991b1b]'
            }`}
          >
            <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 ${
                   feedback === 'correct' ? 'bg-emerald-400/20' : 'bg-rose-400/20'
                }`}>
                  {feedback === 'correct' ? (
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  ) : (
                    <XCircle className="w-10 h-10 text-rose-400" />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    {feedback === 'correct' ? 'Ճիշտ է!' : 'Սխալ է'}
                  </h3>
                  <p className="text-white/70">
                    {feedback === 'correct' ? currentExercise?.translation : `Ճիշտը՝ ${currentExercise?.target}`}
                  </p>
                </div>
              </div>
              <Button 
                onClick={nextExercise} 
                className={`w-full md:w-auto px-12 ${
                  feedback === 'correct' ? 'bg-emerald-400 hover:bg-emerald-300 text-[#065f46]' : 'bg-rose-400 hover:bg-rose-300 text-[#991b1b]'
                }`}
              >
                ՀԱՋՈՐԴԸ
              </Button>
            </div>
          </motion.div>
        )}
      </footer>
    </div>
  );
}
