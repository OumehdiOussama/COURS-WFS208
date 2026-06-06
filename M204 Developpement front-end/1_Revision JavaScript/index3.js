let nums =[2,5,6,8];

let Ajouter1=(value)=>{
    nums.push(value)
    return console.log(nums);
}
Ajouter1(9);

let Ajouter2=(value)=>{
    let tab= [...nums,value];
    return console.log(tab);
}
Ajouter2(11);



function Supprimer(value){
    const tab = nums.filter((v)=> v != value);
    return console.log(tab);
}
Supprimer(nums)

function Modifier(old_v, new_v){
    const S = [...nums.filter((e)=> e != old_v),new_v];
    return console.log(S);
}
Modifier(5,100);


