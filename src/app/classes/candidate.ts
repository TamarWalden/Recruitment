import { Language } from "./language";

export class Candidate {
    constructor(public id:number,public name:string, public yearOfStartWork?:number,
         public lastUpdateDetails?:string,public languages:Array<Language>=new Array<Language>())
    {
    }
}