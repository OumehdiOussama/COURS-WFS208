const nums = [1,-2,3,4,-5];

let carre_num = nums.map((e)=>{return e*e})
console.log(carre_num);

let posifs = nums.filter((e)=> e>0);
console.log(posifs);