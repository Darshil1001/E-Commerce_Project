import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  private readonly ADMIN_USERNAME = 'admin';
  private readonly ADMIN_PASSWORD = 'admin';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Attach event listener to the form
    const form = document.getElementById('admin-login-form') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', this.handleLogin.bind(this));
    }
  }

  handleLogin(event: Event): void {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Check credentials
    if (username === this.ADMIN_USERNAME && password === this.ADMIN_PASSWORD) {
      // Redirect to admin dashboard
      this.router.navigate(['/admin-dashboard']);
    } else {
      // Show error message
      const error = document.getElementById('login-error') as HTMLDivElement;
      if (error) {
        error.style.display = 'block';
      }
    }
  }
}
