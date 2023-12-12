import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input({required: true}) userImg: string = '';
  username = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  auth = inject(AuthService);
  navList = ["Home", "TV Shows", "News & Popular", "My List", "Browse by Language"]
}
