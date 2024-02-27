function kalkulal(){
    //Űrlapadatok
    const szelesseg=document.getElementById('szelesseg').value;
    const magassag=document.getElementById('magassag').value;
    const papir=document.getElementById('papirtipus').value;
    //Számítások
    let terulet=Math.round((szelesseg*magassag)/10000);    
    let koltseg=terulet*papir;
    //Megjelenítés
    document.getElementById('valasz').style.visibility = "visible";
    
    const valaszKeret = document.getElementById('valasz');
    valaszKeret.innerHTML = `
        <p>A kalkuláció alapja:</p>
        <ul>
            <li>területe: <span id="terulet">${terulet} dm²</span></li>
            <li>papírköltség: <span id="papir">${papir} Ft/dm<sup>2</sup></span></li>
        </ul>
        <h2><span id="koltseg">${koltseg} Ft</span></h2>
    `;
    
    valaszKeret.style.visibility = 'visible'; // Valasz keret láthatóvá tétele
}


