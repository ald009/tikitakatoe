let tabla = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
let akt = "X";

function win(){
    if(tabla[0][0] != "" && tabla[0][0] == tabla[0][1] && tabla[0][1] == tabla[0][2]) return true;
    if(tabla[1][0] != "" && tabla[1][0] == tabla[1][1] && tabla[1][1] == tabla[1][2]) return true;
    if(tabla[2][0] != "" && tabla[2][0] == tabla[2][1] && tabla[2][1] == tabla[2][2]) return true; //sorok

    if(tabla[0][0] != "" && tabla[0][0] == tabla[1][0] && tabla[1][0] == tabla[2][0]) return true;
    if(tabla[0][1] != "" && tabla[0][1] == tabla[1][1] && tabla[1][1] == tabla[2][1]) return true;
    if(tabla[0][2] != "" && tabla[0][2] == tabla[1][2] && tabla[1][2] == tabla[2][2]) return true; //oszlopok

    if(tabla[0][0] != "" && tabla[0][0] == tabla[1][1] && tabla[1][1] == tabla[2][2]) return true;
    if(tabla[0][2] != "" && tabla[0][2] == tabla[1][1] && tabla[1][1] == tabla[2][0]) return true; //atlos

    return false;
}

function katt(id) {
    let sor = parseInt(id[0]);
    let oszlop = parseInt(id[1]);


    if (tabla[sor][oszlop] == "") {
        tabla[sor][oszlop] = akt;
        document.getElementById("n" + id).innerHTML = akt;

        if(win()){
            window.alert(akt + " nyert!");
            document.getElementById("buttonka").click();
        }
        else {

            if (akt == "X") {
                akt = "O";
            } else {
                akt = "X";
            }
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