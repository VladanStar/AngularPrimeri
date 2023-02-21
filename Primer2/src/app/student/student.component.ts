import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  public static readonly listaImena: Array<string> = [
    'Aleksandar',
    'Dragan',
    'Bogdan',
    'Slobodan',
    'Milan',
  ];
  public static readonly brojImena: number =
    StudentComponent.listaImena.length;

  public ocene: Array<number> = [];
  public ime: string = '';
  public ocenaStr: string = '';
public prikaziProsek:boolean;

  constructor() {
    this.ime =
      StudentComponent.listaImena[
        Math.floor(Math.random() * StudentComponent.brojImena)
      ];
this.prikaziProsek=false
  }

  public prosek(): number {
    if (this.ocene.length === 0) {
      return 0.0;
    }

    return this.ocene.reduce((prev, next) => prev + next) / this.ocene.length;
  }

  public onDodajOcenu(): void {
    if (Number.isNaN(Number.parseInt(this.ocenaStr))) {
      this.ocenaStr = "";

      return;
    }

    const ocenaNum: number = Number.parseInt(this.ocenaStr);

    if (ocenaNum < 5 || ocenaNum > 10) {
      this.ocenaStr = "";

      return;
    }

    this.ocene.push(ocenaNum);

    this.ocenaStr = "";
  }
  onPromeniPrikazivanjeProseka():void{
    this.prikaziProsek = !this.prikaziProsek;
  }
}
