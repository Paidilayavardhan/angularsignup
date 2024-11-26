import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  onSignUp(form: any) {
    if (form.valid) {
      console.log('Sign Up form data:', form.value);
      // Here you can send data to a server or perform other actions
    }
  }

  // Method for handling Login form submission
  onLogin(form: any) {
    if (form.valid) {
      console.log('Login form data:', form.value);
      // Authentication logic can be added here
    }

}
}
