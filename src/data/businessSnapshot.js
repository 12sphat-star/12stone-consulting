export const snapshotQuestions = [
  {
    id: 'customerGrowth',
    category: 'Customer Engine',
    area: 'Customer Growth',
    prompt: 'How consistently does your business attract new customers?',
    options: [
      'We mostly depend on referrals or luck.',
      'We have some marketing, but results are inconsistent.',
      'We have a repeatable way to generate interest.',
      'New customer activity is measured and improved regularly.',
      'Our customer growth system works consistently without constant owner attention.',
    ],
  },
  {
    id: 'digitalConversion',
    category: 'Customer Engine',
    area: 'Digital Presence & Conversion',
    prompt: 'When someone finds your business online, how often can they take the next step easily?',
    options: [
      'Our online presence is outdated or hard to use.',
      'People can find basic information, but contacting us takes work.',
      'Our website and profiles make it reasonably easy to reach us.',
      'Our digital presence regularly turns interest into inquiries.',
      'Our digital presence works like a reliable front door for new business.',
    ],
  },
  {
    id: 'followUp',
    category: 'Customer Engine',
    area: 'Follow-Up & Automation',
    prompt: 'How reliably does every new inquiry receive a timely response and follow-up?',
    options: [
      'Some inquiries are missed or forgotten.',
      'We follow up when someone has time.',
      'We have a basic follow-up process for most inquiries.',
      'Follow-up is consistent and tracked by the team.',
      'Responses and follow-up are connected and supported by automation.',
    ],
  },
  {
    id: 'retention',
    category: 'Customer Engine',
    area: 'Customer Retention',
    prompt: 'How intentionally does your business keep existing customers engaged?',
    options: [
      'Customers usually have to remember to come back.',
      'We reconnect occasionally, but not systematically.',
      'We have a few repeat-customer habits in place.',
      'We actively ask for reviews, referrals, and repeat business.',
      'Retention and re-engagement are built into the customer experience.',
    ],
  },
  {
    id: 'time',
    category: 'Operations',
    area: 'Automation & Time',
    prompt: 'How much repetitive work is still consuming owner or staff time?',
    options: [
      'A large amount of important work is repetitive and manual.',
      'Manual work regularly slows us down.',
      'Some repetitive work has been streamlined.',
      'Most recurring work follows a clear process or system.',
      'Automation protects our team time and keeps work moving reliably.',
    ],
  },
  {
    id: 'operations',
    category: 'Operations',
    area: 'Operations & Efficiency',
    prompt: 'How well do your key processes work when you are busy or unavailable?',
    options: [
      'The business depends heavily on the owner remembering and directing everything.',
      'A busy week creates bottlenecks and dropped details.',
      'Core processes work, but they are not always documented.',
      'The team can follow dependable processes during busy periods.',
      'Our systems make the business more consistent as demand grows.',
    ],
  },
  {
    id: 'insight',
    category: 'Operations',
    area: 'Business Insight',
    prompt: 'How clearly can you see what is working across customers, operations, and team capacity?',
    options: [
      'We mostly rely on instinct and what feels urgent.',
      'We look at a few numbers when there is a problem.',
      'We review some useful business information regularly.',
      'Our decisions are guided by a consistent view of performance.',
      'We use clear signals to prioritize improvements and growth.',
    ],
  },
  {
    id: 'hiring',
    category: 'People Engine',
    area: 'Hiring & Competitiveness',
    prompt: 'How prepared is your business to compete with larger employers for good people?',
    options: [
      'Hiring is reactive, and larger employers have a clear advantage.',
      'We can hire when needed, but it is difficult to stand out.',
      'We have a credible offer, though it could be stronger.',
      'We understand what the people we need value and communicate it well.',
      'Our employee offer is a meaningful competitive strength.',
    ],
  },
  {
    id: 'support',
    category: 'People Engine',
    area: 'Employee Support & Retention',
    prompt: 'How well can you support good employees and give them reasons to stay?',
    options: [
      'Keeping good people is a recurring challenge.',
      'We provide a positive workplace, but resources are limited.',
      'We have practical support in place for most employees.',
      'Our team receives dependable support and sees a future here.',
      'Employee support is one of the reasons people choose to stay.',
    ],
  },
  {
    id: 'readiness',
    category: 'Competitive Readiness',
    area: 'Growth Readiness',
    prompt: 'If demand increased next quarter, how ready would your business be to handle it well?',
    options: [
      'More demand would quickly overwhelm the business.',
      'We could grow, but it would add significant owner pressure.',
      'We could handle measured growth with some adjustments.',
      'Our people and systems are prepared for the next stage.',
      'We have the capability and visibility to grow with confidence.',
    ],
  },
];

export const snapshotCategories = [
  { key: 'customer', label: 'Customer Engine', ids: ['customerGrowth', 'digitalConversion', 'followUp', 'retention'] },
  { key: 'operations', label: 'Operations & Efficiency', ids: ['time', 'operations', 'insight'] },
  { key: 'people', label: 'People Engine', ids: ['hiring', 'support'] },
  { key: 'readiness', label: 'Competitive Readiness', ids: ['readiness'] },
];

export const snapshotRating = (score) => {
  if (score >= 80) return 'Strong foundation';
  if (score >= 60) return 'Building capability';
  if (score >= 40) return 'Priority opportunity';
  return 'Needs attention';
};
