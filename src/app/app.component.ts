import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [
    {
      title: 'Item 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Item 2',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      title: 'Item 3',
      content: 'Nulla facilisi. Duis quis enim in nulla ornare tempus vitae id dolor.'
    },
    {
      title: 'Item 4',
      content: 'Nam eu libero tincidunt, laoreet metus eu, sagittis eros.'
    }
  ];

  logos = ['../assets/logos/Group 10.svg', '../assets/logos/allianz-1 1.svg', '../assets/logos/Group.svg', '../assets/logos/Group 10.svg', '../assets/logos/allianz-1 1.svg', '../assets/logos/Group.svg'];

  articleData = {
    imageSrc: '../assets/images/emilie_pauline_bintia_linkedout 1.png', 
    title: 'lorem ipsum', 
    category: 'Categorie', 
    date: '12 janvier 2023'
  }
}
