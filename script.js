function somar() {
    let v1 = parseFloat(document.getElementById("valor1").value);
    let v2 = parseFloat(document.getElementById("valor2").value);
    let resultado = v1 + v2;

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
        
        function multiplicar() {
            let v1 = parseFloat(document.getElementById("valor1").value);
            let v2 = parseFloat(document.getElementById("valor2").value);
            let resultado = v1 * v2;
        
            document.getElementById("resultado").innerText = "Resultado: " + resultado;
        }
        
        function subtrair() {
            let v1 = parseFloat(document.getElementById("valor1").value);
            let v2 = parseFloat(document.getElementById("valor2").value);
            let resultado = v1 - v2;
        
            document.getElementById("resultado").innerText = "Resultado: " + resultado;
        }
        
        function dividir() {
            let v1 = parseFloat(document.getElementById("valor1").value);
            let v2 = parseFloat(document.getElementById("valor2").value);
        
            if (v2 === 0) {
            document.getElementById("resultado").innerText = "Erro: divisão por zero!";
            } else {
            let resultado = v1 / v2;
            document.getElementById("resultado").innerText = "Resultado: " + resultado;
            }
        }

                    function limpar() {
                        document.getElementById("valor1").value = "";
                        document.getElementById("valor2").value = "";
                        document.getElementById("resultado").innerText = "Resultado: ";
                    }