import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partners-logo',
  templateUrl: './partners-logo.component.html',
  styleUrls: ['./partners-logo.component.scss']
})
export class PartnersLogoComponent {
  @Input() logos: string[] = [];
}
