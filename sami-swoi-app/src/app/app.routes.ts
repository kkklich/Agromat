import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Parcels } from './components/parcels/parcels';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'parcels', component: Parcels },
    { path: 'contact', component: Contact }
];
