import { Injectable } from "@angular/core";
import { knjiga } from "./knjige.model";


@Injectable()
export class knjigeService{
    static knjige: Array<knjiga> = [
    {
        id: 1,
        naziv:'Harry Poter 1',
        zanr : 'umetnost',
        brojStrana:250,
        izdavac:'Marko Markovic',
        datumIzdavanja: new Date(),
        cena:720,
        recenzije:5

    },

    {
        id: 2,
        naziv:'Harry Poter 2',
        zanr: 'umetnost',
        brojStrana:246,
        izdavac:'Nikola Nikolic',
        datumIzdavanja: new Date(),
        cena:650,
        recenzije:4

    },

    {
        id: 3,
        naziv:'Harry Poter 3',
        zanr : 'umetnost',
        brojStrana:360,
        izdavac:'Dejan Petrovic',
        datumIzdavanja: new Date(),
        cena:800,
        recenzije:3

    },
    {
        id: 4,
        naziv:'Harry Poter 4',
        zanr: 'umetnost',
        brojStrana:320,
        izdavac:'Nenad Pavic',
        datumIzdavanja: new Date(),
        cena:450,
        recenzije:2

    },
    {
        id: 5,
        naziv:'Harry Poter 5',
        zanr: 'umetnost',
        brojStrana:300,
        izdavac:'Marko Markovic',
        datumIzdavanja: new Date(),
        cena:620,
        recenzije:1

    },
    {
        id: 6,
        naziv:'Harry Poter 6',
        zanr: 'umetnost',
        brojStrana:280,
        izdavac:'Marija Markovic',
        datumIzdavanja: new Date(),
        cena:770,
        recenzije:3

    },
    {
        id: 7,
        naziv:'Harry Poter 7',
        zanr: 'umetnost',
        brojStrana:190,
        izdavac:'Milica Savic',
        datumIzdavanja: new Date(),
        cena:900,
        recenzije:4

    },
    {
        id: 8,
        naziv:'Harry Poter 8',
        zanr : 'umetnost',
        brojStrana:430,
        izdavac:'Pavle Danilovic',
        datumIzdavanja: new Date(),
        cena:500,
        recenzije:5

    },
    {
        id: 9,
        naziv:'Future of arhitecture',
        zanr: 'arhitektura',
        brojStrana:430,
        izdavac:'Bojana Tadic',
        datumIzdavanja: new Date(),
        cena:900,
        recenzije:4

    },
    {
        id: 10,
        naziv:'Istorija Srba',
        zanr: 'istorija',
        brojStrana:75,
        izdavac:'Katarina Zivkovic',
        datumIzdavanja: new Date(),
        cena:1000,
        recenzije:3

    },
    {
        id: 11,
        naziv:'Rimska istorija',
        zanr: 'istorija',
        brojStrana:70,
        izdavac:'Katarina Zivkovic',
        datumIzdavanja: new Date(),
        cena:1000,
        recenzije:1

    },
    {
        id: 12,
        naziv:'Arhitektura i dizajn',
        zanr: 'arhitektura',
        brojStrana:60,
        izdavac:'Katarina Zivkovic',
        datumIzdavanja: new Date(),
        cena:1000,
        recenzije:2

    },
    {
        id: 13,
        naziv:'Arhitektura racunara',
        zanr: 'arhitektura',
        brojStrana:65,
        izdavac:'Mirko Klisura',
        datumIzdavanja: new Date(),
        cena:450,
        recenzije:1

    },
    {
        id: 14,
        naziv:'Istorija rusa',
        zanr: 'istorija',
        brojStrana:25,
        izdavac:'Danica Danilovic',
        datumIzdavanja: new Date(),
        cena:360,
        recenzije:2

    },
    {
        id: 15,
        naziv:'Srpska umetnost',
        zanr: 'umetnost',
        brojStrana:79,
        izdavac:'Nedeljko Lalic',
        datumIzdavanja: new Date(),
        cena:860,
        recenzije:3

    },
    {
        id: 16,
        naziv:'Slikarstvo i vajarstvo',
        zanr: 'umetnost',
        brojStrana:43,
        izdavac:'Predrag Katic',
        datumIzdavanja: new Date(),
        cena:310,
        recenzije:4

    },
    {
        id: 17,
        naziv:'Barok kod Srba',
        zanr: 'umetnost',
        brojStrana:96,
        izdavac:'Jana Milic',
        datumIzdavanja: new Date(),
        cena:1100,
        recenzije:3

    },
    {
        id: 18,
        naziv:'Boj na kosovu',
        zanr: 'istorija',
        brojStrana:63,
        izdavac:'Jelena Grujic',
        datumIzdavanja: new Date(),
        cena:730,
        recenzije:5

    },
    {
        id: 19,
        naziv:'Grcka mitologija',
        zanr: 'istorija',
        brojStrana:43,
        izdavac:'Dejan Savic',
        datumIzdavanja: new Date(),
        cena:700,
        recenzije:1

    },
    {
        id: 20,
        naziv:'Istorija 20og veka',
        zanr: 'istorija',
        brojStrana:39,
        izdavac:'Petar Veljovic',
        datumIzdavanja: new Date(),
        cena:580,
        recenzije:2

    },


    ]

    getKnjige(){
        return knjigeService.knjige;
    }

    getKnjigaById(id:number):knjiga{
        var FoundKnjiga!: knjiga;
        knjigeService.knjige.forEach(knjiga=>{
            if(knjiga.id==id){
                FoundKnjiga = knjiga;
            }
        });
        return FoundKnjiga;
    }
}