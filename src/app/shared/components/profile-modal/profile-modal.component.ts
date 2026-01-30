import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-profile-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './profile-modal.component.html'
})
export class ProfileModalComponent {
    @Output() close = new EventEmitter<void>();

    menuItems = [
        { label: 'Perfil', icon: 'user', active: true },
        { label: 'Personalización', icon: 'adjustments' },
        { label: 'Profesión', icon: 'briefcase' },
        { label: 'Suscripción', icon: 'credit-card' },
        { label: 'Cuenta', icon: 'cog' }
    ];

    activeTab = 'Perfil';

    closeModal() {
        this.close.emit();
    }

    setActiveTab(label: string) {
        this.activeTab = label;
    }
}
