from django.http import HttpResponse
from django.shortcuts import render, redirect 
from datetime import datetime



def index(request):
    return render(request, "Страница-1.html")
def choice(request):
    if request.method == "POST":
        # получаем из данных запроса POST отправленные через форму данные
        name = request.POST.get("cars", "Undefined")
        with open('D:/stValentines/Site1/valentine/app/log.txt', 'a') as f:
            text = name + " " + datetime.now().strftime("%d/%m/%Y %H:%M:%S") + " "
            f.write(text)
        return redirect("/cats")        
    else:
        return render(request, "Страница-2.html")
def cats(request):
    return render(request, "Страница-3.html")