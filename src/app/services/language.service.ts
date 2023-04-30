import { Injectable } from '@angular/core';
import { Language } from '../classes/language';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  public languages:Array<Language>=[]
  Url = "https://localhost:44391/api/Candidate/";

  constructor(private myHttp:HttpClient) { }
  
  private getLanguagesList():Observable<Array<Language>>{
    return this.myHttp.get<Array<Language>>(this.Url+"GetAllLanguages")
  }

  getLanguages(){
    this.getLanguagesList().subscribe(
      (myData)=>
       {
         this.languages = myData;
       },
       myErr=>
       {
        alert("אני לא מתחבר לרשימת שפות בשרת"+myErr.message)
       }   
       );
      return this.languages
  }
}
