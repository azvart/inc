let button = document.querySelector('button');
let text = document.querySelector('input');
let task = [
    {
    name:"Vlad",
     age:"25"
    },
    {
    name:"Sveta",
    age:"30"
    },
    {
        name:"Alina",
        age:"23"
    },
    {
        name:'Kirill',
        age:'25'
    }
];
function superSum(a, b){
    let c = a + b;
    return c;
    }

    let count = [6,3,8,10,2,12,25,35,1,50,60,45,32,14,67,98];
    min = count[0];
    max = min;
    for(let i = 0; i<count.length; i++){
        if(count[i] > max) max = count[i];
        if(count[i] < min) min = count[i];
    }
button.onclick = setTimeout(function info(){
    
    if(text.value == 'google' || text.value == 'Google'){
        alert('Yandex круче.Но это не точно!');
    }else{
        
        alert(`Наибольшее число в массиве count равно: ${max} , а минимальное ${min}`);
        alert(text.value);
        alert(`Сумма числе равна: ${superSum(1,10)}`);
        task.forEach((e)=>{
            alert(e.name);
        });
        
        
        
    }
},3000);


let a = 'XXX';
let b = 'YYY';
/*let c = a;
a = b;
b = c;
*/
b = [a, a = b][0];
console.log(a,b);

function findMax(arr){
   let max = arr[0];

   for(let i =0; i< arr.length;i ++){
       if( max < arr[i]) max =arr[i];
   }
   return max;
}

console.log(findMax(count));