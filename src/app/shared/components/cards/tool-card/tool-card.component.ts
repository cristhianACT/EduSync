import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tool } from '../../../../core/models/tool.model';

@Component({
  selector: 'app-tool-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tool-card.component.html'
})
export class ToolCardComponent {
  @Input({ required: true }) tool!: Tool;
  @Output() toggleFavorite = new EventEmitter<Tool>();
}
