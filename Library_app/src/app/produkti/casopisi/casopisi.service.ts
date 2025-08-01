import { Injectable } from "@angular/core";
import { casopis } from "./casopisi.model";

@Injectable()
export class casopisiService{
    static casopisi: Array<casopis> = [
    {
        id: 1,
        naziv:'prvi svetski rat',
        domen: 'istorija',
        brojStrana:50,
        izdavac:'Marko Markovic',
        datumIzdavanja: new Date(),
        cena:720,
        recenzije:3

    },

    {
        id: 2,
        naziv:'drugi svetski rat',
        domen: 'istorija',
        brojStrana:46,
        izdavac:'Nikola Nikolic',
        datumIzdavanja: new Date(),
        cena:650,
        recenzije:5

    },

    {
        id: 3,
        naziv:'zidanje kuca',
        domen: 'arhitektura',
        brojStrana:60,
        izdavac:'Dejan Petrovic',
        datumIzdavanja: new Date(),
        cena:800,
        recenzije:4

    },
    {
        id: 4,
        naziv:'Mona lisa',
        domen: 'umetnost',
        brojStrana:32,
        izdavac:'Nenad Pavic',
        datumIzdavanja: new Date(),
        cena:450,
        recenzije:3

    },
    {
        id: 5,
        naziv:'Balkanski ratovi',
        domen: 'istorija',
        brojStrana:30,
        izdavac:'Marko Markovic',
        datumIzdavanja: new Date(),
        cena:620,
        recenzije:1

    },
    {
        id: 6,
        naziv:'muzej',
        domen: 'umetnost',
        brojStrana:80,
        izdavac:'Marija Markovic',
        datumIzdavanja: new Date(),
        cena:770,
        recenzije:5

    },
    {
        id: 7,
        naziv:'Arhitektura Grcke',
        domen: 'arhitektura',
        brojStrana:90,
        izdavac:'Milica Savic',
        datumIzdavanja: new Date(),
        cena:900,
        recenzije:3

    },
    {
        id: 8,
        naziv:'Skenderbeg',
        domen: 'istorija',
        brojStrana:43,
        izdavac:'Pavle Danilovic',
        datumIzdavanja: new Date(),
        cena:500,
        recenzije:4

    },
    {
        id: 9,
        naziv:'Viljem Sekspir',
        domen: 'umetnost',
        brojStrana:43,
        izdavac:'Bojana Tadic',
        datumIzdavanja: new Date(),
        cena:900,
        recenzije:2

    },
    {
        id: 10,
        naziv:'Zgrade u Parizu',
        domen: 'arhitektura',
        brojStrana:75,
        izdavac:'Katarina Zivkovic',
        datumIzdavanja: new Date(),
        cena:1000,
        recenzije:4

    },
    {
        id: 11,
        naziv:'Zgrade u Milanu',
        domen: 'arhitektura',
        brojStrana:70,
        izdavac:'Katarina Zivkovic',
        datumIzdavanja: new Date(),
        cena:1000,
        recenzije:4

    },
    {
        id: 12,
        naziv:'Zgrade u Rimu',
        domen: 'arhitektura',
        brojStrana:60,
        izdavac:'Katarina Zivkovic',
        datumIzdavanja: new Date(),
        cena:1000,
        recenzije:5

    },
    {
        id: 13,
        naziv:'Ratovi',
        domen: 'istorija',
        brojStrana:65,
        izdavac:'Mirko Klisura',
        datumIzdavanja: new Date(),
        cena:450,
        recenzije:1

    },
    {
        id: 14,
        naziv:'umetnici 21 veka',
        domen: 'umetnost',
        brojStrana:25,
        izdavac:'Danica Danilovic',
        datumIzdavanja: new Date(),
        cena:360,
        recenzije:2

    },
    {
        id: 15,
        naziv:'Prvi Srpski ustanakl',
        domen: 'istorija',
        brojStrana:79,
        izdavac:'Nedeljko Lalic',
        datumIzdavanja: new Date(),
        cena:860,
        recenzije:3

    },
    {
        id: 16,
        naziv:'slikarstvo',
        domen: 'umetnost',
        brojStrana:43,
        izdavac:'Predrag Katic',
        datumIzdavanja: new Date(),
        cena:310,
        recenzije:1

    },
    {
        id: 17,
        naziv:'Drugi Srpski ustanak',
        domen: 'istorija',
        brojStrana:96,
        izdavac:'Jana Milic',
        datumIzdavanja: new Date(),
        cena:1100,
        recenzije:2

    },
    {
        id: 18,
        naziv:'Grcka arhitektura',
        domen: 'arhitektura',
        brojStrana:63,
        izdavac:'Jelena Grujic',
        datumIzdavanja: new Date(),
        cena:730,
        recenzije:4

    },
    {
        id: 19,
        naziv:'Grcka mitologija',
        domen: 'istorija',
        brojStrana:43,
        izdavac:'Dejan Savic',
        datumIzdavanja: new Date(),
        cena:700,
        recenzije:5

    },
    {
        id: 20,
        naziv:'Istorija 20og veka',
        domen: 'istorija',
        brojStrana:39,
        izdavac:'Petar Veljovic',
        datumIzdavanja: new Date(),
        cena:580,
        recenzije:6

    },


    ]

    getCasopisi(){
        return casopisiService.casopisi;
    }

    getCasopisById(id:number):casopis{
        var FoundCasopis!: casopis;
        casopisiService.casopisi.forEach(casopis=>{
            if(casopis.id==id){
                FoundCasopis = casopis;
            }
        });
        return FoundCasopis;
    }
}