// first task 👇
// function fiftyFifty (){
//     return new Promise((resolve, reject )=>{
//         if(Math.random() < 0.5){
//             resolve ("resolved")
            
//         }else
//         reject("rejected")
//     })
// }
// fiftyFifty()
// .then(result => console.log(result))
// .catch(error => console.log(error))



// second task 👇
// function getData(){
//     return fetch('https://jsonplaceholder.typicode.com/users')
//     .then(result  => result.json())
//     .catch(error  => console.log(error))
// }
// getData().then(user => console.log(user))



// third task 👇


    


// fourth task 👇
// async function getFastestData(){
//     const web1 = fetch('https://dummyjson.com/users')
//     const web2 = fetch('https://jsonplaceholder.typicode.com/users')
// try {
//     const response = await Promise.race([web1,web2]);
//     const data =  await response.json();
//     return data;
// }
// catch(error){
//     console.error(error);
// }
// }
// getFastestData().then(res => console.log(res))