import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/classes/candidate';
import { Language } from 'src/app/classes/language';
import { LanguageService } from 'src/app/services/language.service';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public languageService: LanguageService, public candidateService: CandidateService) { }
  showCandidate: boolean = false;
  showLanguage: boolean = false;
  showFilterOptions: boolean = false;
  selectedJunior: boolean = false;
  ngOnInit(): void {
  }

  getCandidates() {
    this.candidateService.getCandidates()
    this.showCandidate = !this.showCandidate
  }

  Filtering() {
    this.showFilterOptions = !this.showFilterOptions
    this.languageService.getLanguages()
    //לטפל באפשור של הסינון רק על תצוגת עובדים פועלת
  }

  toFilter(selectedLanguage: string, selectedJunior: boolean) {
    if (selectedLanguage == "")
      alert("No language selected")
    else {
      this.candidateService.getMatchCandidates(Number(selectedLanguage), selectedJunior)
      // if (this.candidateService.matchCandidates = [])
      //   alert("There are no suitable candidates")
    }
  }
}
