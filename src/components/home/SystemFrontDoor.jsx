import React, { useEffect, useState } from 'react';
import { ArrowRight, CalendarDays, Check, MessageCircle, RefreshCw } from 'lucide-react';
import { Button } from '../shared/Button';

const JOURNEY_STAGES = [
  { id: 'visit', label: 'VISIT', title: 'Smart Website', detail: 'A clear first step for a customer who needs help.', icon: 'web' },
  { id: 'conversation', label: 'CONVERSATION', title: 'A real answer, right away.', detail: '"My AC is not cooling."', icon: 'chat' },
  { id: 'capture', label: 'REQUEST', title: 'The business remembers.', detail: 'Marcus R. | AC repair | Chesapeake', icon: 'person' },
  { id: 'schedule', label: 'APPOINTMENT', title: 'A service moment takes shape.', detail: 'Tomorrow | 10:30 AM | AC service requested', icon: 'calendar' },
  { id: 'service', label: 'SERVICE', title: 'Care arrives at the door.', detail: 'Technician + homeowner service experience', icon: 'image' },
  { id: 'review', label: 'REVIEW', title: 'The relationship continues.', detail: 'Thanks for choosing us today. We would appreciate your feedback.', icon: 'review' },
  { id: 'return', label: 'RETURN', title: 'Three months later.', detail: 'Seasonal maintenance reminder | Schedule service', icon: 'return' },
];

const SYSTEM_STAGES = ['SMART WEBSITE', 'CONVERSATIONAL CONCIERGE', 'CRM', 'SCHEDULING', 'AUTOMATION', 'REPUTATION', 'NURTURE / REACTIVATION'];

const StageVisual = ({ stage }) => {
  if (stage.icon === 'web') return <div className="fd-website-fragment"><span className="fd-browser-top">yourbusiness.com</span><strong>REQUEST<br />SERVICE <ArrowRight size={14} /></strong></div>;
  if (stage.icon === 'chat') return <div className="fd-chat-scene"><MessageCircle size={20} /><span>"My AC is not cooling."</span><b>I can help you get a service request started.</b></div>;
  if (stage.icon === 'person') return <div className="fd-customer-note"><span className="fd-avatar">MR</span><div><strong>MARCUS R.</strong><span>AC REPAIR | CHESAPEAKE</span><small>NEW REQUEST</small></div></div>;
  if (stage.icon === 'calendar') return <div className="fd-calendar"><CalendarDays size={20} /><strong>TOMORROW<br /><em>10:30 AM</em></strong><span>AC SERVICE REQUESTED <Check size={13} /></span></div>;
  if (stage.icon === 'image') return <div className="fd-service-image"><span>TECHNICIAN + HOMEOWNER</span><small>Service experience</small></div>;
  if (stage.icon === 'review') return <div className="fd-review-phone"><span>SERVICE COMPLETE ✓</span><p>Thanks for choosing us today.<br />We would appreciate your feedback.</p><b>LEAVE A REVIEW <ArrowRight size={12} /></b></div>;
  return <div className="fd-return-note"><RefreshCw size={22} /><span>3 MONTHS LATER</span><strong>Seasonal maintenance reminder</strong><b>SCHEDULE SERVICE <ArrowRight size={12} /></b></div>;
};

export const SystemFrontDoor = () => {
  const [activeStage, setActiveStage] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActiveStage((current) => (current + 1) % JOURNEY_STAGES.length), 4200);
    return () => clearInterval(timer);
  }, []);

  const stage = JOURNEY_STAGES[activeStage];
  const advanceStage = (offset) => setActiveStage((activeStage + JOURNEY_STAGES.length + offset) % JOURNEY_STAGES.length);

  return (
    <div className="frontdoor-experience">
      <div className="frontdoor-header">
        <span className="home-eyebrow"><span className="eyebrow-rule" /> THE SMART WEBSITE SYSTEM™</span>
        <h2 className="frontdoor-headline">YOUR WEBSITE IS THE FRONT DOOR.<br /><em className="gold-accent">WATCH WHAT HAPPENS NEXT.</em></h2>
        <p className="fd-intro">A customer sees a helpful website. Then a connected relationship begins.</p>
      </div>

      <div className="fd-journey" aria-label="Customer relationship journey">
        <svg className="fd-gold-path" viewBox="0 0 1000 90" preserveAspectRatio="none" aria-hidden="true"><path d="M 20 48 C 170 10, 260 76, 390 42 S 610 18, 730 48 S 875 72, 980 34" /><path className="fd-gold-progress" d="M 20 48 C 170 10, 260 76, 390 42 S 610 18, 730 48 S 875 72, 980 34" style={{ strokeDashoffset: `${(JOURNEY_STAGES.length - 1 - activeStage) * 158}` }} /></svg>
        <div className="fd-stage-rail">{JOURNEY_STAGES.map((journeyStage, index) => <button key={journeyStage.id} type="button" className={`fd-stage ${index === activeStage ? 'is-active' : ''} ${index < activeStage ? 'is-past' : ''}`} onClick={() => setActiveStage(index)}><span className="fd-stage-dot" /><span>{journeyStage.label}</span></button>)}</div>
        <div className="fd-active-scene"><div className="fd-scene-copy"><span className="fd-scene-label">{stage.label}</span><h3>{stage.title}</h3><p>{stage.detail}</p><div className="fd-scene-controls"><button type="button" onClick={() => advanceStage(-1)} aria-label="Previous journey stage">←</button><span>{String(activeStage + 1).padStart(2, '0')} / {String(JOURNEY_STAGES.length).padStart(2, '0')}</span><button type="button" onClick={() => advanceStage(1)} aria-label="Next journey stage">→</button></div></div><StageVisual stage={stage} /></div>
      </div>

      <div className="fd-system-layer"><span>CONNECTED SYSTEM</span>{SYSTEM_STAGES.map((systemStage, index) => <React.Fragment key={systemStage}><b className={index <= activeStage ? 'is-active' : ''}>{systemStage}</b>{index < SYSTEM_STAGES.length - 1 && <i>→</i>}</React.Fragment>)}</div>
      <div className="frontdoor-footer-note"><p>The customer experiences a simple next step. Behind it, the business keeps the relationship moving.</p><Button to="/customer-systems" variant="outline" icon={ArrowRight}>EXPLORE CUSTOMER SYSTEMS</Button></div>
    </div>
  );
};
