
const getTodos = (resource,callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange",() => {
        // console.log(request,request.readyState);
        
        if(request.readyState === 4 && request.status === 200)
        {   const data = JSON.parse(request.responseText)
        //    console.log(request.responseText);
            callback(undefined,data);
        }
        else if (request.readyState === 4)
        {
            // console.log("Başarılı cevap alınamadı!");
            callback("başarılı cevap alamadık!",undefined);
        }
    });    
    request.open("GET",resource);
    request.send();
}


// getTodos("example/can.Json", (err,data) => {
//         console.log(data);
//         getTodos("example/osman.Json", (err,data) => {
//         console.log(data);      
//     });
//     getTodos("example/tuba.Json", (err,data) => {
 
//         console.log(data);   
//     });
// });

const getIt = () => {

    return new Promise((resolve,reject)=>{
        resolve("Başarılı Data");
        // reject("Başarısız Data");
    })
}

getIt()
    .then((data) => {
        console.log("Başarılı",data);
    })
    .catch((err) => {
        console.log("Başarısız",err);
    })