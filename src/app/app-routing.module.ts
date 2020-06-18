import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { CodeSkillsComponent } from './code-skills/code-skills.component';
import { SdToolsComponent } from './sd-tools/sd-tools.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'code-skills', component: CodeSkillsComponent},
  {path: 'sd-tools', component: SdToolsComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
