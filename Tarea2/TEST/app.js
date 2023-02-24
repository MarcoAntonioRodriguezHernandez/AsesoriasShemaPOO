class SerVivo {
    constructor(name, sex, age, size) {
        this._name = name;
        this._sex = sex;
        this._age = age;
        this._size = size;
    }
    get name() {
        return this._name;
    }
    get sex() {
        return this._sex;
    }
    get age() {
        return this._age;
    }
    get size() {
        return this._size;
    }
}
class acciones{
    constructor(respirar,comer,copular,morir) {
        this._respirar = respirar;
        this._comer = comer;
        this._copular = copular;
        this._morir = morir;
    }
    get respirar() {
        return this._respirar;
    }
    get comer() {
        return this._comer;
    }
    get copular() {
        return this._copular;
    }
    get morir() {
        return this._morir;
    }
}

function cambiarNombre(num) {
    if (num === 1) {
        document.getElementById("nm1").innerHTML = animal1.name
        document.getElementById("infop1").innerHTML = `Sexo: ${animal1.sex} <br/> Edad: ${animal1.age} <br/> El tamaño es: ${animal1.size}`
        if(this._respirar == true && this._comer == true && this._copular == true && this._morir === true){
            document.getElementById("infop1").innerHTML = "Estado: Saludable";
        }
    } else if (num === 2) {
        document.getElementById("nm2").innerHTML = animal2.name
        document.getElementById("infop2").innerHTML = `Sexo: ${animal2.sex} <br/> Edad: ${animal2.age} <br/> El tamaño es: ${animal2.size}`
    } else if (num === 3) {
        //document.getElementById("nm3").innerHTML = animal3.name
        //document.getElementById("infop3").innerHTML = `Sexo: ${animal3.sex} <br/> Edad: ${animal3.age} <br/> El tamaño es: ${animal3.size}`
        if(animal33.respirar === true){
            document.getElementById("nm3").innerHTML = animal3.name
            document.getElementById("infop3").innerHTML = `Sexo: ${animal3.sex} <br/> Edad: ${animal3.age} <br/> El tamaño es: ${animal3.size}`
            document.getElementById("infop3").innerHTML = "Estado: Saludable";
        }
    }
}
function respirar(num){
    if(num===1){
        swal('Accion respirar','Tu mascota Tamagochi no puede respirar','error');
    }else if(num===2){
        swal('Accion respirar','Tu mascota Pou a respirado con exito','success');
    }else if(num===3){
        swal('Accion respirar','Tu mascota Perro a respirado con exito','success');
    }
}
function comer(num){
    if(num===1){
        swal('Accion comer','Tu mascota Tamagochi a comido con exito','success');
    }else if(num===2){
        swal('Accion comer','Tu mascota Pou a comido con exito','success');
    }else if(num===3){
        swal('Accion comer','Tu mascota Perro a comido con exito','success');
    }
}
function copular(num){
    if(num===1){
        swal('Accion copular','Tu mascota Tamagochi no a podido copular por falta de aparato reproductor, va morir solo','error');
    }else if(num===2){
        swal('Accion copular','Tu mascota Pou no a podido copular por falta de aparato reproductor, va morir solo','error');
    }else if(num===3){
        swal('Accion copular','Tu mascota Perro a copulado con exito, ya es padre','success');
    }
}
function morir(num){
    if(num===1){
        swal('Accion morir','Tu mascota Tamagochi a muerto','success');
    }else if(num===2){
        swal('Accion morir','Tu mascota Pou no puede morir','error');
    }else if(num===3){
        swal('Accion morir','Tu mascota Perro a muerto','success');
    }
}

const animal1 = new SerVivo("Tamagochi", "Masculino", "2 años", "Mediano");
const animal11 = new acciones(false,true,false,true);
const animal2 = new SerVivo("Pou", "Masculino", "1 año", "Chiquito");
const animal22 = new acciones(true, true, false, false);
const animal3 = new SerVivo("Perro", "Masculino", "11 años", "Grande");
const animal33 = new acciones(true, true, true,true);