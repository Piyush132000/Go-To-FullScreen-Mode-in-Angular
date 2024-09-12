import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullScreenComponentComponent } from './full-screen-component/full-screen-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FullScreenComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Go-To-FullScreen-Mode-in-Angular';
  @ViewChild('containerRef') containerReference!: ElementRef<HTMLDivElement>;
}
