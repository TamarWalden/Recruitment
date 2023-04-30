import { Language } from "./language";

export class Candidate {
    public LanguagesList:Array<Language>
    constructor(public id:number,public name:string, public yearOfStartWork:number, public lastUpdateDetails:string,)
    {
        this.LanguagesList=[]
    }
}