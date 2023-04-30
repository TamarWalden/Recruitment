import { Component, OnInit, Input} from '@angular/core';
import { Candidate } from 'src/app/classes/candidate';
import { Language } from 'src/app/classes/language';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor() { }
  @Input("currentLanguage") language:Language = new Language(1,"c#")


  ngOnInit(): void {
  }

}
