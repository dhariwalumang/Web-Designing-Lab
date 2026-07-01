const employees = [

    {
        id:1,
        name:"Rahul",
        salary:45000
    },

    {
        id:2,
        name:"Anita",
        salary:52000
    },

    {
        id:3,
        name:"Karan",
        salary:61000
    }

];

function showEmployees(){

    let text="";

    employees.forEach(emp=>{

        text +=
        `<p>
        <b>${emp.name}</b><br>
        ID : ${emp.id}<br>
        Salary : ₹${emp.salary}
        </p>`;
    });

    document.getElementById("output").innerHTML=text;

}