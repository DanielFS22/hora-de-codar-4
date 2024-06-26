    // 1
        // Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, 
        //Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a 
        //lista com cada um deles. 


        // Função para cadastrar estudantes


        function cadastrarEstudantes(estudantes) {
            let nome = prompt ("Digite o nome do Estudante (ou 'PARE' para encerrar:)");
            if (nome.toUpperCase() === 'PARE') {
                return false;
            }   else {
                estudantes.push(nome);
                return true
            }
        }

        function main() {
            let estudantes = [];
            let continuarCadastro = true;

            while (continuarCadastro) {
                continuarCadastro = cadastrarEstudantes(estudantes);
            }

            alert (`Quantidade de estudantes cadastrados: ${estudantes.length}\nLista de Estudantes cadastrados:\n${estudantes.join('\n')}`)
        }

        main(); 


      // 2
      // Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, 
      // peça ao usuário para digitar o nome de um planeta. Verifique se o planeta que o usuário informou está na 
      // array e informe ao usuário.



              let planetas = ["TERRA", "MARTE", "PLUTÃO", "VÊNUS", "JÚPITER", "SATURNO"];

      let nomePlaneta = prompt("Digite o nome de um planeta:");

      if (planetas.includes(nomePlaneta.toUpperCase())) {
          alert(`O planeta "${nomePlaneta.toUpperCase()}" está na lista de planetas.\nSegue a lista de planetas: ${planetas}`);
      } else {
          alert(`O planeta "${nomePlaneta}" não está na lista de planetas.`); 
      }

      // 3
      // Vamos criar uma lista de compras.

      // Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.

      // Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista".

      // Peça novamente para o usuário digitar o nome de uma fruta para ser removida.

      // Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado".

      // Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".



      // Array de frutas
      let frutas = ["Maçã", "Banana", "Laranja", "Morango", "Pera", "Romã"];

      // Exibir a lista de frutas ao usuário
      alert("Lista de frutas disponíveis:\n" + frutas.join(', '));

      // Loop para remoção de frutas da lista
      while (frutas.length > 0) {
          // Solicita ao usuário digitar o nome de uma fruta
          let nomeFruta = prompt("Digite o nome de uma fruta para remover da lista de compras:");

          // Verifica se a fruta está na lista
          if (frutas.includes(nomeFruta)) {
              // Remove a fruta da lista
              let indiceFruta = frutas.indexOf(nomeFruta);
              frutas.splice(indiceFruta, 1);
              alert(`${nomeFruta} foi retirada da lista.`);
          } else {
              alert("Fruta indisponível na lista.");
          }

          // Verifica se ainda há frutas na lista
          if (frutas.length === 0) {
              alert("Lista de compras finalizada.");
          }
      }