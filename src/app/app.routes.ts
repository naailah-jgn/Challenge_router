// Instructions dans le README.md //
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyFormComponent } from './my-form/my-form.component';

const ROUTES: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'signup', component: SignUpComponent
    },
    {
        path: 'user', component: UserProfileComponent
    },
    { 
        path: '', redirectTo: '/user', pathMatch: 'full'
    },
    {
        path: 'form', component: MyFormComponent
    },
]

export { ROUTES };