document.body.style.background = "rgb(15, 126, 170)";

function named() {
    let namevalue = document.getElementById("namePls").value;
    if (namevalue === "Name pLS" ||namevalue === "Name pls") {
       alert("HEY, STOP COPYING ME!"); 
       document.getElementById("namePls").value = ""
    } else {
    alert("Hi, " + namevalue);
    document.getElementById("namePls").value = ""
}
}