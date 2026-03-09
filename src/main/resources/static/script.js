const API = "http://localhost:8081/services";


function addService(){

    let service = {

        vehicleNumber: document.getElementById("vehicleNumber").value,
        ownerName: document.getElementById("ownerName").value,
        contactNumber: document.getElementById("contactNumber").value,
        serviceType: document.getElementById("serviceType").value,
        serviceCost: document.getElementById("serviceCost").value,
        serviceDate: document.getElementById("serviceDate").value,
        serviceStatus: "Pending"

    };

    fetch(API + "/add",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(service)
    })
        .then(res=>res.json())
        .then(data=>{

            alert("Service Added Successfully");

            loadServices();

            /* clear form */

            document.getElementById("vehicleNumber").value="";
            document.getElementById("ownerName").value="";
            document.getElementById("contactNumber").value="";
            document.getElementById("serviceType").value="";
            document.getElementById("serviceCost").value="";
            document.getElementById("serviceDate").value="";

        })
        .catch(error => console.error(error));

}



function loadServices(){

    fetch(API + "/all")
        .then(res=>res.json())
        .then(data=>{

            let rows="";

            data.forEach(s=>{

                rows += `
<tr>
<td>${s.serviceId}</td>
<td>${s.vehicleNumber}</td>
<td>${s.ownerName}</td>
<td>${s.serviceType}</td>
<td>${s.serviceStatus}</td>
<td>
<button class="btn btn-danger btn-sm" onclick="deleteService(${s.serviceId})">Delete</button>
</td>
</tr>
`;

            });

            document.getElementById("tableBody").innerHTML = rows;

        });

}



function deleteService(id){

    if(confirm("Are you sure to delete this service?")){

        fetch(API + "/delete/" + id,{
            method:"DELETE"
        })
            .then(()=>loadServices())
            .catch(error => console.error(error));

    }

}