import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SocialMediaRoutingModule } from "./social-media/social-media-routing.module";
const routes: Routes = [
    { path: 'social-media', loadChildren: () => import('./social-media/social-media.module').then(m => m.SocialMediaModule) },
    { path: 'complex-form', loadChildren: () => import('./complex-form/complex-form.module').then(m => m.ComplexFormModule) },
    { path: '**', redirectTo: 'social-media'}
];
@NgModule({


    declarations:[],
    imports:[RouterModule.forRoot(routes),SocialMediaRoutingModule],
    exports:[RouterModule]
    
})
export class AppRoutingModule {}