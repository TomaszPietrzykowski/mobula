import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.email]],
    });
}
