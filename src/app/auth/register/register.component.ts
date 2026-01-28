import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">

        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900">Crear Cuenta</h2>
          <p class="text-gray-500 mt-2">Únete a EduSync para gestionar tu escuela.</p>
        </div>

        <form (submit)="onSubmit($event)" class="space-y-5">

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
            <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Juan Pérez" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
            <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="juan@ejemplo.com" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input type="password" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="••••••••" />
          </div>

          <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-colors">
            Registrarse
          </button>
        </form>

        <div class="my-6 flex items-center">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="flex-shrink-0 mx-4 text-gray-400 text-sm">O regístrate con</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>

        <button type="button" class="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2.5 rounded-lg transition-colors">
           <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google
        </button>

        <div class="mt-8 text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?
          <a routerLink="/login" class="font-medium text-indigo-600 hover:text-indigo-500">Inicia Sesión</a>
        </div>
      </div>
    </div>
  `
})
export class RegisterComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Register attempt');
  }
}
