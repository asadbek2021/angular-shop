import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title!: ElementRef<HTMLHeadElement>;

  ngAfterViewInit(): void {
    this.title.nativeElement.innerText = 'Best Gaming Products'
  }
}
