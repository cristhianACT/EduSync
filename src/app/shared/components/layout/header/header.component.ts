import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() sidebarOpen = true;
  @Input() userName = '';
  @Output() toggleSidebar = new EventEmitter<void>();

  getUserInitials(): string {
    return this.userName.split(' ').map(n => n[0]).join('');
  }
}
