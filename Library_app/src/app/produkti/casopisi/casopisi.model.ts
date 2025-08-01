export interface casopis{
    
    id: number;
    naziv: string;
    domen: 'umetnost'| 'istorija'|'arhitektura';
    brojStrana: number;
    izdavac: string;
    datumIzdavanja: Date;
    cena: number;
    recenzije: number;

}