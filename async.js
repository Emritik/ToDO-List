function collectingData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Collecting Data");
            resolve();
        },1500);
    })
    
}
function loadData(){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Loading Data");
        resolve();
        },2000)
   })
}
function  approvedData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("approved data");
            reject("something went wrong!!");
        },2500)
    })
}
function approved(){
    console.log("Approved")
}
/* collectingData().then(loadData()).then(approvedData()).then(approved());
 */async function exc(){
    await collectingData();
    await loadData();
    await approvedData();
    await approved();
}
exc().then().catch(err => console.log(err));