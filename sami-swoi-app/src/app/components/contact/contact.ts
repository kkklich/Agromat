import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environment/environment';

@Component({
    selector: 'app-contact',
    imports: [FormsModule],
    templateUrl: './contact.html',
    styleUrl: './contact.scss'
})
export class Contact {
    formData = {
        name: '',
        email: '',
        message: ''
    };

    async onSubmit() {
        try {
            const response = await fetch(environment.formspreeUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.formData)
            });

            if (response.ok) {
                alert('Dziękujemy! Twoja wiadomość została wysłana.');
                this.formData = { name: '', email: '', message: '' }; // Wyczyść formularz
            } else {
                alert('Wystąpił problem podczas wysyłania wiadomości. Spróbuj ponownie później.');
            }
        } catch (error) {
            console.error('Błąd wysyłania formularza:', error);
            alert('Wystąpił błąd podczas wysyłania wiadomości.');
        }
    }
}
