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

class acciones {
    constructor(respirar, comer, copular, morir) {
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
        if (animal11.respirar === true && animal11.comer === true && animal11.copular === true && animal11.morir === true) {
            document.getElementById("infop1").innerHTML = `Sexo: ${animal1.sex} <br/> Edad: ${animal1.age} <br/> El tamaño es: ${animal1.size} </br> Estado: Saludable`
        } else if (animal11.comer === true && animal11.copular === true) {
            document.getElementById("infop1").innerHTML = `Sexo: ${animal1.sex} <br/> Edad: ${animal1.age} <br/> El tamaño es: ${animal1.size} </br> Estado: Medianamente saludable`
        } else if (animal11.respirar === false && animal11.comer === false) {
            document.getElementById("infop1").innerHTML = `Sexo: ${animal1.sex} <br/> Edad: ${animal1.age} <br/> El tamaño es: ${animal1.size} </br> Estado: Deplorable`
        } else {
            document.getElementById("infop1").innerHTML = `Sexo: ${animal1.sex} <br/> Edad: ${animal1.age} <br/> El tamaño es: ${animal1.size} </br> Estado: Medio`
        }

    } else if (num === 2) {
        document.getElementById("nm2").innerHTML = animal2.name
        if (animal22.respirar === true && animal22.comer === true && animal22.copular === true && animal22.morir === true) {
            document.getElementById("infop2").innerHTML = `Sexo: ${animal2.sex} <br/> Edad: ${animal2.age} <br/> El tamaño es: ${animal2.size} </br> Estado: Saludable`
        } else if (animal22.comer === true && animal22.copular === true) {
            document.getElementById("infop2").innerHTML = `Sexo: ${animal2.sex} <br/> Edad: ${animal2.age} <br/> El tamaño es: ${animal2.size} </br> Estado: Medianamente saludable`
        } else if (animal22.respirar === false && animal22.comer === false) {
            document.getElementById("infop2").innerHTML = `Sexo: ${animal2.sex} <br/> Edad: ${animal2.age} <br/> El tamaño es: ${animal2.size} </br> Estado: Deplorable`
        } else {
            document.getElementById("infop2").innerHTML = `Sexo: ${animal2.sex} <br/> Edad: ${animal2.age} <br/> El tamaño es: ${animal2.size} </br> Estado: Medio`
        }
    } else if (num === 3) {
        document.getElementById("nm3").innerHTML = animal3.name
        if (animal33.respirar === true && animal33.comer === true && animal33.copular === true && animal33.morir === true) {
            document.getElementById("infop3").innerHTML = `Sexo: ${animal3.sex} <br/> Edad: ${animal3.age} <br/> El tamaño es: ${animal3.size} </br> Estado: Saludable`
        } else if (animal33.comer === true && animal33.copular === true) {
            document.getElementById("infop3").innerHTML = `Sexo: ${animal3.sex} <br/> Edad: ${animal3.age} <br/> El tamaño es: ${animal3.size} </br> Estado: Medianamente saludable`
        } else if (animal33.respirar === false && animal33.comer === false) {
            document.getElementById("infop3").innerHTML = `Sexo: ${animal3.sex} <br/> Edad: ${animal3.age} <br/> El tamaño es: ${animal3.size} </br> Estado: Deplorable`
        } else {
            document.getElementById("infop3").innerHTML = `Sexo: ${animal3.sex} <br/> Edad: ${animal3.age} <br/> El tamaño es: ${animal3.size} </br> Estado: Medio`
        }
    }
}

function respirar(num) {
    switch (num) {
        case 1:
            if (animal11.respirar === true) {
                swal('Accion respirar', 'Tu mascota Tamagochi ha respirado con exito', 'success');
            } else {
                swal('Accion respirar', 'Tu mascota Tamagochi no puede respirar', 'error');
            }
            break;
        case 2:
            if (animal22.respirar === true) {
                swal('Accion respirar', 'Tu mascota Pou ha respirado con exito', 'success');
            } else {
                swal('Accion respirar', 'Tu mascota Pou no puede respirar', 'error');
            }
            break;
        case 3:
            if (animal33.respirar === true) {
                swal('Accion respirar', 'Tu mascota Perro ha respirado con exito', 'success');
            } else {
                swal('Accion respirar', 'Tu mascota Perro no puede respirar', 'error');
            }
            break;
    }
}

function comer(num) {
    switch (num) {
        case 1:
            if (animal11.comer === true) {
                swal('Accion comer', 'Tu mascota Tamagochi a comido con exito', 'success');
            } else {
                swal('Accion comer', 'Tu mascota Tamagochi no ha podido comer', 'error');
            }
            break;
        case 2:
            if (animal22.comer === true) {
                swal('Accion comer', 'Tu mascota Pou a comido con exito', 'success');
            } else {
                swal('Accion comer', 'Tu mascota Pou no ha podido comer', 'error');
            }
            break;
        case 3:
            if (animal33.comer === true) {
                swal('Accion comer', 'Tu mascota Perro a comido con exito', 'success');
            } else {
                swal('Accion comer', 'Tu mascota Perro no ha podido comer', 'error');
            }
            break;
    }
}

function copular(num) {
    switch (num) {
        case 1:
            if (animal11.copular === true) {
                swal('Accion copular', 'Tu mascota Tamagochi ha podido copular con éxito', 'success');
            } else {
                swal('Accion copular', 'Tu mascota Tamagochi no a podido copular por falta de aparato reproductor, va morir solo', 'error');
            }
            break;
        case 2:
            if (animal22.copular === true) {
                swal('Accion copular', 'Tu mascota Pou ha podido copular con éxito', 'success');
            } else {
                swal('Accion copular', 'Tu mascota Pou no a podido copular por falta de aparato reproductor, va morir solo', 'error');
            }
            break;
        case 3:
            if (animal33.copular === true) {
                swal('Accion copular', 'Tu mascota Perro ha podido copular con éxito', 'success');
            } else {
                swal('Accion copular', 'Tu mascota Perro no a podido copular por falta de aparato reproductor, va morir solo', 'error');
            }
            break;
    }
}

function morir(num) {
    switch (num) {
        case 1:
            if (animal11.morir === true) {
                swal('Accion morir', 'Tu mascota Tamagochi a muerto', 'success');
            } else {
                swal('Accion morir', 'Tu mascota Tamagochi no puede morir', 'error');
            }
            break;
        case 2:
            if (animal22.morir === true) {
                swal('Accion morir', 'Tu mascota Pou a muerto', 'success');
            } else {
                swal('Accion morir', 'Tu mascota Pou no puede morir', 'error');
            }
            break;
        case 3:
            if (animal11.morir === true) {
                swal('Accion morir', 'Tu mascota Perro a muerto', 'success');
            } else {
                swal('Accion morir', 'Tu mascota Perro no puede morir', 'error');
            }
            break;
    }
}

const animal1 = new SerVivo("Tamagochi", "Masculino", "2 años", "Mediano");
const animal11 = new acciones(false, true, false, true);
const animal2 = new SerVivo("Pou", "Masculino", "1 año", "Chiquito");
const animal22 = new acciones(false, false, true, false);
const animal3 = new SerVivo("Perro", "Masculino", "11 años", "Grande");
const animal33 = new acciones(true, true, true, true);