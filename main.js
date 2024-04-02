/* function loadData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("LoadData");
            resolve();
        },2000);
    });
}
function collectData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("collectData");
            //reject("wrong");
            resolve();
           },2000);
    });
}
function approvedData(){
    console.log("approvedData");
}
function approved(){
    console.log("approved");
}
loadData().then(collectData()).then(approvedData()).then(approved());

async function ex(){
    await loadData();
    await collectData();
    await approvedData();
    await approved();
}
ex().then().catch(err => console.error(err)); */
//Promise.all([loadData(),collectData()]).then(values=>{console

