// ZAdaci FUnckije


// function naslovi (broj){
//     if(broj <1 || broj > 6){
//         console.log("Nivo mora biti u rasponu od broja 1 do 6"
//         );
//         return;
//     }

//     for (let i = 1; i<= broj; i++){
//         document.write(`<h${i}>Ovo je generisani naslov</h${i}>`)
//     }

// }

// naslovi(6);


// 2.	Izmeniti funkciju iz 1. zadatka tako da kao parametar prima 2 broja i generise naslove izmedju ta dva broja.
// 		PRIMER: Ako su funkciju prosledjeni brojevi 2 i 4, generisu se naslovi od h2 do h4.
// 		REZULTAT:
// 			<h2>Ovo je generisani naslov</h2>
// 			<h3>Ovo je generisani naslov</h3>
// 			<h4>Ovo je generisani naslov</h4>

// function naslovi (broj1,broj2){
           
//     if(broj1 > broj2){
//         console.log("prvi broj treba da bude manji od drugog zbog opsega");
//         return;
//     }

//         for (let i = broj1; i<= broj2; i++){
//             document.write(`<h${i}>Ovo je generisani naslov</h${i}>`)
//         }
    
//     }

//     naslovi(2,4);

// Kreirati funkciju koja ce uz oslonac na ugradjenu funkciju 'indexOf' proveravati da li prvi prosledjeni string sadrzi
// 	drugi.
// 		PRIMER: Ako su funkciji prosledjeni stringovi 'Dobar dan' i 'dan', funkcija treba da vrati vrednost true, 
// 		jer je string 'dan' sadrzan u stringu 'Dobar dan'.

// function provera(prvi,drugi){
//     let rezultat = prvi.indexOf(drugi) !== -1;

//     if(rezultat){
//         console.log("Postoji " + drugi + " u tekstu");
//     }

//     return rezultat;
// }

// let rezultatProvere = provera('Dobar dan', 'dan');

// console.log(provera);

// 4 zadatak izmena 

// function provera(prvi,drugi){

//     let maliPrviString = prvi.toLowerCase();
//     let maliDrugiString = drugi.toLowerCase();

//     let rezultat = maliPrviString.indexOf(maliDrugiString) !== -1;



//     if(rezultat){
//         console.log("Postoji " + drugi + " u tekstu");
//     }

//     return rezultat;
// }

// let rezultatProvere = provera('Dobar dan', 'dan');

// console.log(provera);

// 5 zadatak
// 5.	Kreirati program koji analizira JMBG koji je definisan kao string (kao u primerima '10. numbers' i '11. string').
// 	Znacajne delove JMBG-a izdvojiti putem funkcije substring.
// 	JMBG je broj formata 'DDMMGGGRRBBBK' i sastoji se od sledecih informacija:

// 		DD - dan rođenja
// 		MM - mesec rođenja
// 		GGG - zadnje tri cifre godine rođenja
// 		RR - region rođenja, odn. prebivalište za građane rođene pre 1976. godine.
// 		BBB - pol:
// 		    	000-499 - muški
// 		    	500-999 - ženski
// 		K - kontrolna cifra

// 	U zadatku ispisati datum rodjenja i pol osobe za zadani JMBG. 



// function unosJmbg(jmbg){

//     if(jmbg.length != 13){
//         return "Neispravna duzina JMBG-a"
//     }

    

//     let danRodjenja = jmbg.substring(0,2);
//     let mesecRodjenja = jmbg.substring(2,4);
//     let zadnjeTri = jmbg.substring(4,7)
    
//     let polMZ = "";
//     if(polMZ <= 499){
//         polMZ = "muski"
//     }else if (polMZ >=500){
//         polMZ = "zenski"

//     }else{
//         return "Netacan unos pol"
//     }
    
//     let datumRodjenja = `${danRodjenja}.${mesecRodjenja}.1${zadnjeTri}`

//     return `Datum rodjenja: ${datumRodjenja} Pol: ${polMZ}`;
    

// }

// console.log(unosJmbg("1102994810120"));

// 6.	Uz pomoc funkcije split() kreirati funckiju koja ce za zadati deo URL-a izvuci vrednosti HTTP GET parametara.
// 	PRIMER:	Zadat je deo urla: '?ime=sinisa&prezime=mihajlovic'
// 	REZULTAT: Rezultat je sledeci ispis u HTML dokument:
// 		ime=sinisa
// 		prezime=mihajlovic	


// function urlSpliter(url){

//     let ime = url.slice(1).split('&');
//     // console.log(ime);
    
//     for (var i = 0; i< ime.length; i++ ){
//         document.write(ime[i] + '<br>');
//     }

// }

// console.log(urlSpliter('?ime=sinisa&prezime=mihajlovic'));
// console.log(urlSpliter('?ime=Aljosa&prezime=ruzic'));

// 7.	Kreirati JavaScript program koji u HTML dokument ispisuje koliko je dana ostalo do vikenda u odnosu na trenutni dan.
// 	Napomena: Trenutni dan mozete dobiti na sledeci nacin:
// 	var danas = new Date();
// 	var dan = danas.getDay(); // 0 - nedelja, 6 - subota


var danas = new Date();
var dan = danas.getDay();

console.log(danas);

var doVikenda = 5-dan;
console.log(doVikenda);

if (dan === 0 || dan === 6){
    document.write("Ajmo na pivo, vikend je!");
} else {
    document.write("Do vikenda je ostalo jos " + doVikenda + " dana")
}

