import { Component, Input } from '@angular/core';

interface ArticleData {
  imageSrc: string;
  title: string;
  category: string;
  date: string;
}

@Component({
  selector: 'app-article-block',
  templateUrl: './article-block.component.html',
  styleUrls: ['./article-block.component.scss']
})
export class ArticleBlockComponent {
  @Input() articleData: ArticleData = { imageSrc: '', title: '', category: '', date: '' };
}
