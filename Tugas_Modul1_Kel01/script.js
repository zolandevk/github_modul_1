// arrow function
const cek = () => {
    var inputnilai = document.getElementById("nilai").value;
    // tenary operator
    let result = (inputnilai >= 40) ? 'pass' : 'fail';
    document.getElementById("hasil").innerHTML=result;
}