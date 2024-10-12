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
// let tryCount = 0;
// const Max_try = 5;
// async function getData(){
//     try {
//         const res = await fetch('https://jsonplaceholde.typicode.com')
//         const data = await res.json()
//         console.log(data);
//     }catch(e){
//         tryCount++
//         if(tryCount<= Max_try){
//             console.log("retrying" + tryCount);
//             getData()
            
//         }
//     }
// }
// getData()

    


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



// fifth task 👇
// const promise1 = new Promise(resolve => setTimeout(() => resolve([1, 2, 3]), 1000));
// const promise2 = new Promise((_, reject) => setTimeout(() => reject('Promise 2 failed'), 2000));
// const promise3 = new Promise(resolve => setTimeout(() => resolve([4, 5, 6]), 1500));

// Promise.allSettled([promise1, promise2, promise3])
//   .then(results => {
//     const merged = [];

//     results.forEach(result => {
//       if (result.status === 'fulfilled') {
//         merged.push(...result.value);
//       }
//     });
//     console.log("Merged array:", merged);
//   });
