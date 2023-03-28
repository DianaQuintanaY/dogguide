const weightAverage = (weight) => {
  const range = weight.split('-').map(e =>  { return isNaN(Number(e))? 200 : Number(e)});
  return range.reduce((a,b)=> a+b)/range.length
};

module.exports = {weightAverage}