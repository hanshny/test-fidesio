import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() items: { title: string, content: string }[] = [];
  activeIndex: number = 0;

  toggleAccordion(index: number) {
    this.activeIndex = (this.activeIndex === index) ? -1 : index;
  }
}
