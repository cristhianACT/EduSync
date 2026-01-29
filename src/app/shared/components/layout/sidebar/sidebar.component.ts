import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  @Input() isOpen = true;
  @Input() userName = 'User Name';

  menuItems = [
    { icon: 'home', label: 'Inicio', active: true, route: '/home' },
    { icon: 'tools', label: 'Herramientas', active: false, route: '/herramientas' },
    { icon: 'chat', label: 'Kali Chat', active: false, route: '/chat' },
    { icon: 'folder', label: 'Documentos', active: false, route: '/documentos' },
    { icon: 'users', label: 'Kali Salas', active: false, route: '/salas' }
  ];

  moreMenuItems = [
    { icon: 'bookmark', label: 'Referidos', route: '/referidos' },
    { icon: 'book', label: 'Formato escolar', route: '/formato' },
    { icon: 'help', label: 'Centro de ayuda', route: '/ayuda' },
    { icon: 'users-group', label: 'Comunidad', route: '/comunidad' }
  ];

  getUserInitials(): string {
      return this.userName.split(' ').map(n => n[0]).join('');
  }
}
