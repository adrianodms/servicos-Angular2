import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

  private cursos:string[] = ["Angular 2", "C#", "Ionic"];
  constructor() {
    console.log('instancia cursos service');
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso:string){
    this.cursos.push(curso);
  }
}
