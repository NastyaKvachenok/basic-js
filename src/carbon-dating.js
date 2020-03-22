const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 if (typeof sampleActivity !== "string" || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > MODERN_ACTIVITY || !sampleActivity || isNaN(parseFloat(sampleActivity)) ) {
   return false;
 }

 let speedReaction = 0.693 / HALF_LIFE_PERIOD;
 let age = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / speedReaction;
 return Math.ceil(age);
};
