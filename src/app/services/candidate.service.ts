import { Injectable } from '@angular/core';
import { Candidate } from '../classes/candidate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private candidates: Array<Candidate> = []
  private matchCandidates: Array<Candidate> = []
  Url = "https://localhost:44391/api/Candidate/";

  constructor(private myHttp: HttpClient) { }

  private getCandidatesList(): Observable<Array<Candidate>> {
    return this.myHttp.get<Array<Candidate>>(this.Url + "GetAllCandidates")
  }

  getCandidates() {
    this.getCandidatesList().subscribe(
      (myData) => {
        this.candidates = myData;
      },
      myErr => {
        alert("אני לא מתחבר לרשימת מועמדים בשרת"+myErr.message)
      }
    );
    return this.candidates
  }
  private getMatchCandidatesList(languageId:number,junior:boolean): Observable<Array<Candidate>> {
    return this.myHttp.get<Array<Candidate>>(this.Url + "GetAllMatchCandidates?languageId="+languageId+"&junior="+junior)
  }

  getMatchCandidates(languageId:number,junior:boolean) {
    this.getMatchCandidatesList(languageId,junior).subscribe(
      (myData) => {
        this.matchCandidates = myData;
        // alert(this.matchCandidates[0].name)
      },
      myErr => {
        alert("אני לא מתחבר לרשימת מועמדים בשרת"+myErr.message)
      }
    );
    if(this.matchCandidates=[])
      alert("There are no suitable candidates")
    return this.matchCandidates
  }
}
