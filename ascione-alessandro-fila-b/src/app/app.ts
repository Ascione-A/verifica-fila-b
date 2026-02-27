import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { due } from './due/due'; 
import { tre } from './tre/tre';
import { quattro } from './quattro/quattro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, due, tre, quattro],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  tuo_nome: string = 'app';
} 