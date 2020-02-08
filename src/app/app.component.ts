import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public _appTitle: string = 'Cocktail Advisor';

  public _contactLink: string = 'devilseye-bar.com';

  ngOnInit(): void {
  }
}
