import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'characters', pathMatch: 'full', component: CharacterListComponent },
  { path: 'characters/:id', pathMatch: 'full', component: CharacterDetailComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'characters' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
