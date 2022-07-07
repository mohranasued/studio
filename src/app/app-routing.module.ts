import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./agendamento/agendamento.module').then( m => m.AgendamentoPageModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('./servicos/servicos.module').then( m => m.ServicosPageModule)
  },
  {
    path: 'enviar-angendamento',
    loadChildren: () => import('./enviar-angendamento/enviar-angendamento.module').then( m => m.EnviarAngendamentoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
