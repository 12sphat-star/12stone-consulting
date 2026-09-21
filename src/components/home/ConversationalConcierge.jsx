import React, { useState } from 'react';
import { Phone, MessageSquare, Moon, Sun, CheckCircle2, Zap, Clock, ShieldCheck, User } from 'lucide-react';

export const ConversationalConcierge = () => {
  const [activeTab, setActiveTab] = useState('phone'); // 'phone' | 'web'
  const [isNightMode, setIsNightMode] = useState(true);

  return (
    <div className="concierge-experience">
      <div className="concierge-header">
        <div className="concierge-badge-row">
          <span className="home-eyebrow">
            <span className="eyebrow-rule" /> CONVERSATIONAL CONCIERGE™
          </span>
          <button 
            type="button"
            className={`night-toggle-btn ${isNightMode ? 'is-night' : 'is-day'}`}
            onClick={() => setIsNightMode(!isNightMode)}
            aria-label="Toggle Night/Day Mode"
          >
            {isNightMode ? (
              <>
                <Moon size={14} className="toggle-icon" />
                <span>10:47 PM • AFTER HOURS ACTIVE</span>
              </>
            ) : (
              <>
                <Sun size={14} className="toggle-icon" />
                <span>2:15 PM • BUSINESS HOURS ACTIVE</span>
              </>
            )}
          </button>
        </div>

        <h2 className="concierge-headline">
          YOUR BUSINESS MAY CLOSE.<br />
          <em className="gold-accent">THE CONVERSATION DOESN'T HAVE TO.</em>
        </h2>

        <div className="concierge-tagline">
          <strong>NOT A BOT THAT TALKS. A CONCIERGE THAT CONVERSES.</strong>
          <p>
            Designed around your business to engage customers through phone and website conversations, 
            provide meaningful assistance, and help guide them toward the right next step.
          </p>
        </div>
      </div>

      {/* Cinematic Scene Stage */}
      <div className={`concierge-scene-stage ${isNightMode ? 'night-scene' : 'day-scene'}`}>
        <div className="scene-background-overlay">
          {/* Photographic Image Architecture Frame for After-Hours Scene */}
          <div className="scene-image-frame">
            <div className="image-placeholder-label">
              <span className="frame-tag">16:9 CINEMATIC SCENE ARCHITECTURE</span>
              <strong>AFTER-HOURS RESIDENTIAL SCENE</strong>
              <p>Homeowner outside home at night looking at phone during an AC breakdown • Warm interior window glow & night sky backdrop</p>
            </div>
          </div>
        </div>

        <div className="scene-content-overlay">
          <div className="scene-top-bar">
            <div className="channel-switchers">
              <button
                type="button"
                className={`channel-btn ${activeTab === 'phone' ? 'active' : ''}`}
                onClick={() => setActiveTab('phone')}
              >
                <Phone size={14} />
                <span>VOICE CONVERSATION</span>
                <span className="time-stamp">11:42 PM</span>
              </button>
              <button
                type="button"
                className={`channel-btn ${activeTab === 'web' ? 'active' : ''}`}
                onClick={() => setActiveTab('web')}
              >
                <MessageSquare size={14} />
                <span>WEBSITE VISITOR</span>
                <span className="time-stamp">1:17 AM</span>
              </button>
            </div>

            <div className="system-status-indicator">
              <span className="status-dot pulsing" />
              <span>CONCIERGE ACTIVE</span>
            </div>
          </div>

          <div className="scene-dialogue-flow">
            {activeTab === 'phone' ? (
              <div className="dialogue-card phone-dialogue">
                <div className="dialogue-meta">
                  <div className="human-caller">
                    <div className="caller-avatar-glow">
                      <User size={18} />
                    </div>
                    <div className="caller-details">
                      <span className="caller-tag">INCOMING CALL • 11:42 PM</span>
                      <strong className="caller-name">Homeowner in Norfolk, VA</strong>
                      <span className="caller-status">After-Hours Direct Line</span>
                    </div>
                  </div>
                  <div className="outcome-badge">
                    CUSTOMER GETTING AN ANSWER WHILE OWNER IS BUSY
                  </div>
                </div>

                <div className="transcript-thread">
                  <div className="chat-row customer-row">
                    <span className="person-label">Homeowner</span>
                    <div className="speech-bubble customer">
                      "My AC stopped cooling and it's getting really hot upstairs. Is anyone available tomorrow morning?"
                    </div>
                  </div>

                  <div className="chat-row concierge-row">
                    <span className="person-label gold">Conversational Concierge™</span>
                    <div className="speech-bubble concierge">
                      "I can help you get a service request started right now. Is your system still running but blowing warm air, or has it stopped completely?"
                    </div>
                  </div>

                  <div className="chat-row customer-row">
                    <span className="person-label">Homeowner</span>
                    <div className="speech-bubble customer">
                      "It's running, but blowing warm air. We have kids sleeping upstairs."
                    </div>
                  </div>

                  <div className="chat-row concierge-row">
                    <span className="person-label gold">Conversational Concierge™</span>
                    <div className="speech-bubble concierge">
                      "Understood. I've logged an urgent priority service request for 8:00 AM tomorrow and alerted the lead technician on call."
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="dialogue-card web-dialogue">
                <div className="dialogue-meta">
                  <div className="human-caller">
                    <div className="caller-avatar-glow">
                      <User size={18} />
                    </div>
                    <div className="caller-details">
                      <span className="caller-tag">WEBSITE VISITOR • 1:17 AM</span>
                      <strong className="caller-name">Property Manager in Chesapeake, VA</strong>
                      <span className="caller-status">Mobile Session</span>
                    </div>
                  </div>
                  <div className="outcome-badge">
                    INQUIRY CAPTURED LATE AT NIGHT
                  </div>
                </div>

                <div className="transcript-thread">
                  <div className="chat-row customer-row">
                    <span className="person-label">Visitor</span>
                    <div className="speech-bubble customer">
                      "Do you service commercial properties in Chesapeake?"
                    </div>
                  </div>

                  <div className="chat-row concierge-row">
                    <span className="person-label gold">Conversational Concierge™</span>
                    <div className="speech-bubble concierge">
                      "Yes, we service commercial and residential properties throughout Chesapeake and Hampton Roads. What type of service do you need?"
                    </div>
                  </div>

                  <div className="chat-row customer-row">
                    <span className="person-label">Visitor</span>
                    <div className="speech-bubble customer">
                      "We need annual preventive maintenance contracts for three retail locations."
                    </div>
                  </div>

                  <div className="chat-row concierge-row">
                    <span className="person-label gold">Conversational Concierge™</span>
                    <div className="speech-bubble concierge">
                      "Perfect. I can have a commercial account specialist reach out with our maintenance program details. May I get your preferred email or phone number?"
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Outcome Connection Bar */}
            <div className="scene-outcome-bar">
              <div className="outcome-step">
                <Zap size={14} className="gold-accent" />
                <span>NEED UNDERSTOOD</span>
              </div>
              <div className="outcome-connector" />
              <div className="outcome-step">
                <CheckCircle2 size={14} className="gold-accent" />
                <span>REQUEST CAPTURED</span>
              </div>
              <div className="outcome-connector" />
              <div className="outcome-step">
                <Clock size={14} className="gold-accent" />
                <span>FOLLOW-UP ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="concierge-footer-copy">
        <p className="positioning-note">
          <ShieldCheck size={16} className="inline-icon" />
          <span>BUILT SO YOUR BUSINESS CAN RESPOND — EVEN WHEN YOU CAN'T.</span>
        </p>
      </div>
    </div>
  );
};
