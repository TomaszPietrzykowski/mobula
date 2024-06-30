import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@mobula/auth/data-access';

@Component({
    selector: 'login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    fb = inject(FormBuilder);

    emailError: string | null = null;
    passwordError: string | null = null;

    loginForm = this.fb.nonNullable.group({
        email: ['', Validators.required, Validators.email],
        password: ['', [Validators.required]],
    });

    constructor(private authService: AuthService) {}

    submitLogin(e: Event) {
        e.preventDefault();
        const formData = this.loginForm.getRawValue();
        console.log('Form data: ', formData);
        this.authService.login({
            email: formData.email,
            password: formData.password,
        });
    }
}
