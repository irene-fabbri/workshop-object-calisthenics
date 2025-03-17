const gradingChart = {
  90 : 'A',
  80 : 'B',
  70 : 'C',
  60 : 'D'
};

const failingGrade = 'F';

function classifyStudentVote(score) {
  const gradeBand = Math.floor(score/10)*10
  return gradingChart[gradeBand] ?? failingGrade;
}