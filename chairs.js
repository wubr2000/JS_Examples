var chair = 13;
var pick = 0;
var student = ["Aron", "Bruno", "Charlie", "Derrick", "Eddie", "Flora", "George", "Hilda", "Irene", "Jack", "Kirk", "Lilian", "Matt", "Nathan"];


console.clear();

do {
  pick = Math.floor(Math.random()*chair);
  console.log("Chair " + (chair+1) + " for " + student[pick]);
  student.splice(pick, 1);
  --chair;
} while (chair >= 0);
