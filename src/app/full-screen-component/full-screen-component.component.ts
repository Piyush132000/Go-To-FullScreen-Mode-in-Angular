import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-full-screen-component',
  standalone: true,
  imports: [],
  templateUrl: './full-screen-component.component.html',
  styleUrl: './full-screen-component.component.scss'
})
export class FullScreenComponentComponent {

  icon:string ='../../assets/images/expand.svg';

  @Input() fullscreenElement!:ElementRef<HTMLDivElement>;

  // Function to trigger fullscreen
  goFullScreen() {
    const elem = this.fullscreenElement.nativeElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
       //@ts-ignore
    } else if (elem.mozRequestFullScreen) { // Firefox
       //@ts-ignore
      elem.mozRequestFullScreen();
       //@ts-ignore
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
       //@ts-ignore
      elem.webkitRequestFullscreen();
       //@ts-ignore
    } else if (elem.msRequestFullscreen) { // IE/Edge
       //@ts-ignore
      elem.msRequestFullscreen();
    }
    this.icon = '../../assets/images/close-fullscreen.svg'
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      this.goFullScreen();
    } else {
      this.exitFullScreen();
    }
  }

  exitFullScreen() {
    //ts-ignore
    if (document.exitFullscreen) {
      document.exitFullscreen();
      //@ts-ignore
    } else if (document?.mozCancelFullScreen) { // Firefox
       //@ts-ignore
      document.mozCancelFullScreen();
       //@ts-ignore
    } else if (document?.webkitExitFullscreen) { // Chrome, Safari and Opera
       //@ts-ignore
      document.webkitExitFullscreen();
       //@ts-ignore
    } else if (document?.msExitFullscreen) { // IE/Edge
       //@ts-ignore
      document?.msExitFullscreen();
    }
    this.icon = '../../assets/images/expand.svg';
  }
  

}
