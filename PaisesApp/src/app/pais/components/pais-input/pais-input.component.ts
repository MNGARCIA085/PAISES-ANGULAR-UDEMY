import { Component, EventEmitter, Output } from '@angular/core';
 
@Component({
 selector: 'app-pais-input',
 templateUrl: './pais-input.component.html',
 styles: [
 ]
})
export class PaisInputComponent {
 
  // para poder emitir termino
  @Output() onEnter: EventEmitter<string> = new EventEmitter(); // se emite termino que es
                                                              // de tipo string
  
  
  termino: string = '';
  
  buscar(){
    // emito
    this.onEnter.emit(this.termino);
  }
  
 }
 
