console.clear();

//define and initialize variables
var students = ["abby","bruno","chas","dan","eddie","frances","george","hillary","ivan","john","kim","lance","michael","nat"];
var pick = 0;
var group = [[],[],[],[],[],[],[],[],[],[]];

//prompt for the number of students in a group
var st_per_group = prompt("How many students per group do you want?");

//warning statement that the total number of students do not divide evenly into groups and how this will be handled by the program
if (students.length % st_per_group !== 0) {
  console.log("Since there are " + students.length + " of students in total and you proposed to split them up into groups of " + st_per_group + ", we will randomly select from the remaining " + students.length % st_per_group + " students and put each one into a separate group, starting with Group 1.");
}

//put students evenly into groups
var num_of_groups = Math.floor(students.length / st_per_group);

for (var num = 1; num <= num_of_groups; num++) { 
   for (var x = 1; x <= st_per_group; x++) {
    pick = Math.floor(Math.random()*students.length);
    group[num][x] = students[pick];
    students.splice(pick, 1);
  } 
}

//add remaining students (if any) one by one into separate groups
var remaining_students = students.length;

for (var y = 1; y <= remaining_students; y++) {
  pick = Math.floor(Math.random()*students.length);
  group[y][x] = students[pick];
  students.splice(pick, 1);
}

//print out the groups
for (var print = 1; print <= num_of_groups; print++) {
  
  console.log("Students in Group " + print + ": ");
  
  for (var each = 1; each <= group[print].length-1; each++) {
  console.log(group[print][each]);
  }
  
}
