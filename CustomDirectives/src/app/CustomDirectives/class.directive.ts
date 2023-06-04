import { Directive,ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element:ElementRef,private renderer:Renderer2){

   }

   @Input() set display(value:object){ // we will recieve the object given in html here {class1:condition1,class2:condition2 etc}
      let entries=Object.entries(value); // It will create entries array
      console.log(entries);

      //lets loop over array
      // for(let entry of entries){
      //   if(entry[1]){
      //     this.renderer.addClass(this.element.nativeElement,entry[0])
      //   }
      // }

      //Better way of writing above code
      for(let [className,condition] of entries){
        if(condition){
          this.renderer.addClass(this.element.nativeElement,className)
        }
      }
   }
}
