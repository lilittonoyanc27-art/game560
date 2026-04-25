import { Level } from './types';

export const LEVELS: Level[] = [
  {
    id: 1,
    title: 'Թվեր',
    description: 'Հաշվելու հիմունքները իսպաներենում',
    exercises: [
      { id: '1-1', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Uno', target: 'Մեկ', choices: ['Մեկ', 'Երկու', 'Երեք'], audioText: 'Uno', translation: 'Մեկ' },
      { id: '1-2', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Cinco', target: 'Հինգ', choices: ['Չորս', 'Հինգ', 'Վեց'], audioText: 'Cinco', translation: 'Հինգ' },
      { id: '1-3', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: 'Tengo ___ (մեկ) libro.', target: 'un', choices: ['un', 'una', 'uno'], audioText: 'Tengo un libro', translation: 'Ես ունեմ մեկ գիրք' },
      { id: '1-4', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Diez', target: 'Տասը', choices: ['Տասը', 'Տասնհինգ', 'Քսան'], audioText: 'Diez', translation: 'Տասը' },
      { id: '1-5', type: 'IMAGE_SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'ocho', target: '8', choices: ['8', '7', '9'], image: 'https://picsum.photos/seed/8num/400/400', audioText: 'Ocho', translation: 'Ութ' },
      { id: '1-6', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Ես քսան տարեկան եմ', target: 'Tengo veinte años', scrambledWords: ['veinte', 'Tengo', 'años'], audioText: 'Tengo veinte años', translation: 'Ես 20 տարեկան եմ' },
      { id: '1-7', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Quince', target: '15', choices: ['15', '50', '25'], audioText: 'Quince', translation: 'Տասնհինգ' },
      { id: '1-8', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: 'Dos más dos son ____.', target: 'cuatro', choices: ['cuatro', 'cinco', 'tres'], audioText: 'Dos más dos son cuatro', translation: 'Երկու գումարած երկու հավասար է չորս' },
      { id: '1-9', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Veinte', target: '20', choices: ['20', '12', '22'], audioText: 'Veinte', translation: 'Քսան' },
      { id: '1-10', type: 'MATCH', instruction: 'Հիշեք թարգմանությունը', prompt: 'Թվեր', target: '', translation: 'Համապատասխանեցրեք թվերը' },
      { id: '1-11', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Cien', target: '100', choices: ['100', '10', '1000'], audioText: 'Cien', translation: 'Հարյուր' },
      { id: '1-12', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: 'Tengo ____ (երեք) gatos.', target: 'tres', choices: ['tres', 'treses', 'trio'], audioText: 'Tengo tres gatos', translation: 'Ես երեք կատու ունեմ' },
      { id: '1-13', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Treinta', target: '30', choices: ['30', '40', '13'], audioText: 'Treinta', translation: 'Երեսուն' },
      { id: '1-14', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Մեկ, երկու, երեք', target: 'Uno dos tres', scrambledWords: ['tres', 'dos', 'Uno'], audioText: 'Uno dos tres', translation: 'Մեկ, երկու, երեք' },
      { id: '1-15', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Cincuenta', target: '50', choices: ['50', '15', '40'], audioText: 'Cincuenta', translation: 'Հիսուն' }
    ]
  },
  {
    id: 2,
    title: 'Ժամանակ',
    description: 'Ինչպես ասել ժամը իսպաներենով',
    exercises: [
      { id: '2-1', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: '¿Qué hora es?', target: 'Ժամը քանի՞սն է:', choices: ['Ժամը քանի՞սն է:', 'Որտե՞ղ ես:', 'Ինչպե՞ս ես:'], audioText: 'Qué hora es', translation: 'Ժամը քանի՞սն է:' },
      { id: '2-2', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: 'Es ___ (ժամը մեկն) en punto.', target: 'la una', choices: ['la una', 'el una', 'las una'], audioText: 'Es la una en punto', translation: 'Հիմա ուղիղ ժամը մեկն է' },
      { id: '2-3', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Mañana', target: 'Առավոտ', choices: ['Առավոտ', 'Երեկո', 'Գիշեր'], audioText: 'Mañana', translation: 'Առավոտ' },
      { id: '2-4', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Tarde', target: 'Օր', choices: ['Օր', 'Գիշեր', 'Առավոտ'], audioText: 'Tarde', translation: 'Օր (կեսօրից հետո)' },
      { id: '2-5', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: 'Son ___ (երկուսն) y media.', target: 'las dos', choices: ['las dos', 'el dos', 'la dos'], audioText: 'Son las dos y media', translation: 'Հիմա երկուսն անց կես է' },
      { id: '2-6', type: 'IMAGE_SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'El reloj', target: 'Ժամացույց', choices: ['Ժամացույց', 'Ժամանակ', 'Րոպե'], image: 'https://picsum.photos/seed/clock/400/400', audioText: 'El reloj', translation: 'Ժամացույց' },
      { id: '2-7', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Հիմա ժամը հինգն է', target: 'Son las cinco', scrambledWords: ['cinco', 'las', 'Son'], audioText: 'Son las cinco', translation: 'Հիմա ժամը հինգն է' },
      { id: '2-8', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Noche', target: 'Գիշեր', choices: ['Գիշեր', 'Օր', 'Կեսօր'], audioText: 'Noche', translation: 'Գիշեր' },
      { id: '2-9', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: 'A las ____ (ժամը ութին):', target: 'ocho', choices: ['ocho', 'ochos', 'eight'], audioText: 'A las ocho', translation: 'Ժամը ութին' },
      { id: '2-10', type: 'MATCH', instruction: 'Հիշեք թարգմանությունը', prompt: 'Ժամանակ', target: '', translation: 'Համապատասխանեցրեք ժամանակը' },
      { id: '2-11', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Mediodía', target: 'Կեսօր', choices: ['Կեսօր', 'Կեսգիշեր', 'Առավոտ'], audioText: 'Mediodía', translation: 'Կեսօր' },
      { id: '2-12', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Առավոտյան ժամը տասին', target: 'A las diez de la mañana', scrambledWords: ['diez', 'A', 'mañana', 'las', 'de', 'la'], audioText: 'A las diez de la mañana', translation: 'Առավոտյան ժամը 10-ին' },
      { id: '2-13', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Minuto', target: 'Րոպե', choices: ['Րոպե', 'Վայրկյան', 'Ժամ'], audioText: 'Minuto', translation: 'Րոպե' },
      { id: '2-14', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: 'Son las siete ____ (և 15 րոպե):', target: 'y cuarto', choices: ['y cuarto', 'y quince', 'y cuatro'], audioText: 'Son las siete y cuarto', translation: 'Յոթն անց տասնհինգ' },
      { id: '2-15', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Medianoche', target: 'Կեսգիշեր', choices: ['Կեսգիշեր', 'Նախաճաշ', 'Ճաշ'], audioText: 'Medianoche', translation: 'Կեսգիշեր' }
    ]
  },
  {
    id: 3,
    title: 'Գոյականների սեռը',
    description: 'Արական և իգական սեռ (el / la)',
    exercises: [
      { id: '3-1', type: 'SELECT', instruction: 'Ընտրեք ճիշտ հոդը', prompt: '___ chico (տղա)', target: 'el', choices: ['el', 'la'], audioText: 'El chico', translation: 'Տղա' },
      { id: '3-2', type: 'SELECT', instruction: 'Ընտրեք ճիշտ հոդը', prompt: '___ chica (աղջիկ)', target: 'la', choices: ['el', 'la'], audioText: 'La chica', translation: 'Աղջիկ' },
      { id: '3-3', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: '___ mesa (սեղան)', target: 'La', choices: ['La', 'El'], audioText: 'La mesa', translation: 'Սեղան' },
      { id: '3-4', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: '___ libro (գիրք)', target: 'El', choices: ['El', 'La'], audioText: 'El libro', translation: 'Գիրք' },
      { id: '3-5', type: 'SELECT', instruction: 'Ընտրեք ճիշտ հոդը', prompt: '___ gato', target: 'el', choices: ['el', 'la'], audioText: 'El gato', translation: 'Կատու' },
      { id: '3-6', type: 'SELECT', instruction: 'Ընտրեք ճիշտ հոդը', prompt: '___ casa', target: 'la', choices: ['el', 'la'], audioText: 'La casa', translation: 'Տուն' },
      { id: '3-7', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: '___ ventana', target: 'La', choices: ['La', 'El'], audioText: 'La window', translation: 'Պատուհան' },
      { id: '3-8', type: 'IMAGE_SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'perro', target: 'el perro', choices: ['el perro', 'la perro'], image: 'https://picsum.photos/seed/dog/400/400', audioText: 'El perro', translation: 'Շուն' },
      { id: '3-9', type: 'SELECT', instruction: 'Ընտրեք ճիշտ հոդը', prompt: '___ flor', target: 'la', choices: ['el', 'la'], audioText: 'La flor', translation: 'Ծաղիկ' },
      { id: '3-10', type: 'MATCH', instruction: 'Հիշեք թարգմանությունը', prompt: 'Սեռ', target: '', translation: 'Համապատասխանեցրեք սեռը' },
      { id: '3-11', type: 'SELECT', instruction: 'Ընտրեք ճիշտ հոդը', prompt: '___ sol', target: 'el', choices: ['el', 'la'], audioText: 'El sol', translation: 'Արև' },
      { id: '3-12', type: 'SELECT', instruction: 'Ընտրեք ճիշտ հոդը', prompt: '___ luna', target: 'la', choices: ['el', 'la'], audioText: 'La luna', translation: 'Լուսին' },
      { id: '3-13', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: '___ país (երկիր)', target: 'El', choices: ['El', 'La'], audioText: 'El país', translation: 'Երկիր' },
      { id: '3-14', type: 'SELECT', instruction: 'Ընտրեք ճիշտ հոդը', prompt: '___ televisión', target: 'la', choices: ['el', 'la'], audioText: 'La television', translation: 'Հեռուստատեսություն' },
      { id: '3-15', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Գիրքը հետաքրքիր է', target: 'El libro es interesante', scrambledWords: ['libro', 'es', 'El', 'interesante'], audioText: 'El libro es interesante', translation: 'Գիրքը հետաքրքիր է' }
    ]
  },
  {
    id: 4,
    title: 'Սեռի բացառություններ',
    description: 'Բացառություն բառեր, որոնք պետք է հիշել',
    exercises: [
      { id: '4-1', type: 'SELECT', instruction: 'Ընտրեք բացառությունը', prompt: '___ problema', target: 'el', choices: ['el', 'la'], audioText: 'El problema', translation: 'Խնդիր (բացառություն)' },
      { id: '4-2', type: 'SELECT', instruction: 'Ընտրեք բացառությունը', prompt: '___ mapa', target: 'el', choices: ['el', 'la'], audioText: 'El mapa', translation: 'Քարտեզ (բացառություն)' },
      { id: '4-3', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: '___ mano (ձեռք)', target: 'La', choices: ['La', 'El'], audioText: 'La mano', translation: 'Ձեռք (բացառություն)' },
      { id: '4-4', type: 'SELECT', instruction: 'Ընտրեք բացառությունը', prompt: '___ radio', target: 'la', choices: ['el', 'la'], audioText: 'La radio', translation: 'Ռադիո (բացառություն)' },
      { id: '4-5', type: 'SELECT', instruction: 'Ընտրեք բացառությունը', prompt: '___ idioma', target: 'el', choices: ['el', 'la'], audioText: 'El idioma', translation: 'Լեզու (բացառություն)' },
      { id: '4-6', type: 'SELECT', instruction: 'Ընտրեք բացառությունը', prompt: '___ planeta', target: 'el', choices: ['el', 'la'], audioText: 'El planeta', translation: 'Մոլորակ (բացառություն)' },
      { id: '4-7', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: '___ día', target: 'El', choices: ['El', 'La'], audioText: 'El día', translation: 'Օր (բացառություն)' },
      { id: '4-8', type: 'SELECT', instruction: 'Ընտրեք բացառությունը', prompt: '___ sofá', target: 'el', choices: ['el', 'la'], audioText: 'El sofá', translation: 'Բազմոց (բացառություն)' },
      { id: '4-9', type: 'SCRAMBLE', instruction: 'Գուշակեք բառը', prompt: 'ՄՈԼՈՐԱԿ', target: 'el planeta', scrambledWords: ['planeta', 'el'], audioText: 'El planeta', translation: 'Մոլորակ' },
      { id: '4-10', type: 'SCRAMBLE', instruction: 'Գուշակեք բառը', prompt: 'ԽՆԴԻՐ', target: 'el problema', scrambledWords: ['problema', 'el'], audioText: 'El problema', translation: 'Խնդիր' },
      { id: '4-11', type: 'SCRAMBLE', instruction: 'Գուշակեք բառը', prompt: 'ՁԵՌՔ', target: 'la mano', scrambledWords: ['mano', 'la'], audioText: 'La mano', translation: 'Ձեռք' },
      { id: '4-12', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: '___ foto', target: 'La', choices: ['La', 'El'], audioText: 'La foto', translation: 'Լուսանկար (բացառություն)' },
      { id: '4-13', type: 'SELECT', instruction: 'Ընտրեք բացառությունը', prompt: '___ clima', target: 'el', choices: ['el', 'la'], audioText: 'El clima', translation: 'Կլիմա (բացառություն)' },
      { id: '4-14', type: 'SCRAMBLE', instruction: 'Գուշակեք բառը', prompt: 'ՔԱՐՏԵԶ', target: 'el mapa', scrambledWords: ['mapa', 'el'], audioText: 'El mapa', translation: 'Քարտեզ' },
      { id: '4-15', type: 'SELECT', instruction: 'Ընտրեք բացառությունը', prompt: '___ moto', target: 'la', choices: ['el', 'la'], audioText: 'La moto', translation: 'Մոտոցիկլետ (բացառություն)' }
    ]
  },
  {
    id: 5,
    title: 'Ածականներ',
    description: 'Առարկաների և մարդկանց նկարագրություն',
    exercises: [
      { id: '5-1', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Rojo', target: 'Կարմիր', choices: ['Կարմիր', 'Կապույտ', 'Կանաչ'], audioText: 'Rojo', translation: 'Կարմիր' },
      { id: '5-2', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Grande', target: 'Մեծ', choices: ['Մեծ', 'Փոքր', 'Հին'], audioText: 'Grande', translation: 'Մեծ' },
      { id: '5-3', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: 'La casa es ___ (սպիտակ):', target: 'blanca', choices: ['blanca', 'blanco', 'blancos'], audioText: 'La casa es blanca', translation: 'Տունը սպիտակ է' },
      { id: '5-4', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: 'El coche es ___ (կապույտ):', target: 'azul', choices: ['azul', 'azules', 'azúla'], audioText: 'El coche es azul', translation: 'Մեքենան կապույտ է' },
      { id: '5-5', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Pequeño', target: 'Փոքր', choices: ['Փոքր', 'Նոր', 'Երկար'], audioText: 'Pequeño', translation: 'Փոքր' },
      { id: '5-6', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Կարմիր խնձոր', target: 'La manzana roja', scrambledWords: ['roja', 'manzana', 'La'], audioText: 'La manzana roja', translation: 'Կարմիր խնձոր' },
      { id: '5-7', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Bonito', target: 'Գեղեցիկ', choices: ['Գեղեցիկ', 'Սարսափելի', 'Ձանձրալի'], audioText: 'Bonito', translation: 'Գեղեցիկ' },
      { id: '5-8', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: 'Los libros son ___ (նոր):', target: 'nuevos', choices: ['nuevos', 'nuevo', 'nueva'], audioText: 'Los libros son nuevos', translation: 'Գրքերը նոր են' },
      { id: '5-9', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Inteligente', target: 'Խելացի', choices: ['Խելացի', 'Հիմար', 'Ուրախ'], audioText: 'Inteligente', translation: 'Խելացի' },
      { id: '5-10', type: 'MATCH', instruction: 'Հիշեք թարգմանությունը', prompt: 'Ածականներ', target: '', translation: 'Համապատասխանեցրեք ածականները' },
      { id: '5-11', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Verde', target: 'Կանաչ', choices: ['Կանաչ', 'Դեղին', 'Սև'], audioText: 'Verde', translation: 'Կանաչ' },
      { id: '5-12', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: 'El sol es ___ (դեղին):', target: 'amarillo', choices: ['amarillo', 'amarilla', 'amarillos'], audioText: 'El sol es amarillo', translation: 'Արևը դեղին է' },
      { id: '5-13', type: 'SCRAMBLE', instruction: 'Կազմեք նախադասությունը', prompt: 'Իմ գիրքը հին է', target: 'Mi libro es viejo', scrambledWords: ['es', 'viejo', 'libro', 'Mi'], audioText: 'Mi libro es viejo', translation: 'Իմ գիրքը հին է' },
      { id: '5-14', type: 'SELECT', instruction: 'Ընտրեք ճիշտ թարգմանությունը', prompt: 'Divertido', target: 'Զվարճալի', choices: ['Զվարճալի', 'Տխուր', 'Հանգիստ'], audioText: 'Divertido', translation: 'Ուրախ / Զվարճալի' },
      { id: '5-15', type: 'FILL', instruction: 'Լրացրեք բաց թողնված տեղը', prompt: 'Las flores son ___ (գեղեցիկ):', target: 'bonitas', choices: ['bonitas', 'bonito', 'bonita'], audioText: 'Las flores son bonitas', translation: 'Ծաղիկները գեղեցիկ են' }
    ]
  }
];

export const VOCABULARY = [
  { id: 'v1', es: 'Rojo', hy: 'Կարմիր' },
  { id: 'v2', es: 'Azul', hy: 'Կապույտ' },
  { id: 'v3', es: 'Grande', hy: 'Մեծ' },
  { id: 'v4', es: 'Pequeño', hy: 'Փոքր' },
  { id: 'v5', es: 'Casa', hy: 'Տուն' },
  { id: 'v6', es: 'Libro', hy: 'Գիրք' },
  { id: 'v7', es: 'Uno', hy: '1' },
  { id: 'v8', es: 'Dos', hy: '2' },
  { id: 'v9', es: 'Tres', hy: '3' },
  { id: 'v10', es: 'Sol', hy: 'Արև' },
];
