import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomMenuItem } from '../models/menu-item.model';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    getMenuList(): CustomMenuItem[] {
        return [
            {
               Label: 'Dashboard', Icon: 'fa-home', RouterLink: '/main/dashboard', Childs: null, IsChildVisible: false, Role: 'ROLE_DASHBOARD'
            },
            {
                Label: 'Tíckets', Icon: 'fa-envelope', RouterLink: '/main/ticket', Childs: null, IsChildVisible: false, Role: 'ROLE_TICKET'
            },
            {
                Label: 'Atendimento Tícket', Icon: 'fa-envelope', RouterLink: '/main/ticket-atendimento', Childs: null, IsChildVisible: false, Role: 'ROLE_ATENDIMENTO_TICKET'
            }
        ];
    }
}
