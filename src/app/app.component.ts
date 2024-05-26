import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { Layout2Component } from './layout-2/layout-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, Layout2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
