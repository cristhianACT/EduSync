import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { SidebarComponent } from '../../shared/components/layout/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { ToolCardComponent } from '../../shared/components/cards/tool-card/tool-card.component';
import { CategoryFilterComponent } from '../../shared/components/ui/category-filter/category-filter.component';
import { RouterModule } from '@angular/router';
import { Tool } from '../../core/models/tool.model';
import { ToolService } from '../../core/services/tool.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        SidebarComponent,
        HeaderComponent,
        ToolCardComponent,
        CategoryFilterComponent
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
            iconColor: 'text-blue-600',
            link: '/planificacion/sesion-aprendizaje'
        },
        {
            title: 'Revisa tus documentos',
            icon: 'folder',
            color: 'bg-purple-50',
            iconColor: 'text-purple-600',
            link: null
        },
        {
            title: 'Conversa con Kali',
            icon: 'chat',
            color: 'bg-pink-50',
            iconColor: 'text-pink-600',
            link: null
        }
    ];

    tools: Tool[] = [];

    constructor(private toolService: ToolService, private router: Router) { }

    ngOnInit() {
        this.tools = this.toolService.getAllTools();
    }

    handleAction(action: any) {
        if (action.link) {
            this.router.navigate([action.link]);
        }
    }

    toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
    }

    selectCategory(category: string) {
        this.selectedCategory = category;
    }

    get filteredTools() {
        return this.toolService.getToolsByCategory(this.selectedCategory);
    }

    get favoriteTools() {
        return this.toolService.getFavoriteTools();
    }

    toggleFavorite(tool: Tool) {
        this.toolService.toggleFavorite(tool.id);
    }
}
