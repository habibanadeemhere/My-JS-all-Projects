function add() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var age = document.getElementById("age").value;
    var disease = document.getElementById("disease").value;

    var table = document.getElementById("table");
    var row = "<tr><td>" + name + "</td><td>" + roll + "</td><td>" + age + "</td><td>" + disease + "</td></tr>";
    table.innerHTML += row;

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("age").value = "";
    document.getElementById("disease").value = "";
}
