export interface knjiga{
    
    id: number;
    naziv: string;
    zanr: 'umetnost'| 'istorija'|'arhitektura';
    brojStrana: number;
    izdavac: string;
    datumIzdavanja: Date;
    cena: number;
    recenzije: number;

}