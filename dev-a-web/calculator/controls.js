function clrscr() {
    document.getElementById("result").value = "";
}
function disp(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}

    