import { Component, HostListener } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'grid',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  startResizeX: number;
  isResizing: boolean;
  resizeBoxId: number;

  @HostListener('mousedown', ['$event'])
  mouseDown(event: any) {
    if (event.target.classList.contains('resize')) {
      this.isResizing = true;
      this.startResizeX = event.clientX;
      this.resizeBoxId = +event.srcElement.id;
    };
  }

  @HostListener('document:mousemove', ['$event'])
  mouseMove(event: any) {
    if (this.isResizing) {
      const deltaX = event.clientX - this.startResizeX;
      const box: any = document.getElementsByClassName('box')[this.resizeBoxId];
      box.style['min-width'] = `${box.clientWidth + deltaX / 20}px`;
      box.style['max-width'] = `${box.clientWidth + deltaX / 20}px`;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  mouseUp() {
    if (this.isResizing === true) this.isResizing = false;
  }
}
