import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from '../../shared/components/layout/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { ToolCardComponent } from '../../shared/components/cards/tool-card/tool-card.component';
import { CategoryFilterComponent } from '../../shared/components/ui/category-filter/category-filter.component';
import { Tool } from '../../core/models/tool.model';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,

        SidebarComponent,
        HeaderComponent,
        ToolCardComponent,
        CategoryFilterComponent
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    userName = 'Pen Gristeio';
    sidebarOpen = true;
    selectedCategory = 'Todos';

    categories = [
        { id: 'Todos', label: 'Todos', color: 'gray' },
        { id: 'Planificación', label: 'Planificación', color: 'purple' },
        { id: 'Organización', label: 'Organización', color: 'orange' },
        { id: 'Evaluación', label: 'Evaluación', color: 'green' },
        { id: 'Apoyo Visual', label: 'Apoyo Visual', color: 'blue' },
        { id: 'Juegos', label: 'Juegos', color: 'pink' }
    ];

    quickActions = [
        {
            title: 'Crea tu sesión',
            icon: 'document',
            color: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            title: 'Revisa tus documentos',
            icon: 'folder',
            color: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            title: 'Conversa con Kali',
            icon: 'chat',
            color: 'bg-pink-50',
            iconColor: 'text-pink-600'
        }
    ];

    tools: Tool[] = [
        {
            id: 1,
            name: 'Proyecto STEAM-H',
            description: 'Crea tu proyecto innovador con EduSync',
            category: 'Planificación',
            icon: 'document',
            color: 'blue',
            isFavorite: false
        },
        {
            id: 2,
            name: 'Plan Curricular Anual',
            description: 'Crea tu PCA con EduSync',
            category: 'Planificación',
            icon: 'calendar',
            color: 'blue',
            isFavorite: false
        },
        {
            id: 3,
            name: 'Generador de poema',
            description: 'Crea un poema con IA',
            category: 'Juegos',
            icon: 'sparkles',
            color: 'pink',
            isFavorite: false
        },
        {
            id: 4,
            name: 'Evaluación de Desempeño',
            description: 'Evalúa el rendimiento estudiantil',
            category: 'Evaluación',
            icon: 'chart',
            color: 'green',
            isFavorite: false
        },
        {
            id: 5,
            name: 'Organizador Semanal',
            description: 'Planifica tu semana académica',
            category: 'Organización',
            icon: 'calendar',
            color: 'orange',
            isFavorite: false
        },
        {
            id: 6,
            name: 'Recursos Visuales',
            description: 'Crea material visual educativo',
            category: 'Apoyo Visual',
            icon: 'image',
            color: 'blue',
            isFavorite: false
        }
    ];

    toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
    }

    selectCategory(category: string) {
        this.selectedCategory = category;
    }

    get filteredTools() {
        if (this.selectedCategory === 'Todos') {
            return this.tools;
        }
        return this.tools.filter(tool => tool.category === this.selectedCategory);
    }

    get favoriteTools() {
        return this.tools.filter(tool => tool.isFavorite);
    }

    toggleFavorite(tool: Tool) {
        tool.isFavorite = !tool.isFavorite;
    }
}
