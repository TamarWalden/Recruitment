import { Injectable } from '@angular/core';
import { Candidate } from '../classes/candidate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  public candidates: Array<Candidate> = []
  public matchCandidates: Array<Candidate> = []
  Url = "https://localhost:44391/api/Candidate/";

  constructor(private myHttp: HttpClient) { }

  private getCandidatesList(): Observable<Array<Candidate>> {
    return this.myHttp.get<Array<Candidate>>(this.Url + "GetAllCandidates")
  }

  getCandidates() {
    this.getCandidatesList().subscribe(
      (myData) => {
        this.candidates = myData;
        return this.candidates
      },
      myErr => {
        alert("There is no connection to the list of candidates on the server" + myErr.message)
      }
    );
  }
  private getMatchCandidatesList(languageId: number, junior: boolean): Observable<Array<Candidate>> {
    return this.myHttp.get<Array<Candidate>>(this.Url + "GetAllMatchCandidates?languageId=" + languageId + "&junior=" + junior)
  }

  getMatchCandidates(languageId: number, junior: boolean) {
    this.getMatchCandidatesList(languageId, junior).subscribe(
      (myData) => {
        this.matchCandidates = myData;
        this.candidates = this.matchCandidates
        return this.matchCandidates
      },
      myErr => {
        alert("There is no connection to the list of candidates on the server" + myErr.message)
      }
    );
  }
}
