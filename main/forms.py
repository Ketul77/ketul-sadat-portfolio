from django import forms
from .models import ContactMessage

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'phone', 'message']
        widgets = {
            'name': forms.TextInput(attrs={
                'placeholder': '👤 Full Name',
                'class': 'form-input'
            }),
            'email': forms.EmailInput(attrs={
                'placeholder': '📧 Email Address',
                'class': 'form-input'
            }),
            'phone': forms.TextInput(attrs={
                'placeholder': '📱 Phone Number',
                'class': 'form-input'
            }),
            'message': forms.Textarea(attrs={
                'placeholder': '💬 Your Message',
                'class': 'form-input',
                'rows': 5
            }),
        }