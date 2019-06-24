import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'map', loadChildren: './map/map.module#mapPageModule' },
  { path: 'form-inicial', loadChildren: './form-inicial/form-inicial.module#FormInicialPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'list-orders/:myid', loadChildren: './list-orders/list-orders.module#ListOrdersPageModule' },
  { path: 'success', loadChildren: './success/success.module#SuccessPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
