import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BrowserModule } from '@angular/platform-browser';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-info',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log(`Navigation Start in Info -- ${event.url}`);
      }

      if (event instanceof NavigationEnd) {
        console.log(`Navigation End in Info -- ${event.url}`);
      }
    });
  }

  navigateToAdmin() {
    this.router.navigate(['admin'], {
      relativeTo: this.route,
      queryParams: {
        flag: true,
      },
    });
  }
}
