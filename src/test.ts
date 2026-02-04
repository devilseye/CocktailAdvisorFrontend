// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);
// Then we find all the tests.
import './app/app.component.spec';
import './app/modules/ca-barware/ca-barware-details/ca-barware-details.component.spec';
import './app/modules/ca-cocktail/ca-cocktail-details/ca-cocktail-details.component.spec';
import './app/modules/ca-cocktail/ca-cocktails-panel/ca-cocktails-panel.component.spec';
import './app/modules/ca-glassware/ca-glassware-details/ca-glassware-details.component.spec';
import './app/modules/ca-shared/ca-post-panel/ca-post-panel.component.spec';
