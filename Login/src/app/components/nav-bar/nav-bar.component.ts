import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
     isUser = false;

     constructor(private router: Router) {
        const user = localStorage.getItem('user');
        this.isUser = user? true : false;
     }

     logout() {
        localStorage.removeItem('user');
        this.isUser = false;
        this.router.navigate(['/auth/login']);
     }
}
