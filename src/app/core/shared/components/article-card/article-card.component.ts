import { Component, Input } from '@angular/core';

interface ArticleData {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  photoUrl?: string;
}

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {
  @Input() data: ArticleData = {
    title: '',
    excerpt: '',
    category: '',
    date: '',
    photoUrl: undefined
  };
}
