import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.component.html'
})
export class CategoryFilterComponent {
  @Input() categories: {id: string, label: string, color: string}[] = [];
  @Input() selectedCategory: string = 'Todos';
  @Output() select = new EventEmitter<string>();
}
