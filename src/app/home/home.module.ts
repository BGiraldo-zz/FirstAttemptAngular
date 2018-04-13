import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GeneralModule } from './../general/general.module';
import { NgModule } from '@angular/core';
import { NewsModule } from '../news/news.module';

@NgModule({
    imports: [
        GeneralModule,
        NewsModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [],
    exports:[HomeComponent]

})
export class HomeModule { }
