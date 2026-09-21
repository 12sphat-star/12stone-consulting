import { snapshotCategories, snapshotQuestions, snapshotRating } from '../data/businessSnapshot';

export const calculateSnapshot = (answers) => {
  const categoryScores = snapshotCategories.map((category) => {
    const values = category.ids.map((id) => Number(answers[id] || 0)).filter(Boolean);
    const score = values.length ? Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 20) : 0;
    return { ...category, score, rating: snapshotRating(score) };
  });

  const answeredScores = snapshotQuestions.map((question) => Number(answers[question.id] || 0)).filter(Boolean);
  const overall = answeredScores.length
    ? Math.round((answeredScores.reduce((sum, value) => sum + value, 0) / answeredScores.length) * 20)
    : 0;
  const strongest = [...categoryScores].sort((a, b) => b.score - a.score)[0];
  const opportunity = [...categoryScores].sort((a, b) => a.score - b.score)[0];
  const customer = categoryScores.find((category) => category.key === 'customer');
  const people = categoryScores.find((category) => category.key === 'people');
  const operations = categoryScores.find((category) => category.key === 'operations');

  const observations = [
    `Your strongest signal is ${strongest.label.toLowerCase()} at ${strongest.score}/100, giving you a useful foundation to build on.`,
    `The clearest opportunity is ${opportunity.label.toLowerCase()} at ${opportunity.score}/100. Improving this area may make the biggest difference to your next stage.`,
  ];

  if (customer.score < 60) observations.push('Inconsistent discovery, conversion, or follow-up may be making it harder to turn interest into dependable customer growth.');
  else if (people.score < 60) observations.push('A stronger employee support offer may help a smaller employer compete more confidently for the people it needs.');
  else if (operations.score < 60) observations.push('Reducing manual work and owner dependency may create more room for the business to grow without adding unnecessary complexity.');
  else observations.push('Your answers suggest a balanced foundation. The next useful step is to prioritize the capability that will unlock the most momentum.');

  return { overall, rating: snapshotRating(overall), categoryScores, strongest, opportunity, observations };
};

export const getBriefData = (answers, contact) => {
  const analysis = calculateSnapshot(answers);
  return {
    generatedAt: new Date().toISOString(),
    contact,
    answers,
    analysis,
    priorities: analysis.categoryScores.filter((category) => category.score < 70).sort((a, b) => a.score - b.score),
  };
};
