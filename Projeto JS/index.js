let list = [{ check: true, id: 1, titulo: 'Treinar', descricao: 'Academia' },
{ check: false, id: 2, titulo: 'Cuidado', descricao: 'Dentista' }];
console.log(list)

function preencherTabela() {
    let tabela = document.getElementById('tabela');

    for (let i = 0; i < list.length; i++) {
        let row = tabela.insertRow(i + 1);
        let cellChe = row.insertCell(0)
        let cellId = row.insertCell(1);
        let celltit = row.insertCell(2);
        let celldesc = row.insertCell(3);
        let action = row.insertCell(4);

        const actioncheck = document.createElement("input")
        actioncheck.type = "checkbox";
        cellChe.appendChild(actioncheck);
        actioncheck.classList.add("checkbox-custom");
        if( list[i].check === true){
            actioncheck.checked = true
        }
        cellId.innerHTML = list[i].id;
        celltit.innerHTML = list[i].titulo;
        celldesc.innerHTML = list[i].descricao;
        const actionButton =
            document.createElement("button");
        actionButton.textContent = "Editar";
        actionButton.addEventListener("click", () => {
            let escolha = parseInt(prompt('Digite \n 1- para alterar titulo \n 2- para alterar descrição \n 3- para alterar os dois'));
            if (escolha == 1) {
                list[i].titulo = prompt('Atualizar informação de titulo');
            } else if (escolha == 2) {
                list[i].descricao = prompt('Atualizar informação de descrição');
            } else if (escolha == 3) {
                list[i].titulo = prompt('Atualizar informação de titulo');
                list[i].descricao = prompt('Atualizar informação de descrição');
            } else {
                alert('Opção inválida');
            }
            limparTabela();
            preencherTabela();
        });

        action.appendChild(actionButton);

        const deleteButton =
            document.createElement("button");
        deleteButton.textContent = "Deletar";
        deleteButton.addEventListener("click", () => {
            list = list.slice();
            let index = list.indexOf(list[i]);
            confirm("Deseja deletar?")
                list.splice(index, 1);
                limparTabela();
                preencherTabela();
        });

        action.appendChild(deleteButton);

        action.style.width = "20%"
        actionButton.style.backgroundColor = "#198754";
        actionButton.style.width = "100px";
        actionButton.style.textAlign = "center";
        actionButton.style.marginRight = "5px"
        actionButton.style.color = "white";
        actionButton.style.border = "none";
        actionButton.style.borderRadius = "5px";
        deleteButton.style.backgroundColor = "#dc3545";
        deleteButton.style.width = "100px";
        deleteButton.style.textAlign = "center";
        deleteButton.style.color = "white";
        deleteButton.style.border = "none";
        deleteButton.style.borderRadius = "5px";

    };
};
document.addEventListener('DOMContentLoaded', function () {
    preencherTabela();

});

function limparTabela() {
    var tabela = document.getElementById('tabela');
    while (tabela.rows.length > 1) {
        tabela.deleteRow(1);
    };
};


function addtarefa() {

    let titulo = document.getElementById('titulo').value;
    let desc = document.getElementById('descri').value;

    if (titulo === '' || desc === '') {
        alert('Digite a tarefa!');
    } else {
        const id = list.length + 1
        list.push({ check: false, id: id, titulo: titulo, descricao: desc });
        console.log(list);
        if (titulo !== "" && desc !== "") {
            document.getElementById('titulo').value = "";
            document.getElementById('descri').value = "";
        };
        limparTabela();
        preencherTabela();
    };

};

function pesquisarid() {
    let pesquisa = document.getElementById('pesquisar').value;
    let filtro = list.filter(list => list.id == pesquisa);
    if (pesquisa === "" || pesquisa === null) {
        alert('Digite um ID')
    } else {
        if (filtro.length == 0) {
            alert('ID não encontrado');
        } else {
            for (let i = 0; i < list.length; i++) {
                if (pesquisa == list[i].id) {
                    alert(`O resultado da pesquisa \n ID: ${list[i].id} \n Titulo: ${list[i].titulo} \n Descrição: ${list[i].descricao} `);
                    if (pesquisa !== "") {
                        document.getElementById('pesquisar').value = "";
                    };
                };
            };
        };
    };

};