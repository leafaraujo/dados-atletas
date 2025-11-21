class Atleta{
    constructor(name, age, weight, height, notas){
        this.name= name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.notas = notas;
        this.category = this.calculaCategoria(age);
        this.IMC = this.calculaIMC(weight, height);
        this.average = this.calcularMedia(notas)
    }

    calcularMedia(notas){
        let lastPos = notas.length - 1
        let notasComputadas = notas.slice(1,lastPos)
        let soma = 0
        notasComputadas.forEach(nota => {
            soma += nota;
        });
        let average = soma / (notasComputadas.length)
        return average
    }

    calculaCategoria(age){
        if(age >= 9 && age <= 11){
            return "Infantil"
        }
        else if(age >= 12 && age <= 13){
            return "Juvenil"
        }
        else if(age >= 14 && age <= 15){
            return "Intermediário"
        }
        else if(age >= 16 && age <= 30){
            return "Adulto"
        }
        else{
            return "Sem categoria"
        }
    }

    calculaIMC(weight, height){
        return weight / (height * height);
    }
    obtemNomeAtleta(){
        return this.name;
    }
    
    obtemIdadeAtleta(){
        return this.age;
    }
    obtemPesoAtleta(){
        return this.weight;
    }
    obtemNotasAtleta(){
        return this.notas;
    }

    obtemCategoria(){
        return this.category;
    }

    obtemIMC(){
        return this.IMC;
    }
    
    obtemAltura(){
        return this.height;
    }

    obtemMediaValida(){
        return this.average
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`)
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`)
console.log(`Peso: ${atleta.obtemPesoAtleta()}`)
console.log(`Altura: ${atleta.obtemAltura()}`)
console.log(`Notas: ${atleta.obtemNotasAtleta()}`)
console.log(`Categoria: ${atleta.obtemCategoria()}`)
console.log(`IMC: ${atleta.obtemIMC()}`)
console.log(`Média válida: ${atleta.obtemMediaValida()}`)