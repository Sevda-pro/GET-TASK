window.addEventListener("DOMContentLoaded",makerequest);

function makerequest() {
 console.log("Button Clicked")
 config = {
  method: 'get',
  url: 'https://crudcrud.com/api/bd9f17f30c804bf18ef462bcfba91ef6/newdata'
 }
 axios(config).then((res) => {
  console.log(res)
  console.log(res.data)
//   for(var i=0;i<response)
let object=document.getElementById("add");
  res.data.forEach(element => {
    object.innerHTML+=`
    <p>${element.name}</p>
    <p>${element.email}</p>
    <p>${element._id}</p>
    `
  });
 })
}