module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) { 
    return false; 
  }
  var teamName = [];
  for (let i=0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
     teamName.push(members[i].trim().slice(0,1).toUpperCase());
    }
  }
  return teamName.sort().join("");
};