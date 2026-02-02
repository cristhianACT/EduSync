import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from '../../shared/components/layout/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { ToolCardComponent } from '../../shared/components/cards/tool-card/tool-card.component';
import { CategoryFilterComponent } from '../../shared/components/ui/category-filter/category-filter.component';
import { Tool } from '../../core/models/tool.model';
import { ToolService } from '../../core/services/tool.service';

@Component({
    selector: 'app-herramientas',
    standalone: true,
    imports: [
        CommonModule,
        SidebarComponent,
        HeaderComponent,
        ToolCardComponent,
        CategoryFilterComponent
    ],
    templateUrl: './herramientas.component.html',
    styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {
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

    tools: Tool[] = [];

    constructor(private toolService: ToolService) { }

    ngOnInit() {
        this.tools = this.toolService.getAllTools();
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
