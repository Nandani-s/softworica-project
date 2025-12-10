// console.log("hello world");
// const person={
// 	first:"sudikshya",
// 	last:"shrestha",
// };
// console.log(person.first);

// for(let key in person){
// 	console.log(key, person[key])
// }

// const language=["java","python","c","c#","php"]
// for(let i=0; i<language.length; i++ ){
// 	console.log(language[i]);
// }
 
// for(let i=0; i<2; i++){
// 	console.log([i]);
// }


const marks=[50,68,98,45]
let totalmarks=0;
let isfail = false

for(let i=0; i<marks.length; i++){
	console.log(marks[i]);
	if(marks[i]<35){
		isfail=true;
	}
	totalmarks =marks[i]+totalmarks;
}
if(isfail){
	console.log("you are fail");
	return
}




// console.log(totalmarks);
percentage=totalmarks/400*100;



let percentage1=Math.floor(percentage);{
	console.log(percentage1,"%")
}
if(percentage>45){
	console.log("you have passed");
}else{
	console.log("you have failed");
}
 gpa=percentage/25;
 console.log("your GPA is",gpa);

