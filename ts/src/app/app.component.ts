import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  showMore = false;

  show() {
    this.showMore = true;

    const resumeElement = document.getElementById("resume");
    resumeElement?.classList.remove("collapse-data")
  }

  hidden() {
    this.showMore = false;

    const resumeElement = document.getElementById("resume");
    resumeElement?.classList.add("collapse-data")
  }
}
