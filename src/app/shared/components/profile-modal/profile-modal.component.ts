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

    activeTab: string = 'Perfil';
    currentStep = 1;
    totalSteps = 6;
    showAdditionalInfo = false;
    isPersonalizationComplete = false;

    memoriaItems = [
        "El docente enseña Matemáticas a estudiantes de tercer grado de primaria.",
        "El docente no tiene claro el contexto de sus alumnos.",
        "El principal dolor del docente es desconocido.",
        "El docente muestra interés pedagógico con una actitud relajada.",
        "El objetivo principal del docente es crear un ambiente divertido.",
        "Para mejorar su enseñanza, el docente debe identificar su dolor y establecer metas concretas para crear un ambiente divertido."
    ];

    get personalizationProgress(): number {
        return Math.round(((this.currentStep - 1) / this.totalSteps) * 100);
    }

    closeModal() {
        this.close.emit();
    }

    setActiveTab(label: string) {
        this.activeTab = label;
        if (label === 'Personalización') {
            this.currentStep = 1;
        }
    }

    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
        }
    }

    finishPersonalization() {
        this.isPersonalizationComplete = true;
    }
}
