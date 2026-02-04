import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CaSharedModule } from './modules/ca-shared/ca-shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CaSharedModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Cocktail Advisor';
  contactLink = 'http://devilseye-bar.com';
}
