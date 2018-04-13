import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const administrationRoutes: Routes = [
    {
        path: 'home',
   //     component: ProductsComponent,
        children: [

            // {
            //  path: 'new-route',
            //  component: ShoppingCartComponent
            // }

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(administrationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }