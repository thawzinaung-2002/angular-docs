import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Event, NavigationEnd, NavigationStart, Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  private readonly router = inject(Router);

  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.analytics.trackPageView(event.url);
      }

      // if (event instanceof Scroll) {
      //   console.log('Scrolling ' + event.position);
      // }
    });
  }

  private analytics = {
    trackPageView: (url: string) => {
      console.log('Page view : ' + url);
    },
  };
}
