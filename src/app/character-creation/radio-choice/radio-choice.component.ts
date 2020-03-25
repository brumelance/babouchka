import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-radio-choice',
  templateUrl: './grid-choice.component.html',
  styleUrls: ['./radio-choice.component.css']
})
export class RadioChoiceComponent implements OnInit {

  @Input() choices: string[];
  @Input() name: string;
  @Input() selected: string;
  @Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectChoice(choice: string) {
    this.selectedChange.emit(choice);
  }

  resetSelectedChoice() {
    this.selectChoice(null);
  }
}
