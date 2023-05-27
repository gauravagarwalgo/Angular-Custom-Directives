import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private element:ElementRef,private renderer:Renderer2)  {

   }

   @Input() defaultColor:string='transparent';
   @Input() highlightColor:string='pink';
   
   @HostBinding('style.backgroundColor') background:string=this.defaultColor;
   @HostBinding('style.border') border:string='none';

   //To make the color as yellow when the page first loads, otherwise it was coming as transparent
   ngOnInit(){
      this.background=this.defaultColor;
   }

   @HostListener('mouseenter') mouseenter()
   {
      this.background=this.highlightColor;
      this.border='red 2px solid'
   }
   @HostListener('mouseleave') mouseleave(){
      this.background=this.defaultColor;
      this.border='none'
   }
}
