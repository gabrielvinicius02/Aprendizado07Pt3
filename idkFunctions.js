//#16 Colcando em prática - Funções
let nomeUsuario = [];
let senhaUsuario = [];
let contador = 0;
CadastrarNomeSenha();


function CadastrarNomeSenha() {
    let nome = prompt("Digite o nome: ");
    let senha = parseInt(prompt("Insira sua senha: "));
    nomeUsuario[contador] = nome;
    senhaUsuario[contador] = senha;
    contador++;
    console.log("Usuário cadastrado com sucesso !! ");
}

function ExibirMenu() {
    let opcoes = parseInt(prompt("Digite:\n 1 - Cadastrar\n 2 - Fazer Login\n 3 - Excluir Cadastro\n 4 - Encerrar Operação "));
    return opcoes;
}

function fazerLogin() {
    let nomeLogin = prompt("Nome login: ");
    let senhaLogin = prompt("Senha login: ");
    
    for (let index = 0; index < nomeUsuario.length; index++) {
        if (nomeLogin == nomeUsuario[index]) {
            if (senhaLogin == senhaUsuario) {
                return true;
            }         
        } else if (index == nomeUsuario.length - 1) {
            return false;
                                                  
        }  
    }
}

function excluirCadastro() {
    let NomeSup = [];
    let SenhaSup = [];
    let contadorSup = 0;  
    let nomeExcluir = prompt("Digite o nome que deseja excluir: ");
    for (let index = 0; index < nomeUsuario.length; index++) {
        if (nomeExcluir != nomeUsuario[index]) {         
            NomeSup[contadorSup] = nomeUsuario[index];
            SenhaSup[contadorSup] = senhaUsuario[index];
            contadorSup++;
        } else {
            console.log("Usuário excluído!! ");
        }
        
    }

    nomeUsuario = NomeSup;
    senhaUsuario = SenhaSup;
}

let continuar = 1

while (continuar == 1) {
    let opcoes = ExibirMenu();
    switch (opcoes) {
        case 1:
            CadastrarNomeSenha();            
            break;
        case 2:
            let login = fazerLogin();
            if (login == true) {
                console.log("Login feito com sucesso. ");
            } else {
                console.log("Usuário não encontrado. ");
            }
            break;
        case 3:
            excluirCadastro();
            break;
        case 4:
            console.log("Programa encerrado. ");
            continuar = "não"
            break;
        default:
            console.log("Opção invalida. ");
            break;
    }
    if (continuar == 1) {
        continuar = parseInt(prompt("Deseja realizar outra operação?\n 1 - sim\n 2 - não"));
    }
}

    





