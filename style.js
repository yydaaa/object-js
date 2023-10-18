const methodBurung={
    makan: function (porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama},selamat makan!`);
    },
    terbang:function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama},selamat terbang!`);
    },
    tidur:function(jam){
        this.energi += jam;
        console.log(`Halo ${this.nama},selamat tidur!`);
    }

};
function Burung(nama,energi) {
    let burung = Object.create(methodBurung);
    burung.nama = nama;
    burung.energi = energi;

    return burung;
}
let merpati = Burung('merpati',10);
let merak = Burung('merak',20);


// function Burung(nama,energi) {
//     this.nama = nama;
//     this.energi = energi;
// }
// Burung.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Halo ${this.nama} selamat makan !`;
// }

// Burung.prototype.terbang = function(jam){
//     this.energi -= jam;
//     return `Halo ${this.nama} selamat terbang !`;
// }

// Burung.prototype.tidur = function(jam){
//     this.energi += jam *2;
//     return `Halo ${this.nama} selamat tidur !`;
// }

// let merpati = new Burung('Burung Merpati',10);
// let merak = new Burung('merak',20);