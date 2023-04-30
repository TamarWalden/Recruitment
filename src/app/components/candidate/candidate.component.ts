import { Component, OnInit,Input } from '@angular/core';
import { Candidate } from 'src/app/classes/candidate';
import { Language } from 'src/app/classes/language';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  constructor() { }
  @Input("currentCandidate") candidate:Candidate = new Candidate(0,"",0,"");
  languages:Array<Language>=this.candidate.languages

  ngOnInit(): void {
  }
  getLanguges(){
      alert(this.candidate.languages.length)
  }
}
