import { Component, OnInit } from '@angular/core';
import { Scenario } from './scenario';
import {ScenariosService} from "../scenarios.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  model: string = 'foo'; // In reality this is provided as an input
  scenarios: Scenario[];
  selectedScenario: Scenario;

  constructor(private scenarioService: ScenariosService) { }

  ngOnInit() {
    this.initModelData(this.model);
  }

  initModelData(model: string) {
    if (typeof model !== 'undefined') {
      this.model = model;
      this.scenarioService.getScenarios(model)
        .then(scenarios => this.scenarios = scenarios);
    }
  }

  addRow(): void {
    // Scenarios values are set to use user-defined global values
    const newScenario = this.scenarioService.newScenario(this.model);

    this.selectedScenario = newScenario;
    console.log(this.scenarios);
  }

}
