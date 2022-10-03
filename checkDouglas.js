function aluno(nome, quantidaDeFaltas, notas){
    this.nome = nome,
    this.quantidaDeFaltas = quantidaDeFaltas,
    this.notas = notas
    this.calculaMedia = function () {
        let soma = 0
        for (let x = 0; x < this.notas.length; x++){
            soma = soma + this.notas[x]
        }
        media = soma / this.notas.length 
        return media
    };
    this.faltas = function () {
        let faltas = this.quantidaDeFaltas + 1
        return faltas
    }
};

let aluno1 = new aluno('Douglas', 5, [5, 2, 6, 10]);
let aluno2 = new aluno('Roberto', 8, [4, 3, 5, 9]);


console.log(aluno1.calculaMedia());
console.log(aluno2.calculaMedia());


const curso = {
    curso : "Programação Inperativa",
    notaAprovado : 6,
    FaltasMaximas : 5,
    ListaDosAlunos  : [aluno1,aluno2],
    adicionaAlunos (nome, notas, faltas){
        const alunoN = new aluno(nome, notas, faltas);
        this.ListaDosAlunos.push(alunoN)
    },


    aprovadoOuNao (aluno) {
        let mediaaa = this.ListaDosAlunos[aluno].calculaMedia()
        let faltaaa = this.ListaDosAlunos[aluno].faltas()
        if (mediaaa >= this.notaAprovado && faltaaa < this.FaltasMaximas) {
            return this.ListaDosAlunos[aluno].nome + "esta aprovado";
        } else if (faltaaa == this.FaltasMaximas && this.notaAprovado * 10.1 < mediaaa) {
            return this.ListaDosAlunos[aluno].nome + "esta aprovado";
        } else {
            return this.ListaDosAlunos[aluno]["nome"] + "esta reprovado"
        }
    },

    aprovadoOuNaoBoolean(){
        let aprovados = []
        for ( let i = 0; i < this.ListaDosAlunos.length; i++){
            let mediaaa = this.ListaDosAlunos[i].calculaMedia()
            let faltaaa = this.ListaDosAlunos[i].faltas()
            if (mediaaa >= this.notaAprovado && faltaaa < this.FaltasMaximas) {
                aprovados.push(this.ListaDosAlunos[i].nome + " " + "is"+ " " + true);
            } else if (faltaaa == this.FaltasMaximas && this.notaAprovado * 10.1 < media) {
                aprovados.push(this.ListaDosAlunos[i].nome + " " + "is"+ " " + true);
            } else {
                aprovados.push(this.ListaDosAlunos[i]["nome"] + " " + "is"+ " " + false);
            }
        }
        return aprovados
    }
}

curso.adicionaAlunos("Goularte", 4, [4, 5, 7, 9]);

console.log(curso.ListaDosAlunos);
console.log(curso.aprovadoOuNaoBoolean());