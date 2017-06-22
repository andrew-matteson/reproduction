import { Injectable } from '@angular/core';
import {Scenario} from "./main/scenario";

@Injectable()
export class ScenariosService {

  scenarioArray: { [modelID: string]: Array<Scenario>} = {};

  constructor() {
    this.init();
  }

  init() {
    const modelIDs = ['foo'];

    for (let iter = 0; iter < modelIDs.length; iter++) {
      this.scenarioArray[modelIDs[iter]] = [];
    }
  }

  getScenarios(modelID: string): Promise<Scenario[]> {
    return Promise.resolve(this.scenarioArray[modelID]);
  }

  newScenario(modelID: string): Scenario {
    const newScenario = new Scenario('baz', String(Math.random()));
    this.scenarioArray[modelID].push(newScenario);

    return newScenario;
  }
}

