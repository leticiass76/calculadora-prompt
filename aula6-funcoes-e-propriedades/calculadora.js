//criando uma calculadora
function calculadora() {

    //definindo as operações e pegando valor de entrada do usuário
    //usamos o "\n" para fazer uma quebra de linha
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)"));

    //para evitar de quando digitar um numero que não está no menu não te mande para o calculo
    //verificando se a operação está válida
    if (!operacao || operacao >= 7) {
        alert("Erro - Operação inválida!");
        calculadora();
    } else {
        // definindo variáveis para criar operações
        // todas as entradas devem ser do tipo number
        let n1 = Number(prompt("Insira o primeiro valor:"));
        let n2 = Number(prompt("Insira o segundo valor:"));
        let resultado;

        // verificação para ver se nossas variáveis são válidas também
        if (!n1 || !n2) {
            alert("Erro - parâmetros inválidos!");
            calculadora();
        } else {
            
            // definindo as funções
            // vamos declarar nossas funções
            // utilizar crase (``) em (`${n1} + ${n2} = ${resultado}`), permite usar strings junto de expressões
            function soma() {
                resultado = n1 + n2;
                
                // mostrando o resultado usando template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resta da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
                novaOperacao();
            }

            //criar nova função nova Operação para não precisar atualizar ou dar refresh na página toda hora
            function novaOperacao() {
                let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim\n 2 - Não")

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert("Até mais!");
                } else {
                    alert("Digite uma opção válida!");
                    novaOperacao();
                }
            }
        }

        /*// criar um verificador de operações:
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }*/

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}

// chamada da função calculadora
calculadora();