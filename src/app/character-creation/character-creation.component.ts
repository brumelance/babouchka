import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {

  raceSelected: string = "Alfar";
  provenanceSelected: string;
  religionSelected: string;
  classeSelected: string;
  raceName: string = 'Race';
  provenanceName: string = 'Provenance';
  religionName: string = 'Religion';
  classeName: string = 'Classe';
  raceChoices: string[] = ["Alfar", "Dokalfar", "Douaris", "Humain", "Orc"];
  provenanceChoices: string[] = ["Al Sharaz", "Cités de Cyriande", "Collines de Varn", "Drasilhelm", "Marche Exilée", "Montagnes d'argent", "Piliers de Langegard", "Royaume de Stahl", "Vigmark"];
  religionChoices: string[] = ["Église Bradorienne", "Cycle des Quatre", "Voies de Forsvar", "Dogmatisme de Vineren", "Stoïcisme de Werden"];
  classeChoices: string[] = ["Militaire", "Brigand", "Mystique", "Croyant", "Médecin", "Artisan"];

  constructor() {}

  ngOnInit() {
  }

}
