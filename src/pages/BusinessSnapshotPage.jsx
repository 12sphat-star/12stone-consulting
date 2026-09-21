import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Download, LockKeyhole, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from '../components/shared/Button';
import { snapshotQuestions } from '../data/businessSnapshot';
import { calculateSnapshot, getBriefData } from '../utils/businessSnapshot';
import '../styles/BusinessSnapshot.css';

const STORAGE_KEY = '12stone-business-snapshot';

const ScoreBar = ({ score }) => <div className="snapshot-score-bar"><span style={{ width: `${score}%` }} /></div>;

const SnapshotHeader = ({ progress, mode }) => (
  <header className="snapshot-header">
    <div className="snapshot-brand"><span>12</span><div><strong>12 Stone Consulting</strong><small>Business Snapshot™</small></div></div>
    {mode === 'quiz' && <div className="snapshot-progress"><span>{progress}% complete</span><div><i style={{ width: `${progress}%` }} /></div></div>}
  </header>
);

export const BusinessSnapshotPage = () => {
  const [mode, setMode] = useState('quiz');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').answers || {};
    } catch {
      return {};
    }
  });
  const [contact, setContact] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').contact || { name: '', business: '', email: '' };
    } catch {
      return { name: '', business: '', email: '' };
    }
  });
  const [brief, setBrief] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const question = snapshotQuestions[questionIndex];
  const analysis = useMemo(() => calculateSnapshot(answers), [answers]);
  const progress = Math.round(((questionIndex + 1) / snapshotQuestions.length) * 100);

  const chooseAnswer = (value) => {
    setAnswers((current) => ({ ...current, [question.id]: value }));
  };

  const nextQuestion = () => {
    if (!answers[question.id]) return;
    if (questionIndex === snapshotQuestions.length - 1) {
      setMode('results');
      return;
    }
    setQuestionIndex((current) => current + 1);
  };

  const restart = () => {
    setAnswers({});
    setContact({ name: '', business: '', email: '' });
    setBrief(null);
    setQuestionIndex(0);
    setMode('quiz');
    localStorage.removeItem(STORAGE_KEY);
  };

  const saveAndCreateBrief = (event) => {
    event.preventDefault();
    const nextBrief = getBriefData(answers, contact);
    setBrief(nextBrief);
    setMode('brief');
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, contact }));
  };

  return (
    <main className="business-snapshot-page">
      <div className="snapshot-shell">
        <SnapshotHeader progress={progress} mode={mode} />

        {mode === 'quiz' && (
          <section className="snapshot-quiz" aria-labelledby="snapshot-question">
            <div className="snapshot-quiz-intro"><span className="home-eyebrow"><Sparkles size={14} /> A quick business diagnostic</span><p>Ten practical questions. No jargon, no fake precision, and no commitment.</p></div>
            <div className="snapshot-question-meta"><span>{question.category}</span><strong>{String(questionIndex + 1).padStart(2, '0')} <small>/ {String(snapshotQuestions.length).padStart(2, '0')}</small></strong></div>
            <h1 id="snapshot-question">{question.prompt}</h1>
            <p className="snapshot-question-helper">Choose the statement that feels most like your business today.</p>
            <div className="snapshot-options" role="radiogroup" aria-label={question.prompt}>
              {question.options.map((option, index) => <button key={option} type="button" role="radio" aria-checked={answers[question.id] === index + 1} className={answers[question.id] === index + 1 ? 'selected' : ''} onClick={() => chooseAnswer(index + 1)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{option}</strong>{answers[question.id] === index + 1 && <Check size={18} />}</button>)}
            </div>
            <div className="snapshot-quiz-actions"><Button type="button" variant="outline" onClick={() => setQuestionIndex((current) => Math.max(current - 1, 0))} disabled={questionIndex === 0} icon={ArrowLeft}>Back</Button><Button type="button" variant="brass" onClick={nextQuestion} disabled={!answers[question.id]} icon={ArrowRight}>{questionIndex === snapshotQuestions.length - 1 ? 'See my snapshot' : 'Continue'}</Button></div>
          </section>
        )}

        {mode === 'results' && (
          <section className="snapshot-results" aria-labelledby="snapshot-results-title">
            <div className="results-heading"><span className="home-eyebrow">Your business snapshot</span><h1 id="snapshot-results-title">A clearer view of how ready your business is to compete bigger.</h1><p>This is an informed starting point based on your answers, not a financial forecast or formal audit.</p></div>
            <div className="results-score-layout"><div className="overall-score"><span>Overall competitive readiness</span><strong>{analysis.overall}</strong><small>/ 100 · {analysis.rating}</small></div><div className="category-score-list">{analysis.categoryScores.map((category) => <div className="category-score" key={category.key}><div><strong>{category.label}</strong><span>{category.score} / 100 · {category.rating}</span></div><ScoreBar score={category.score} /></div>)}</div></div>
            <div className="results-insights"><div className="result-insight"><span>Strongest area</span><h2>{analysis.strongest.label}</h2><p>Your current foundation here can support the next improvement.</p></div><div className="result-insight opportunity"><span>Biggest opportunity</span><h2>{analysis.opportunity.label}</h2><p>This is the area most worth understanding before choosing a tool or initiative.</p></div></div>
            <div className="observations"><span className="overline">What your answers suggest</span>{analysis.observations.map((observation) => <p key={observation}><Check size={17} />{observation}</p>)}</div>
            <div className="results-next"><div><span className="overline">Want to know what to do about it?</span><h2>Turn this starting point into a useful Business Brief.</h2><p>Share a few details so we can keep your snapshot together. No sales form before value.</p></div><Button type="button" variant="brass" onClick={() => setMode('capture')} icon={ArrowRight}>Get my full Business Brief</Button></div>
            <button type="button" className="snapshot-restart" onClick={restart}><RotateCcw size={15} /> Start over</button>
          </section>
        )}

        {mode === 'capture' && (
          <section className="snapshot-capture" aria-labelledby="capture-title"><div className="capture-copy"><span className="home-eyebrow">A useful next step</span><h1 id="capture-title">Keep your snapshot and shape a more useful business brief.</h1><p>Your contact details are requested here because this is the point where the snapshot becomes a personalized record. There is no external submission in this first pass.</p><div className="capture-promise"><LockKeyhole size={18} /><span>Your answers stay in this browser for now. A secure delivery integration can be connected later.</span></div></div><form onSubmit={saveAndCreateBrief} className="capture-form"><label htmlFor="snapshot-name">Name<input id="snapshot-name" required value={contact.name} onChange={(event) => setContact({ ...contact, name: event.target.value })} /></label><label htmlFor="snapshot-business">Business name<input id="snapshot-business" required value={contact.business} onChange={(event) => setContact({ ...contact, business: event.target.value })} /></label><label htmlFor="snapshot-email">Email<input id="snapshot-email" required type="email" value={contact.email} onChange={(event) => setContact({ ...contact, email: event.target.value })} /></label><Button type="submit" variant="brass" icon={ArrowRight}>Create my Business Brief</Button><button type="button" className="capture-back" onClick={() => setMode('results')}><ArrowLeft size={15} /> Back to results</button></form></section>
        )}

        {mode === 'brief' && brief && (
          <section className="business-brief" aria-labelledby="brief-title"><div className="brief-topline"><span className="home-eyebrow">12 Stone Business Brief</span><button type="button" className="brief-print" onClick={() => window.print()}><Download size={16} /> Save / print brief</button></div><h1 id="brief-title">A practical starting point for {brief.contact.business}.</h1><p className="brief-lede">Prepared for {brief.contact.name}. This first-pass brief turns your Snapshot responses into a prioritized conversation, not a promise of unsupported results.</p><div className="brief-summary-grid"><div><span>Competitive readiness</span><strong>{brief.analysis.overall}<small>/100</small></strong><em>{brief.analysis.rating}</em></div><div><span>Strongest area</span><strong>{brief.analysis.strongest.label}</strong><em>{brief.analysis.strongest.score}/100</em></div><div><span>First priority</span><strong>{brief.analysis.opportunity.label}</strong><em>{brief.analysis.opportunity.score}/100</em></div></div><div className="brief-sections"><div><span className="overline">Executive snapshot</span><h2>What we found</h2>{brief.analysis.observations.map((observation) => <p key={observation}><Check size={17} />{observation}</p>)}</div><div><span className="overline">Suggested focus</span><h2>{brief.priorities.length ? 'Priority issues' : 'Areas reviewed'}</h2>{(brief.priorities.length ? brief.priorities : brief.analysis.categoryScores).slice(0, 3).map((priority, index) => <div className="brief-priority" key={priority.key}><span>0{index + 1}</span><div><strong>{priority.label}</strong><p>{brief.priorities.length ? 'Understand the current process, identify the practical constraint, and choose the smallest useful improvement.' : 'This area is part of the capability picture to revisit as the business grows.'}</p></div></div>)}</div></div><div className="brief-next"><span className="overline">Suggested next step</span><h2>Start with the problem, then match the solution.</h2><p>12 Stone can use this brief to explore relevant customer systems, people solutions, operational improvements, or a combination that makes sense for your business.</p><Button to="/contact" variant="brass" icon={ArrowRight}>Let's talk about my business</Button></div><button type="button" className="snapshot-restart" onClick={restart}><RotateCcw size={15} /> Retake snapshot</button></section>
        )}
      </div>
    </main>
  );
};
