let tabla = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
let akt = "X";
function katt(id) {
    let sor = parseInt(id[0]);
    let oszlop = parseInt(id[1]);


    if (tabla[sor][oszlop] == "") {
        tabla[sor][oszlop] = akt;
        document.getElementById("n" + id).innerHTML = akt;
        if (akt == "X") {
            akt = "O";
        } else {
            akt = "X";
        }
    }
}

function reset(id) {
    akt = "X";
    tabla = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    document.getElementById("n" + id).innerHTML = "";

}