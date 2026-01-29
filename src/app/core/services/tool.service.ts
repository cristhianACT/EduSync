import { Injectable } from '@angular/core';
import { Tool } from '../models/tool.model';

@Injectable({
    providedIn: 'root'
})
export class ToolService {
    private tools: Tool[] = [
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

    constructor() { }

    getAllTools(): Tool[] {
        return this.tools;
    }

    getToolsByCategory(category: string): Tool[] {
        if (category === 'Todos') {
            return this.tools;
        }
        return this.tools.filter(tool => tool.category === category);
    }

    getFavoriteTools(): Tool[] {
        return this.tools.filter(tool => tool.isFavorite);
    }

    toggleFavorite(toolId: number): void {
        const tool = this.tools.find(t => t.id === toolId);
        if (tool) {
            tool.isFavorite = !tool.isFavorite;
        }
    }

    getToolById(id: number): Tool | undefined {
        return this.tools.find(tool => tool.id === id);
    }
}
