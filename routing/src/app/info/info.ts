import { Component, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-info',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);

  navigateToAdmin() {
    this.router.navigate(['admin'], {
      relativeTo: this.route,
      queryParams: {
        flag: true,
      },
    });
  }
}
