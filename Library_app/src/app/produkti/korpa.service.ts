import { Injectable } from "@angular/core";
import { korpaItem } from "./korpa.model";


@Injectable()
export class korpaService{

    static korpaItems: Array<korpaItem> = [
        
    ]
    

    addItem(naziv: string, cena: number)
    {

      

        var maxId:number = 0;

        korpaService.korpaItems.forEach(item => {

            if(item.naziv===naziv)
                this.kvantitetPlus(item.id);
            else{

            if(maxId<item.id){
                maxId=item.id;

                var id = ++maxId;

                var item : korpaItem = {
                    id,
                    naziv,
                    cena,
                    kvantitet:1
                }
            
            korpaService.korpaItems.push(item);

            }
        }

        })

        if(korpaService.korpaItems.length==0)
        {
           var  id=1;
            var item : korpaItem = {
                id,
                naziv,
                cena,
                kvantitet:1
            }
            korpaService.korpaItems.push(item);
        }
    
        
    }

    getkorpaItems(){
        return korpaService.korpaItems;
    }
    
    kvantitetPlus(id:number){
        korpaService.korpaItems.forEach(item=>{
            if(item.id == id)
            {
                item.kvantitet++;
            }
        })
    }

    kvantitetMinus(id:number){
        korpaService.korpaItems.forEach(item=>{
            if(item.id == id)
            {
                item.kvantitet--;
            }
        })
        
    }

    delItems(){
        korpaService.korpaItems=[];
    }

    delItem(id:number){

        let index = 0;
        korpaService.korpaItems.forEach(item => {
            
            if(item.id == id)
            {
                korpaService.korpaItems.splice(index,1);

            }
            index++;

            })
    }


    getkorpaItemById(id:number): korpaItem{
        var FoundItem!: korpaItem;
        korpaService.korpaItems.forEach(item=>{
            if(item.id == id)
            {
                FoundItem = item;
            }
        })
        return FoundItem;
    }
}