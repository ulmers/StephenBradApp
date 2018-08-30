import {HealthPlan} from './health-plan';

export class FormEntry {

  userId: string;

  // Name of form
  form: string;

  // YYYYMMdd
  birthDate: string;

  sex: string;

  healthPlans: Array<HealthPlan>;

  hasChronicDisease: boolean;

}
