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


  menuItems = [
    { icon: 'home', label: 'Inicio', route: '/home' },
    { icon: 'tools', label: 'Herramientas', route: '/herramientas' },
    { icon: 'chat', label: 'Kali Chat', route: '/chat' },
    { icon: 'folder', label: 'Documentos', route: '/documentos' },
    { icon: 'users', label: 'Kali Salas', route: '/salas' }
  ];

  moreMenuItems = [
    { icon: 'bookmark', label: 'Referidos', route: '/referidos' },
    { icon: 'book', label: 'Formato escolar', route: '/formato' },
    { icon: 'help', label: 'Centro de ayuda', route: '/ayuda' },
    { icon: 'users-group', label: 'Comunidad', route: '/comunidad' }
  ];


}
