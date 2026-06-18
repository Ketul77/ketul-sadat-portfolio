from django.shortcuts import render, redirect
from .forms import ContactForm

def home(request):
    form = ContactForm()

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/?success=true')

    success = request.GET.get('success')
    return render(request, 'main/home.html', {
        'form': form,
        'success': success
    })

def about(request):
    return render(request, 'main/about.html')