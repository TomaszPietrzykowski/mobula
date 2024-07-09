/* eslint-disable no-debugger */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@mobula/auth/data-access';

@Component({
    selector: 'register',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent {
    fb = inject(FormBuilder);

    usernameError: string | null = null;
    emailError: string | null = null;
    passwordError: string | null = null;
    passwordConfirmError: string | null = null;

    registerForm = this.fb.nonNullable.group({
        username: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        password: ['', [Validators.required]],
        passwordConfirm: ['', [Validators.required]],
    });

    constructor(private authService: AuthService) { }

    submitRegister(e: Event) {
        e.preventDefault();
        const formData = this.registerForm.getRawValue();
        console.log('Form data: ', formData);
        this.authService.register({
            username: formData.username,
            email: formData.email,
            password: formData.password,
        });
    }
}
