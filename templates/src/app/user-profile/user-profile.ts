import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { Component, computed, input, TemplateRef, viewChild } from '@angular/core';

@Component({
  selector: 'admin-profile',
  template: `<p>This is Admin Profile</p>`,
})
export class AdminProfile {}

@Component({
  selector: 'default-profile',
  template: `<p>This is Default Profile</p>`,
})
export class DefaultProfile {}

@Component({
  selector: 'user-profile',
  imports: [NgComponentOutlet, NgTemplateOutlet],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  isAdmin = input(false);
  username = input('Thaw Zin Aung');

  adminTemplate = viewChild('admin', { read: TemplateRef });
  basicTemplate = viewChild('basic', { read: TemplateRef });

  profileComponent = computed(() => (this.isAdmin() ? AdminProfile : DefaultProfile));
  profileTemplate = computed(() => (this.isAdmin() ? this.adminTemplate() : this.basicTemplate()));
}
