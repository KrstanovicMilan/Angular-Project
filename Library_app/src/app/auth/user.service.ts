import { Injectable } from "@angular/core";
import { korpaService } from "../produkti/korpa.service";

export interface User{
    id : number;
    ime: string;
    prezime : string;
    telefon:string;
    adresa:string;
    email : string;
    password : string;

}


@Injectable()
export class UserService{

    currentUser : User  = UserService.dummyUserList[0];
    


    static dummyUserList  : Array<User> = [
        {
            id : 0,
            ime: 'guest',
            prezime: 'guest',
            telefon:'000000',
            adresa : 'guest',
            email : 'guest',
            password : 'guest'
        }
        ,
        {
            id : 1,
            ime: 'milan',
            prezime: 'krstanovic',
            telefon:'0654700968',
            adresa : 'Dejana Smiljkovica',
            email : 'milan.duca@gmail.com',
            password : '12345678'

        }
    ];

    getUserName(user : User) : string{
        return user.email;
    }
    

    logout(){
        this.currentUser = UserService.dummyUserList[0];
        korpaService.korpaItems = [];
        
    }
    

    getUserById(id : number) : User{
        var foundUser!: User;
        UserService.dummyUserList.forEach( user => {
            if(user.id == id){
                foundUser = user;
            }
        });
        this.currentUser = foundUser
        return foundUser;
    }

    getUser (userEmail : string) : User{
        var User = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
        return User;
    }

    isPasswordCorrect(userEmail : string , password : string) : boolean{
        return UserService.dummyUserList.find(userToFind => (userToFind.email == userEmail
             && userToFind.password == password )) != undefined;
    }

    registerUser(ime : string, prezime : string , telefon : string,adresa: string,
                    email:string,password:string) : User{
        var maxId : number = 0;

        UserService.dummyUserList.forEach(user => {
            if(maxId < user.id){
                maxId = user.id;
            }   
        })

        var id = ++maxId;

        var user : User = {
            id,
            ime,
            prezime,
            telefon,
            adresa,
            email,
            password,
        }

        UserService.dummyUserList.push(user);

        this.currentUser = user;
        console.log(user);
        return user;

    }

}