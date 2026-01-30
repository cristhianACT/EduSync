import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModalComponent } from '../../profile-modal/profile-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ProfileModalComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() sidebarOpen = true;
  @Input() userName = '';
  @Output() toggleSidebar = new EventEmitter<void>();

  isProfileModalOpen = false;

  getUserInitials(): string {
    return this.userName.split(' ').map(n => n[0]).join('');
  }

  toggleProfileModal() {
    this.isProfileModalOpen = !this.isProfileModalOpen;
  }
}
