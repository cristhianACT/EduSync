import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidebarComponent } from '../../../shared/components/layout/sidebar/sidebar.component';
import { HeaderComponent } from '../../../shared/components/layout/header/header.component';

@Component({
    selector: 'app-sesion-aprendizaje',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SidebarComponent,
        HeaderComponent
    ],
    templateUrl: './sesion-aprendizaje.component.html',
    styleUrls: ['./sesion-aprendizaje.component.css']
})
export class SesionAprendizajeComponent {
    sessionForm: FormGroup;
    userName = 'Pen Gristeio';
    sidebarOpen = true;

    niveles = ['Inicial', 'Primaria', 'Secundaria'];
    grados = ['1° Grado', '2° Grado', '3° Grado', '4° Grado', '5° Grado', '6° Grado'];
    areas = ['Matemática', 'Comunicación', 'Ciencia y Tecnología', 'Personal Social', 'Arte y Cultura', 'Educación Física', 'Educación Religiosa'];

    constructor(private fb: FormBuilder) {
        this.sessionForm = this.fb.group({
            tema: ['', Validators.required],
            nivel: ['', Validators.required],
            grado: ['', Validators.required],
            area: ['', Validators.required],
            incluirSituacion: [false],
            competencias: [''],
            capacidades: [''],
            desempenos: [''],
            competenciasTransversales: [''],
            capacidadesTransversales: [''],
            enfoquesTransversales: [''],
            valores: [''],
            tiempoSession: ['90 minutos'],
            largoSession: ['Normal'],
            agregarIndicaciones: [false]
        });
    }

    toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
    }

    onSubmit() {
        if (this.sessionForm.valid) {
            console.log('Form data:', this.sessionForm.value);
        }
    }
}
