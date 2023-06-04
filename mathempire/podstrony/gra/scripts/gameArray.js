const qsAndAns = [
    {
        question: 'Ile wynosi 2 do potęgi 5?',
        answers: {
            a: '10',
            b: '16',
            c: '64',
            d: '32'
        },
        correctAnswer: '32',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'pierwipotegi'
    },
    {
        question: 'Oblicz wartość wyrażenie 5 do potęgi 0',
        answers:{
            a: '0',
            b: '1',
            c: '5',
            d: '10'
        },
        correctAnswer: '1',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'pierwipotegi'
    },
    {
        question: 'Która z poniższych liczb jest pierwiastkiem kwadratowym z liczby 100?',
        answers: {
            a: '8',
            b: '10',
            c: '11',
            d: '12'
        },
        correctAnswer: '10',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'pierwipotegi'
    },
    {
        question: 'Ile wynosi 3 do potęgi 2?',
        answers: {
            a: '6',
            b: '9',
            c: '12',
            d: '15'
        },
        correctAnswer: '9',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'pieripotegi'
    },
    {
        question: 'Ile wynosi wartość wyrażenia 5 do potęgi 4?',
        answers: {
            a: '20',
            b: '125',
            c: '500',
            d: '625'
        },
        correctAnswer: '625',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'pierwipotegi'
    },
    {
        question: 'Która z poniższych liczb jest pierwiastkiem kwadratowym liczby 49',
        answers: {
            a: '5',
            b: '7',
            c: '9',
            d: '10'
        },
        correctAnswer: '7',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'pierwipotegi'
    },
    {
        question: 'Która z poniższych liczb jest pierwiastkiem sześciennym z liczby 216',
        answers: {
            a: '6',
            b: '8',
            c: '9',
            d: '12'
        },
        correctAnswer: '6',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'pierwipotegi'
    },
    {
        question: 'Oblicz wartość wyrażenia (2^3)^3',
        answers: {
            a: '4',
            b: '8',
            c: '16',
            d: '64'
        },
        correctAnswer: '64',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'pierwipotegi'
    },
    {
        question: 'Oblicz wartość wyrażenia 2^3 x 2^4',
        answers: {
            a: '16',
            b: '40',
            c: '128',
            d: '256'
        },
        correctAnswer: '128',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'pierwipotegi'
    },
    {
        question: 'Oblicz wartość wyrażenia 3^3 : 3^2',
        answers: {
            a: '1',
            b: '3',
            c: '9',
            d: '27'
        },
        correctAnswer: '3',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'pierwipotegi'
    },
    {
    question: 'Oblicz wartość wyrażenia 5^5 : 5^3',
    answers: {
        a: '5',
        b: '25',
        c: '125',
        d: '625'
    },
    correctAnswer: '25',
    tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
    department: 'pierwipotegi'
    },
    {
        question: 'Która z liczb jest pierwiastkiem czwartego stopnia z liczby 16',
        answers: {
            a: '2',
            b: '4',
            c: '6',
            d: '8'
        },
        correctAnswer: '2',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'pierwipotegi'
    },
    {
        question: 'Oblicz wartość wyrażenia V64 : V16',
        answers: {
            a: '2',
            b: '4',
            c: '8',
            d: '16'
        },
        correctAnswer: '2',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'pierwipotegi'
    },
    {
        question: 'Jaką wartość ma ułamek 3/4',
        answers: {
            a: '0,5',
            b: '0,75',
            c: '1,25',
            d: '1,5'
        },
        correctAnswer: '0,75',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    },
    {
        question: 'Ile równy jest ułamek 5/8',
        answers: {
            a: '0,625',
            b: '0,75',
            c: '0,8',
            d: '0,85'
        },
        correctAnswer: '0,625',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    },
    {
        question: 'Oblicz wartość wyrażenia 2/3 + 1/6',
        answers: {
            a: '1/2',
            b: '3/4',
            c: '4/6',
            d: '5/6'
        },
        correctAnswer: '5/6',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    },
    {
        question: 'Jaką wartość ma ułamek 7/10',
        answers: {
            a: '0,07',
            b: '0,7',
            c: '0,75',
            d: '0,77'
        },
        correctAnswer: '0,7',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    },
    {
        question: 'Oblicz wartość wyrażenia 3/4 - 1/3',
        answers: {
            a: '1/12',
            b: '1/2',
            c: '5/12',
            d: '7/12'
        },
        correctAnswer: '5/12',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    },
    {
        question: 'Jaką wartość ma ułamek 2/3',
        answers: {
            a: '0,2',
            b: '0,3',
            c: '0,(6)',
            d: '0,75'
        },
        correctAnswer: '0,(6)',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    },
    {
        question: 'Oblicz wartość wyrażenia 3/8 x 2/5',
        answers: {
            a: '1/10',
            b: '3/40',
            c: '6/40',
            d: '6/25'
        },
        correctAnswer: '6/40',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    },
    {
        question: 'Jaką wartość ma ułamek 9/12 po skróceniu',
        answers: {
            a: '1/3',
            b: '3/4',
            c: '3/8',
            d: '9/12(nie da się skrócić)'
        },
        correctAnswer: '3/4',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    },
    {
        question: 'Zamień ułamek 3/10 na ułamek dziesiętny',
        answers: {
            a: '0,03',
            b: '0,3',
            c: '0,33',
            d: '3'
        },
        correctAnswer: '0,3',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    }, 
    {
        question: 'Oblicz wartość wyrażenia 2/3 : 1/4',
        answers: {
            a: '1/6',
            b: '2/3',
            c: '3/8',
            d: '8/3'
        },
        correctAnswer: '8/3',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    },
    {
        question: 'Oblicz wartość wyrażenia 3/8 + 5/8',
        answers: {
            a: '1/4',
            b: '4/8',
            c: '5/8',
            d: '1'
        },
        correctAnswer: '1',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    },
    {
        question: 'Oblicz wartość wyrażenia 1/3 - 1/6',
        answers: {
            a: '1/12',
            b: '1/6',
            c: '1/3',
            d: '2/3'
        },
        correctAnswer: '1/6',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    },
    {
        question: 'Oblicz wartość wyrażenia 2/3 x 3/4',
        answers: {
            a: '1/4',
            b: '1/2',
            c: '2/3',
            d: '1'
        },
        correctAnswer: '1/2',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    },
    {
        question: 'Oblicz wartość wyrażenia 3/8 x 5/6 : 2/5',
        answers: {
            a: '5/8',
            b: '15/16',
            c: '25/48',
            d: '25/32'
        },
        correctAnswer: '25/32',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'ulamki'
    },
    {
        question: '15% ile to w ułamku dziesiętnym',
        answers: {
            a: '1/15',
            b: '1/25',
            c: '3/10',
            d: '3/20'
        },
        correctAnswer: '3/20',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'procenty'
    },
    {
        question: 'Zamień 3/4 na procenty',
        answers: {
            a: '60%',
            b: '30%',
            c: '75%',
            d: '80%'
        },
        correctAnswer: '75%',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'procenty'
    },
    {
        question: 'Zamień 0,6 na procenty',
        answers: {
            a: '0,06%',
            b: '0,6%',
            c: '6%',
            d: '60%'
        },
        correctAnswer: '60%',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'procenty'
    },
    {
        question: 'Ile wynosi 30% z liczby 200',
        answers: {
            a: '20',
            b: '40',
            c: '60',
            d: '80'
        },
        correctAnswer: '60',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'procenty'
    },
    {
        question: 'Oblicz 25% z liczby 80',
        answers: {
            a: '20',
            b: '15',
            c: '25',
            d: '30'
        },
        correctAnswer: '20',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'procenty'
    },
    {
        question: 'Zamień 7/20 na procenty',
        answers: {
            a: '35%',
            b: '25%',
            c: '60%',
            d: '40%'
        },
        correctAnswer: '35%',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'procenty'
    },
    {
        question: 'Oblicz 120% liczby 50',
        answers: {
            a: '90',
            b: '70',
            c: '60',
            d: '50'
        },
        correctAnswer: '60',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'procenty'
    },
    {
        question: 'Jaką część całości stanowi 150%',
        answers: {
            a: '1/4',
            b: '1',
            c: '3/2',
            d: '5/4'
        },
        correctAnswer: '3/2',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'procenty'
    },
    {
        question: 'Oblicz 40% z liczby 250',
        answers: {
            a: '80',
            b: '100',
            c: '200',
            d: '150'
        },
        correctAnswer: '100',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'procenty'
    },
    {
        question: 'Jaką część stanowi 3/5 w procentach?',
        answers: {
            a: '10%',
            b: '30%',
            c: '60%',
            d: '80%'
        },
        correctAnswer: '60%',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'procenty'
    },
    {
        question: 'Oblicz 75% z liczby 120',
        answers: {
            a: '90',
            b: '80',
            c: '70',
            d: '60'
        },
        correctAnswer: '90',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'procenty'
    },
    {
        question: 'Jaką część całości stanowi 160%',
        answers: {
            a: '1/6',
            b: '1/2',
            c: '1',
            d: '8/5'
        },
        correctAnswer: '8/5',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'procenty'
    },
    {
        question: 'Oblicz 80% z liczby 1500',
        answers: {
            a: '200',
            b: '800',
            c: '1200',
            d: '1500'
        },
        correctAnswer: '1200',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'procenty'
    },
    {
        question: 'Ile wynosi suma kątów wewnętrznych w trójkącie?',
        answers: {
            a: '90 stopni',
            b: '180 stopni',
            c: '270 stopni',
            d: '360 stopni'
        },
        correctAnswer: '180 stopni',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności',
        department: 'geoplaska'
    },
    {
        question: 'Jak nazywa się prostokątna figura o wszystkich bokach tej samej długości?',
        answers: {
            a: 'Trójkąt równoboczny',
            b: 'Prostokąt',
            c: 'Równoległobok',
            d: 'Trójkąt równoramienny'
        },
        correctAnswer: 'Trójkąt równoboczny',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoplaska'
    },
    {
        question: 'Jak nazywa się linia przechodząca przez środek okręgu i łącząca dwa przeciwległe punkty na jego obwodzie?',
        answers: {
            a: 'Promień',
            b: 'Średnica',
            c: 'Wysokość',
            d: 'Oś symetrii'
        },
        correctAnswer: 'Średnica',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoplaska'
    },
    {
        question: 'Który z wymienionych czworokątów ma wszystkie boki i kąty równej długości?',
        answers: {
            a: 'Trójkąt równoramienny',
            b: 'Kwadrat',
            c: 'Prostokąt',
            d: 'Równoległobok'
        },
        correctAnswer: 'Kwadrat',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoplaska'
    },
    {
        question: 'Ile wynosi pole kwadratu o boku długości 8 cm?',
        answers: {
            a: '16 cm²',
            b: '32 cm²',
            c: '48 cm²',
            d: '64 cm²'
        },
        correctAnswer: '64 cm²',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoplaska'
    },
    {
        question: 'Który z wymienionych trójkątów ma dwa boki równej długości?',
        answers: {
            a: 'Równoboczny',
            b: 'Równoramienny',
            c: 'Prostokątny',
            d: 'Ostrokatny'
        },
        correctAnswer: 'Równoramienny',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoplaska'
    },
    {
        question: 'Ile wynosi suma kątów wewnętrznych w pięciokącie?',
        answers: {
            a: '180 stopni',
            b: '270 stopni',
            c: '360 stopni',
            d: '540 stopni'
        },
        correctAnswer: '540 stopni',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoplaska'
    },
    {
        question: 'Który z wymienionych czworokątów ma wszystkie boki równoległe?',
        answers: {
            a: 'Kwadrat',
            b: 'Prostokąt',
            c: 'Równoległobok',
            d: 'Trapez'
        },
        correctAnswer: 'Równoległobok',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoplaska'
    },
    {
        question: 'Ile wynosi obwód prostokąta o bokach długości 6 cm i 10 cm?',
        answers: {
            a: '16 cm',
            b: '26 cm',
            c: '32 cm',
            d: '60 cm'
        },
        correctAnswer: '32 cm',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoplaska'
    },
    {
        question: 'Który z wymienionych trójkątów ma wszystkie boki różnej długości?',
        answers: {
            a: 'Równoboczny',
            b: 'Równoramienny',
            c: 'Prostokątny',
            d: 'Różnoboczny'
        },
        correctAnswer: 'Różnoboczny',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoplaska'
    },
    {
        question: 'Ile wynosi pole trójkąta o podstawie długości 12 cm i wysokości równej 8 cm?',
        answers: {
        a: '24 cm²',
        b: '48 cm²',
        c: '64 cm²',
        d: '96 cm²'
        },
        correctAnswer: '48 cm²',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoplaska'
    },
    {
        question: 'Ile wynosi pole prostokąta o bokach długości 5 cm i 12 cm?',
        answers: {
            a: '17 cm²',
            b: '24 cm²',
            c: '30 cm²',
            d: '60 cm²'
        },
        correctAnswer: '60 cm²',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoplaska'
    },
    {
        question: 'Ile wynosi suma miar kątów w czworokącie?',
        answers: {
            a: '180 stopni',
            b: '270 stopni',
            c: '360 stopni',
            d: '450 stopni'
        },
        correctAnswer: '360 stopni',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoplaska'
    },
    {
        question: 'Rozwiąż równanie: 2x + 5 = 17',
        answers: {
            a: 'x = 6',
            b: 'x = 7',
            c: 'x = 8',
            d: 'x = 9'
        },
        correctAnswer: 'x = 6',
        tip: 'Spróbuj odjąć 5 od obu stron równania, a następnie podzielić przez 2.',
        department: 'rowzniewiadoma'
    },
    {
        question: 'Rozwiąż równanie: 3(x - 3) = 18',
        answers: {
        a: 'x = 6',
        b: 'x = 7',
        c: 'x = 8',
        d: 'x = 9'
        },
        correctAnswer: 'x = 9',
        tip: 'Rozwiń nawias, a następnie rozwiąż równanie.',
        department: 'rowzniewiadoma'
    },
    {
        question: 'Rozwiąż równanie: 4x - 7 = 5x + 3',
        answers: {
            a: 'x = -10',
            b: 'x = -4',
            c: 'x = 4',
            d: 'x = 10'
        },
        correctAnswer: 'x = -10',
        tip: 'Przenieś wszystkie zmienne na jedną stronę równania i uporządkuj wyrazy, aby rozwiązać równanie.',
        department: 'rowzniewiadoma'
    },
    {
        question: 'Rozwiąż równanie: 2(3x + 4) = 2x - 4',
        answers: {
            a: 'x = -5',
            b: 'x = -3',
            c: 'x = 2',
            d: 'x = 5'
        },
        correctAnswer: 'x = -3',
        tip: 'Rozwiń nawias i uporządkuj wyrazy, aby rozwiązać równanie.',
        department: 'rowzniewiadoma'
    },
    {
        question: 'Rozwiąż równanie: 3x - 4 = 2x + 1',
        answers: {
            a: 'x = -5',
            b: 'x = -1',
            c: 'x = 1',
            d: 'x = 5'
        },
        correctAnswer: 'x = 5',
        tip: 'Przenieś zmienne na jedną stronę równania i uporządkuj wyrazy, aby rozwiązać równanie.',
        department: 'rowzniewiadoma'
    },
    {
        question: 'Rozwiąż równanie: 5(2x - 3) - 2(4 - x) = 3x + 4',
        answers: {
            a: 'x = -1',
            b: 'x = 0',
            c: 'x = 2',
            d: 'x = 3'
        },
        correctAnswer: 'x = 3',
        tip: 'Rozwiń nawiasy i uporządkuj wyrazy, aby rozwiązać równanie.',
        department: 'rowzniewiadoma'
    },
    {
        question: 'Rozwiąż równanie: 2(x + 3) + 4 = 0,5(x - 1)',
        answers: {
        a: 'x = -7',
        b: 'x = -3',
        c: 'x = 3',
        d: 'x = 7'
        },
        correctAnswer: 'x = -7',
        tip: 'Rozwiń nawiasy i uporządkuj wyrazy, aby rozwiązać równanie.',
        department: 'rowzniewiadoma'
    },
    {
        question: 'Rozwiąż równanie: 3x - 2(2x + 5) = 2 - 5x',
        answers: {
        a: 'x = -3',
        b: 'x = 0',
        c: 'x = 3',
        d: 'x = 5'
        },
        correctAnswer: 'x = 3',
        tip: 'Rozwiń nawiasy i uporządkuj wyrazy, aby rozwiązać równanie.',
        department: 'rowzniewiadoma'
    },
    {
        question: 'Rozwiąż równanie: 2x - 1/2 = 3/4',
        answers: {
        a: 'x = 5/8',
        b: 'x = 1/4',
        c: 'x = 7/8',
        d: 'x = 9/4'
        },
        correctAnswer: 'x = 5/8',
        tip: 'Dodaj 1/2 do obu stron równania, a następnie rozwiąż równanie.',
        department: 'rowzniewiadoma'
    },
    {
        question: 'Rozwiąż równanie: 4(x + 2) - 3(x - 1) = 7',
        answers: {
            a: 'x = -4',
            b: 'x = -1',
            c: 'x = 2',
            d: 'x = 5'
        },
        correctAnswer: 'x = -4',
        tip: 'Rozwiń nawiasy i uporządkuj wyrazy, aby rozwiązać równanie.',
        department: 'rowzniewiadoma'
    },
    {
        question: 'Rozwiąż równanie: 2(3x - 1) + 4 = 5x + 3(2 - x)',
        answers: {
            a: 'x = -1/2',
            b: 'x = 0',
            c: 'x = 1/2',
            d: 'x = 1'
        },
        correctAnswer: 'x = 1',
        tip: 'Rozwiń nawiasy i uporządkuj wyrazy, aby rozwiązać równanie.',
        department: 'rowzniewiadoma'
    },
    {
        question: 'Rozwiąż równanie: 3(2x - 1) + 4 = 2(3x + 2) - 3x',
        answers: {
            a: 'x = -1/2',
            b: 'x = 0',
            c: 'x = 1/2',
            d: 'x = 1'
        },
        correctAnswer: 'x = 1',
        tip: 'Rozwiń nawiasy i uporządkuj wyrazy, aby rozwiązać równanie.',
        department: 'rowzniewiadoma'
    },
    {
        question: 'Rozwiąż równanie: 3(2x - 1) - 4 = 2(3 - x) - 5x',
        answers: {
            a: 'x = 1/2',
            b: 'x = 1',
            c: 'x = 3/2',
            d: 'x = 2'
        },
        correctAnswer: 'x = 1',
        tip: 'Rozwiń nawiasy i uporządkuj wyrazy, aby rozwiązać równanie.',
        department: 'rowzniewiadoma'
    },
    {
        question: 'Ile ścian ma sześcian?',
        answers: {
            a: '4',
            b: '6',
            c: '8',
            d: '12'
        },
        correctAnswer: '6',
        tip: 'Popatrz na nazwę tej bryły',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Ile krawędzi ma ostrosłup prawidłowy czworokątny?',
        answers: {
            a: '8',
            b: '10',
            c: '12',
            d: '16'
        },
        correctAnswer: '8',
        tip: 'Pomyśl ile krawędzi ma podstawa a następnie dodaj do tego ile krawędzi mają ściany tej bryły',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Ile wierzchołków ma graniastosłup prawidłowy sześciokątny?',
        answers: {
            a: '6',
            b: '8',
            c: '10',
            d: '12'
        },
        correctAnswer: '12',
        tip: 'Pomyśl ile wierzchołków ma jedna podstawa w tym przypadku sześciokąt oraz ile podstaw ma ta figura',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Jaka jest objętość ostrosłupa prawidłowego czworokątnego o podstawie o polu P i wysokości h?',
        answers: {
        a: 'V = P · h',
        b: 'V = 1/3 · P · h',
        c: 'V = 1/2 · P · h',
        d: 'V = P + h'
        },
        correctAnswer: 'V = 1/3 · P · h',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Ile ścian ma ostrosłup prawidłowy trójkątny?',
        answers: {
            a: '3',
            b: '4',
            c: '5',
            d: '6'
        },
        correctAnswer: '3',
        tip: 'Ilościan ścian jest zależna od podstawy',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Ile wierzchołków ma graniastosłup prawidłowy pięciokątny?',
        answers: {
        a: '5',
        b: '8',
        c: '10',
        d: '12'
        },
        correctAnswer: '10',
        tip: 'Pomyśl ile wierzchołków ma jedna podstawa w tym przypadku pięciokąt oraz ile podstaw ma ta figura',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Ile krawędzi ma sześcian?',
        answers: {
            a: '8',
            b: '10',
            c: '12',
            d: '16'
        },
        correctAnswer: '12',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Oblicz pole powierzchni bocznej ostrosłupa prawidłowego czworokątnego o boku podstawy a = 5cm i wysokości ściany bocznej h = 8cm',
        answers: {
            a: '80 cm²',
            b: '100 cm²',
            c: '120 cm²',
            d: '160 cm²'
        },
        correctAnswer: '80 cm²',
        tip: 'Policz pole jednej ściany a następnie pomnóż wynik tyle razy ile jest ścian',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Oblicz objętość graniastosłupa prawidłowego trójkątnego o podstawie o polu P = 36 cm² i wysokości h = 10 cm',
        answers: {
            a: '120 cm³',
            b: '180 cm³',
            c: '240 cm³',
            d: '360 cm³'
        },
        correctAnswer: '360 cm³',
        tip: 'Objętość graniastosłupa to iloczyn pola podstawy i wysokości.',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Oblicz objętość graniastosłupa prawidłowego czworokątnego o podstawie o polu P = 64 cm² i wysokości h = 9 cm',
        answers: {
            a: '192 cm³',
            b: '256 cm³',
            c: '288 cm³',
            d: '576 cm³'
        },
        correctAnswer: '576 cm³',
        tip: 'Objętość graniastosłupa to iloczyn pola podstawy i wysokości.',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Oblicz pole powierzchni bocznej ostrosłupa prawidłowego trójkątnego o boku podstawy a = 6 cm i wysokości ściany bocznej h = 10 cm',
        answers: {
            a: '90 cm²',
            b: '120 cm²',
            c: '150 cm²',
            d: '180 cm²'
        },
        correctAnswer: '90 cm²',
        tip: 'Pole powierzchni bocznej ostrosłupa to suma pól trójkątów',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Jak obliczyć objętość sześcianu o boku a?',
        answers: {
            a: 'V = a³',
            b: 'V = 2a²',
            c: 'V = 4a²',
            d: 'V = 6a²'
        },
        correctAnswer: 'V = a³',
        tip: 'Objętość sześcianu to sześcian długości boku.',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Jak obliczyć objętość prostopadłościanu o długościach krawędzi a, b i c?',
        answers: {
            a: 'V = abc',
            b: 'V = a + b + c',
            c: 'V = a² + b² + c²',
            d: 'V = a²b²c²'
        },
        correctAnswer: 'V = abc',
        tip: 'Objętość prostopadłościanu to iloczyn długości wszystkich krawędzi.',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Jak obliczyć pole powierzchni bocznej graniastosłupa o podstawie o boku a i wysokości h?',
        answers: {
            a: 'Pb = 2a + 2h',
            b: 'Pb = 4a + h',
            c: 'Pb = 4(ah)',
            d: 'Pb = ah'
        },
        correctAnswer: '4(ah)',
        tip: 'Pole powierzchni bocznej graniastosłupa to suma pola podstawy i iloczynu pola podstawy i wysokości.',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Ile ścian ma czworościan foremny?',
        answers: {
            a: '4',
            b: '6',
            c: '8',
            d: '12'
        },
        correctAnswer: '4',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'geoprzestrzenna'
    },
    {
        question: 'Co oznacza skrót "śr" w statystyce opisowej?',
        answers: {
            a: 'Skrajną wartość',
            b: 'Średnią arytmetyczną',
            c: 'Odchylenie standardowe',
            d: 'Medianę'
        },
        correctAnswer: 'Średnią arytmetyczną',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'oblzzycia'
    },
    {
        question: 'Jak nazywa się wartość, która dzieli rozkład danych na dwie równe części?',
        answers: {
            a: 'Kwantyl',
            b: 'Wariancja',
            c: 'Mediana',
            d: 'Odchylenie standardowe'
        },
        correctAnswer: 'Mediana',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'oblzzycia'
    },
    {
        question: 'Co oznacza skrót "min" w statystyce opisowej?',
        answers: {
            a: 'Skrajną wartość',            
            b: 'Średnią arytmetyczną',
            c: 'Wariancję',
            d: 'Minimum'
        },
        correctAnswer: 'Minimum',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'oblzzycia'
    },
    {
        question: 'Ze zbioru liczby od 1 do 10 włącznie wybieramy losową jedną liczbę. Ile wynosi prawdopodobieństwo wylosowania liczby pierwszej?',
        answers: {
            a: '2/5',
            b: '1/2',
            c: '3/5',
            d: '9/10'
        },
        correctAnswer: '2/5',
        tip: 'Liczby pierwsze to liczby większe od 1, która mają dokładnie dwa dzielniki naturalne: jedynką i samą siebie',
        department: 'oblzzycia'
    },
    {
        question: 'Doświadczenie polega na jednokrotnym rzucie czworościenną kostką do gry, na której ściankach są zaznaczone: 1 oczko, 2 oczka, 3 oczka i 4 oczka. Ile jest wszystkich możliwych wyników tego doświadczenia losowego?',
        answers: {
            a: '1',
            b: '2',
            c: '3',
            d: '4'
        },
        correctAnswer: '4',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'oblzzycia'
    },
    {
        question: 'W pewnym zbiorze danych występują wartości: 5,7,2,4,9. Oblicz średnią arytmetyczną tych wartości',
        answers: {
            a: '3.6',
            b: '5.4',
            c: '6.4',
            d: '7.2'
        },
        correctAnswer: '5.4',
        tip: 'Średnia arytmetyczna to iloraz sumy wszytskich elementów przez ilość elementów',
        department: 'oblzzycia'
    },
    {
        question: 'Dana jest seria pomiarów temperatury w ciągu tygodnia: 25°C, 28°C, 26°C, 30°C, 27°C, 29°C, 24°C. Ile wynosi mediana temperatur?',
        answers: {
            a: '25°C',
            b: '26°C',
            c: '27°C',
            d: '28°C'
        },
        correctAnswer: '27°C',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'oblzzycia'
    },
    {
        question: 'W pewnym konkursie uczestnicy zdobyli kolejno liczbę punktów: 10,13,8,15,9,11. Ile wynosi średnia arytmetyczna zdobytych punktów?',
        answers: {
            a: '9',
            b: '10',
            c: '11',
            d: '12'
        },
        correctAnswer: '11',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'oblzzycia'
    },
    {
        question: 'Jakie jest prawdopodobieństwo wyrzucenia reszki podczas rzutu monetą',
        answers: {
            a: '1',
            b: '3/4',
            c: '1/2',
            d: '1/4'
        },
        correctAnswer: '1/2',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'oblzzycia'
    },
    {
        question: 'Zmywarkę można kupić za gotówkę, płacąc 1579zł. Płacąc za zmywarkę w 15 ratach po 132 zł, zapłacisz',
        answers: {
            a: 'mniej o około 2,5% jej wartości',
            b: 'o więcej niż 30% jej wartości',
            c: 'o mniej niż 2% jej wartości',
            d: 'więcej o około 25% jej wartości'
        },
        correctAnswer: 'więcej o około 25% jej wartości',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'oblzzycia'
    },
    {
        question: 'Napełnianie wodą prostopadłościennego akwarium o wymiarach 40cm, 60cm, 30cm trwało 3 minuty. Ile będzie trwało napełnienie w takim samym tempie akwarium, którego wymiary wynoszą 30cm, 80cm, 40cm',
        answers: {
            a: '7 min',
            b: '6 min',
            c: '5 min',
            d: '4 min'
        },
        correctAnswer: '4 min',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'oblzzycia'
    },
    {
        question: 'Zwiastuny reklamowe trwają 5 minut, co stanowi 4% czasu trwania filmu. Jak długo trwa cały film?',
        answers: {
            a: '125 min',
            b: '2,5 h',
            c: '2,12 h',
            d: '200 min'
        },
        correctAnswer: '125 min',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'oblzzycia'
    },
    {
        question: 'Kasia, Kuba i Zuzia wyjeżdżają w dniu 20.06 na praktyki studenckie. Kasia spędza poza domem 90dni, Kuba 13 tygodni, a Zuzia wraca w dniu 20.09. Kto z nich zostanie poza domem najdłużej?',
        answers: {
            a: 'Kasia',
            b: 'Kuba',
            c: 'Zuzia',
            d: 'Wszyscy zostaną tak samo'
        },
        correctAnswer: 'Zuzia',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'oblzzycia'
    },
    {
        question: 'Grecki matematyk i filozof Pitagoras urodził się ok. DLXXII roku p.n.e, a zmarł ok. CDXCVII roku p.n.e. Ile lat żył?',
        answers: {
            a: 'ok. 75 lat',
            b: 'ok. 105 lat',
            c: 'ok. 90 lat',
            d: 'ok. 60 lat'
        },
        correctAnswer: 'ok. 75 lat',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'liczby'
    },
    {
        question: 'Agnieszka zapisała liczbę czterocyfrową podzielną przez 9. Skreśliła w tej liczbie cyfrę jedności i otrzymała liczbę 496. Jaką liczbę zapisała Agnieszka?',
        answers: {
            a: '4968',
            b: '4967',
            c: '4961',
            d: '4960'
        },
        correctAnswer: '4968',
        tip: 'Aby liczba była podzielna przez 9 suma jej cyfry również musi być podzielna przez 9',
        department: 'liczby'
    },
    {
        question: 'Kinga kupiła trzy czwarte kilograma winogron po 8,80 zł za kilogram, pół kilograma cytryn po 4,30 zł za kilogram i półtora kilograma mandarynek po 5,40zł za kilogram. Ile reszty otrzyma jeśli zapłaci banknotem pięćdziesięciozłotowym?',
        answers: {
            a: '33,15 zł',
            b: '30,30 zł',
            c: '20,45 zł',
            d: 'Nie otrzyma reszty'
        },
        correctAnswer: '33,15 zł',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'liczby'
    },
    {
        question: 'Która z podanych liczby jest liczbą pierwszą',
        answers: {
            a: '21',
            b: '23',
            c: '28',
            d: '30'
        },
        correctAnswer: '23',
        tip: 'Liczba pierwsza to taka liczba, która jest większa od 1 a jej dzielnikami są 1 i ona sama',
        department: 'liczby'
    },
    {
        question: 'Która z podanych liczb jest liczbą parzystą?',
        answers: {
            a: '17',
            b: '22',
            c: '33',
            d: '39'
        },
        correctAnswer: '22',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'liczby'
    },
    {
        question: 'Ile wynosi wynik działania 7+5?',
        answers: {
            a: '9',
            b: '10',
            c: '11',
            d: '12'
        },
        correctAnswer: '12',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'liczby'
    },
    {
        question: 'Ile wynosi iloraz liczb 18 i 6?',
        answers: {
            a: '2',
            b: '3',
            c: '4',
            d: '5'
        },
        correctAnswer: '3',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'liczby'
    },
    {
        question: 'Ile wynosi wartość bezwględna liczby -7',
        answers: {
            a: '-7',
            b: '7',
            c: '0',
            d: 'Nie można podać wartości bezwzględnej z liczby ujemnej'
        },
        correctAnswer: '7',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'liczby'
    },
    {
        question: 'Ile wynosi suma kolejnych liczb całkowitych od 1 do 10?',
        answers: {
            a: '55',
            b: '40',
            c: '45',
            d: '50'
        },
        correctAnswer: '55',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'liczby'
    },
    {
        question: 'Ile wynosi suma liczb -5 i 12?',
        answers: {
            a: '7',
            b: '17',
            c: '-17',
            d: '-7'
        },
        correctAnswer: '7',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'liczby'
    },
    {
        question: 'Jaki jest wynik mnożenia liczb 5 i 0?',
        answers: {
            a: '0',
            b: '5',
            c: '1',
            d: '-5'
        },
        correctAnswer: '0',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'liczby'
    },
    {
        question: 'Ile wynosi wartość bezwzględna liczby 4',
        answers: {
            a: '4',
            b: '-4',
            c: '1',
            d: '0'
        },
        correctAnswer: '4',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'liczby'
    },
    {
        question: 'Ile wynosi różnica liczb 8 i -10',
        answers: {
            a: '18',
            b: '-8',
            c: '10',
            d: '8'
        },
        correctAnswer: '18',
        tip: 'Niestety dla tego pytania nie mamy jeszcze podpowiedzi. Przepraszamy za niedogodności.',
        department: 'liczby'
    }
]
