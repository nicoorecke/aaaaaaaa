gravedades=[3.7,8.9,9.81,3.71,24.79,9.1,7.8,11]
planetitas=['Mercurio','Venus',"Tierra","Marte","Jupiter","Saturno","Uranus","Neptuno"]



function peso_Jupiter () {
    const input = document.getElementById("peso");
    const planetas = document.getElementById("planetas")
    const peso = input.value;
    if (peso){
        h=0
        lista=[]
        planeta=""
        for (i of gravedades) {
            
            t =planetitas[h]
            pesonuevo=Math.round(peso*i/9.81,-1);
            planeta = planeta +"<li>" + t + ": " + pesonuevo + " kg</li>"
            h+=1
        }
        planetas.innerHTML = planeta
    }
    else{
        return
    }
}

function calcular_peso() {
    const input = document.getElementById("peso");
    const valor = input.value;

    const planetas = document.getElementById("planetas")
    const perimetro = peso_Jupiter(valor)
    alert(perimetro)
}