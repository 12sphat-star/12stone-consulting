import React, { useEffect, useState } from 'react';
import { ArrowRight, Bell, Check, HeartHandshake, Smartphone } from 'lucide-react';
import { Button } from '../shared/Button';

const EMPLOYEE_STAGES = [
  { id: 'attract', label: 'ATTRACT', title: 'Give good people another reason to join.', detail: 'A professional employee experience begins before the first day.', imageLabel: 'CANDIDATE / NEW HIRE', imageClass: 'employee-candidate' },
  { id: 'welcome', label: 'WELCOME', title: 'Start strong.', detail: 'Day one welcome, important information, next steps and resources.', imageLabel: 'OWNER WELCOMING EMPLOYEE', imageClass: 'employee-welcome' },
  { id: 'connect', label: 'CONNECT', title: 'Keep your people in the loop.', detail: 'Schedule update, team announcement, training reminder.', imageLabel: 'EMPLOYEE USING MOBILE COMMUNICATION', imageClass: 'employee-connect' },
  { id: 'support', label: 'SUPPORT', title: 'Support that can matter beyond the workday.', detail: 'One possible employee-support capability inside a broader Employee System.', imageLabel: 'EMPLOYEE ACCESSING SUPPORT', imageClass: 'employee-support' },
  { id: 'retain', label: 'RETAIN', title: 'Give good people another reason to join - and stay.', detail: "Don't disappear after day one. The employee relationship needs attention after onboarding too.", imageLabel: 'TEAM / EMPLOYEE AT WORK', imageClass: 'employee-retain' },
];

const SYSTEM_STAGES = ['EMPLOYER BRAND', 'ONBOARDING', 'COMMUNICATION', 'EMPLOYEE SUPPORT', 'ENGAGEMENT / RETENTION'];

const EmployeeMoment = ({ stage }) => {
  if (stage.id === 'attract') return <div className={`employee-image ${stage.imageClass}`}><span>{stage.imageLabel}</span><small>Discovering the opportunity</small><strong>GIVE GOOD PEOPLE<br />A REASON TO JOIN</strong></div>;
  if (stage.id === 'welcome') return <div className={`employee-image ${stage.imageClass}`}><span>{stage.imageLabel}</span><small>DAY ONE</small><div className="employee-welcome-note"><strong>Welcome to the team.</strong><span>Important information · Next steps · Resources</span><b>START STRONG <Check size={13} /></b></div></div>;
  if (stage.id === 'connect') return <div className={`employee-image ${stage.imageClass}`}><span>{stage.imageLabel}</span><Smartphone size={22} /><div className="employee-message"><Bell size={12} /><strong>TEAM UPDATE</strong><span>Training reminder: 2:00 PM</span></div></div>;
  if (stage.id === 'support') return <div className={`employee-image ${stage.imageClass}`}><span>{stage.imageLabel}</span><div className="employee-support-phone"><small>KONNECTMD EMPLOYEE ACCESS</small><strong>Support when it matters.</strong><span>Healthcare access option</span><span>Employee + family support options</span><b>ACCESS CARE INFORMATION <ArrowRight size={12} /></b></div></div>;
  return <div className={`employee-image ${stage.imageClass}`}><span>{stage.imageLabel}</span><HeartHandshake size={27} /><div className="employee-retain-note"><strong>Still connected.</strong><span>Recognition · Check-ins · Resources · Support</span></div></div>;
};

export const EmployeeSystemsExperience = () => {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveStage((current) => (current + 1) % EMPLOYEE_STAGES.length), 4600);
    return () => clearInterval(timer);
  }, []);

  const stage = EMPLOYEE_STAGES[activeStage];
  const changeStage = (offset) => setActiveStage((activeStage + EMPLOYEE_STAGES.length + offset) % EMPLOYEE_STAGES.length);

  return (
    <div className="employee-experience">
      <div className="employee-header">
        <span className="home-eyebrow"><span className="eyebrow-rule" /> EMPLOYEE SYSTEMS</span>
        <h2>YOUR CUSTOMERS AREN'T THE ONLY<br /><em>PEOPLE YOUR BUSINESS NEEDS TO KEEP.</em></h2>
        <p>Better systems can help create a stronger employee experience - from the first interaction through onboarding, communication, support and retention.</p>
      </div>

      <div className="employee-journey" aria-label="Employee experience journey">
        <svg className="employee-gold-path" viewBox="0 0 1000 80" preserveAspectRatio="none" aria-hidden="true"><path d="M 18 40 C 180 5, 270 70, 450 40 S 720 8, 982 40" /><path className="employee-gold-progress" d="M 18 40 C 180 5, 270 70, 450 40 S 720 8, 982 40" style={{ strokeDashoffset: `${(EMPLOYEE_STAGES.length - 1 - activeStage) * 245}` }} /></svg>
        <div className="employee-stage-tabs">{EMPLOYEE_STAGES.map((employeeStage, index) => <button key={employeeStage.id} type="button" className={`employee-stage-tab ${index === activeStage ? 'is-active' : ''} ${index < activeStage ? 'is-past' : ''}`} onClick={() => setActiveStage(index)}><span className="employee-stage-dot" /><span>{employeeStage.label}</span></button>)}</div>
        <div className="employee-active-scene"><div className="employee-copy"><span className="employee-stage-label">{stage.label}</span><h3>{stage.title}</h3><p>{stage.detail}</p><div className="employee-controls"><button type="button" onClick={() => changeStage(-1)} aria-label="Previous employee stage">←</button><span>{String(activeStage + 1).padStart(2, '0')} / 05</span><button type="button" onClick={() => changeStage(1)} aria-label="Next employee stage">→</button></div></div><EmployeeMoment stage={stage} /></div>
      </div>

      <div className="employee-system-layer"><span>CONNECTED EMPLOYEE SYSTEM</span>{SYSTEM_STAGES.map((systemStage, index) => <React.Fragment key={systemStage}><b className={index <= activeStage ? 'is-active' : ''}>{systemStage}</b>{index < SYSTEM_STAGES.length - 1 && <i>→</i>}</React.Fragment>)}</div>
      <div className="employee-footer"><p>People are the primary story. The system supports the relationship.</p><Button to="/employee-systems" variant="outline" icon={ArrowRight}>EXPLORE EMPLOYEE SYSTEMS</Button></div>
    </div>
  );
};

// KonnectMD benefit language must be populated from verified current KonnectMD source materials before public launch.
