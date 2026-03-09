const API = "http://localhost:8081/services";

function addService(){

    let service = {

        vehicleNumber: document.getElementById("vehicle").value,
        ownerName: document.getElementById("owner").value,
        serviceType: document.getElementById("type").value,
        status: document.getElementById("status").value

    };

    fetch(API + "/add",{

        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(service)

    })
        .then(res=>res.text())
        .then(data=>{
            alert(data);
            loadServices();
        })

}

function loadServices(){

    fetch(API + "/all")
        .then(res=>res.json())
        .then(data=>{

            let rows="";

            data.forEach(s=>{

                rows += `
<tr>
<td>${s.id}</td>
<td>${s.vehicleNumber}</td>
<td>${s.ownerName}</td>
<td>${s.serviceType}</td>
<td>${s.status}</td>
</tr>
`;

            });

            document.getElementById("tableBody").innerHTML = rows;

        });

}

loadServices();