
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app/core/services/route-state.service';
import { SessionService } from 'src/app/core/services/session.service';
import { User } from 'src/app/core/models/user.model';
import { notification } from 'src/app/core/models/notification.model';
import { UserIdleService } from 'angular-user-idle';
import { ThemeService } from 'src/app/core/services/theme.service';
import { UserContextService } from 'src/app/core/services/user-context.service';
import { MenuDataService } from 'src/app/core/services/menu-data.service';
import { UserDataService } from 'src/app/features/seguranca/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  displayNotifications: boolean;

  notifications: notification[];

  orgaos!: any;
  orgao1: number;

  numeroProtocolo!: string;


  constructor(
    private router: Router,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private userIdle: UserIdleService,
    private toastService: ToastService,
    private themeService: ThemeService,
    private errorHandler: ErrorHandlerService,
    private userContextService: UserContextService,
    private menuDataService: MenuDataService,
    private userDataService: UserDataService) {

    this.displayNotifications = false;

    var selectedTheme = this.sessionService.getItem("selected-theme");
    if (selectedTheme) {
      this.selectTheme(selectedTheme);
    }
  }

  ngOnInit() {
    this.user = this.sessionService.getItem("currentUser");
    this.notifications = [];



    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe();

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      this.logout();
    });
  }

  logout() {

    this.userDataService.logout()
    .then(() => {
      this.userIdle.stopWatching();
      this.routeStateService.removeAll();
      this.userContextService.logout();
      this.sessionService.removeItem('active-menu');
      this.router.navigate(['/login']);
    })
    .catch(erro => {
      this.toastService.addSingle('error', '', erro);
      return;
    });
  }

  showNotificationSidebar() {
    this.displayNotifications = true;
  }

  toggleMenu() {
    this.menuDataService.toggleMenuBar.next(true);
  }

  selectTheme(theme: string) {
    this.sessionService.setItem("selected-theme", theme);
    this.themeService.selectTheme(theme);
  }


}
