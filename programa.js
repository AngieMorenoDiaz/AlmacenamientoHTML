let botonAlmacenar=document.getElementById ("Almacenar");
botonAlmacenar.addEventListener("click", ()=>{
    sessionStorage.setItem("Nombre", "Angie");
    sessionStorage.setItem("Apellido", "Moreno");
    localStorage.setItem("Nombre", "Angie");
    localStorage.setItem("Apellido", "Moreno");
});

let botonBorrar=document.getElementById ("Borrar");
botonBorrar.addEventListener ("click", ()=>{
    sessionStorage.clear();
    localStorage.clear();
})

function construirFilas(){

    let fuentes=[localStorage, sessionStorage];
    
    for (let k=0; k <fuentes.length; k++){
        let miFuente=fuentes [k]

        for(let i=0; i<miFuente.length; i++){
            let cuerpoTabla=document.getElementById ("cuerpoTabla");
            let fila=cuerpoTabla.insertRow(i);
            let celda=fila.insertCell(0);
            let texto=document.createTextNode (miFuente.key (i));
            celda.appendChild (texto);

            celda=fila.inssertCell(1);
            texto=document.createTextNode(miFuente.getItem(key(i)));
            celda.appendChild(texto);         
        }  
    }  
}         /*let clave=miFuente.key (i);
            letvalor=miFuente.getItem (miFuente.key(i));
            cuerpoTabla.innerHTML+= cuerpoTabla.innerHTML + '<tr><td>${clave}</td></tr>';*/

            /*let fila=document.createElement("tr");
            let celda=document.createAttribute ("td");
            let texto=document.createTextNode (miFuente.key (i));
            celda.appendChild (texto);
            fila.appendChild (celda);

            celda=document.createElement ("td");
            let valor=sessionStorage.getItem (miFuente.key (i));
            texto=document.createTextNode(valor);
            fila.appendChild (celda);
            cuerpoTabla.appendChild (fila); */
