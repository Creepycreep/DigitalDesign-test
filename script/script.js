window.addEventListener('DOMContentLoaded', () => {
  let upperArr = [
    {
      type: 'Пальто двубортное',
      img: 'img/upper/1.png',
      date: '15.05.2023'
    },

    {
      type: 'Блузка',
      img: 'img/upper/2.png',
      date: '14.05.2023'
    },

    {
      type: 'Пиджак оверсайз',
      img: 'img/upper/3.png',
      date: '14.05.2023'
    },

    {
      type: 'Кроп-топ с длинными рукавами',
      img: 'img/upper/4.png',
      date: '12.05.2023'
    },

    {
      type: 'Платье-футляр на бретелях',
      img: 'img/upper/5.png',
      date: '12.05.2023'
    },

    {
      type: 'Водолазка',
      img: 'img/upper/6.png',
      date: '12.05.2023'
    },

    {
      type: 'Футболка базовая',
      img: 'img/upper/7.png',
      date: '11.05.2023'
    },

    {
      type: 'Кардиган оверсайз в клетку',
      img: 'img/upper/8.png',
      date: '11.05.2023'
    },

    {
      type: 'Свитшот',
      img: 'img/upper/9.png',
      date: '11.05.2023'
    },

    {
      type: 'Куртка кожаная укороченная',
      img: 'img/upper/10.png',
      date: '11.05.2023'
    },

    {
      type: 'Свитер оверсайз',
      img: 'img/upper/11.png',
      date: '01.05.2023'
    }


  ],
    lowerArr = [
      {
        type: 'Джинсы mom',
        img: 'img/lower/1.png',
        date: '15.04.2023'
      },

      {
        type: 'Брюки прямые',
        img: 'img/lower/2.png',
        date: '16.04.2023'
      },

      {
        type: 'Юбка клеш',
        img: 'img/lower/3.png',
        date: '15.04.2023'
      },

      {
        type: 'Шорты джинсовые',
        img: 'img/lower/4.png',
        date: '05.04.2023'
      },

      {
        type: 'Комбенизон',
        img: 'img/lower/5.png',
        date: '02.04.2023'
      },

      {
        type: 'Юбка макси',
        img: 'img/lower/6.png',
        date: '02.04.2023'
      },

      {
        type: 'Джинсы узкие',
        img: 'img/lower/7.png',
        date: '11.04.2023'
      },

      {
        type: 'Лосины',
        img: 'img/lower/8.png',
        date: '15.04.2023'
      },

      {
        type: 'Юбка карандаш',
        img: 'img/lower/9.png',
        date: '17.03.2023'
      },

      {
        type: 'Джинсовая мини-юбка',
        img: 'img/lower/10.png',
        date: '16.03.2023'
      }
    ],
    shoesArr = [
      {
        type: 'Лоферы',
        img: 'img/shoes/1.png',
        date: '15.05.2023'
      },

      {
        type: 'Лодочки',
        img: 'img/shoes/2.png',
        date: '14.05.2023'
      },

      {
        type: 'Челси',
        img: 'img/shoes/3.png',
        date: '13.05.2023'
      },

      {
        type: 'Ботфорты',
        img: 'img/shoes/4.png',
        date: '12.05.2023'
      },

      {
        type: 'Сандалии',
        img: 'img/shoes/5.png',
        date: '11.05.2023'
      },

      {
        type: 'Дерби',
        img: 'img/shoes/6.png',
        date: '10.05.2023'
      },

      {
        type: 'Мартинсы',
        img: 'img/shoes/7.png',
        date: '09.05.2023'
      },

      {
        type: 'Конверсы',
        img: 'img/shoes/8.png',
        date: '08.05.2023'
      },

      {
        type: 'Кроссовки',
        img: 'img/shoes/9.png',
        date: '07.05.2023'
      },

      {
        type: 'Босоножки',
        img: 'img/shoes/10.png',
        date: '06.05.2023'
      },

      {
        type: 'Оксфорды',
        img: 'img/shoes/11.png',
        date: '05.05.2023'
      },

      {
        type: 'Мери Джейн',
        img: 'img/shoes/12.png',
        date: '04.05.2023'
      }


    ],
    accessoriesArr = [
      {
        type: 'Серьги капельки',
        img: 'img/accessories/1.png',
        date: '10.03.2023'
      },

      {
        type: 'Серьги кольца',
        img: 'img/accessories/2.png',
        date: '11.03.2023'
      },

      {
        type: 'Кольцо',
        img: 'img/accessories/3.png',
        date: '12.03.2023'
      },

      {
        type: 'Шарф',
        img: 'img/accessories/4.png',
        date: '13.03.2023'
      },

      {
        type: 'Шапка с ушками',
        img: 'img/accessories/5.png',
        date: '14.03.2023'
      },

      {
        type: 'Сумка',
        img: 'img/accessories/6.png',
        date: '15.03.2023'
      },

      {
        type: 'Носки высокие',
        img: 'img/accessories/7.png',
        date: '16.03.2023'
      },

      {
        type: 'Носки низкие',
        img: 'img/accessories/8.png',
        date: '17.03.2023'
      },

      {
        type: 'Ремень',
        img: 'img/accessories/9.png',
        date: '18.03.2023'
      },

      {
        type: 'Перчатки',
        img: 'img/accessories/10.png',
        date: '19.03.2023'
      },

      {
        type: 'Кулон звездочка',
        img: 'img/accessories/11.png',
        date: '20.03.2023'
      },

      {
        type: 'Серьги гвоздики',
        img: 'img/accessories/12.png',
        date: '21.03.2023'
      }
      ,

      {
        type: 'Часы наручные',
        img: 'img/accessories/13.png',
        date: '22.03.2023'
      }
    ];

  let upper = document.querySelector('.upper-wrapper'),
    lower = document.querySelector('.lower-wrapper'),
    shoes = document.querySelector('.shoes-wrapper'),
    accessories = document.querySelector('.accessories-wrapper');

  function getDayInfo(cardDate) {
    let str = '',
      date = cardDate.split('.');
    date = new Date(+date[2], date[1] - 1, date[0])

    days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],

      day = date.getDay(),
      month = date.getMonth(),
      year = date.getFullYear();

    startOfYear = (new Date(date.getFullYear(), 0, 1)).getTime();
    nowTime = date.getTime();

    weeks = Math.ceil((nowTime - startOfYear) / (1000 * 60 * 60 * 24 * 7));

    str = `${days[day]}, <br> ${weeks} неделя ${months[month]} ${year} года`

    return str;
  }

  function addItems(elem, arr) {
    for (let item of arr) {
      let card = document.createElement('div');
      card.innerHTML = `<figure class="card-img"><div  class="card__img"><img src="${item.img}" alt="${item.type}"> </div><figcaption> <h3>${item.type}</h3> </figcaption> </figure> <button class="btn-buy icon_cart">Купить</button> <p class="card__date">${getDayInfo(item.date)}</p>`;

      card.classList.add('upper__card', 'card');

      elem.append(card);
    }
  };

  addItems(upper, upperArr);
  addItems(lower, lowerArr);
  addItems(shoes, shoesArr);
  addItems(accessories, accessoriesArr);

  let themeBtn = document.querySelector('#btn_theme'),
    body = document.querySelector('body'),
    greetings = document.querySelector('#greetings');

  themeBtn.addEventListener('click', () => {
    if (themeBtn.classList.contains('btn_light')) {
      themeBtn.classList.toggle('btn_light');
      themeBtn.classList.toggle('btn_dark')

      body.classList.toggle('body_light');
      body.classList.toggle('body_dark');

      greetings.classList.toggle('greetings_light');
      greetings.classList.toggle('greetings_dark');

      document.documentElement.style.setProperty('--color-text', 'rgb(225, 194, 157)');
      document.documentElement.style.setProperty('--color-bg', 'rgb(31, 27, 28)');
      document.documentElement.style.setProperty('--card-bg', '#3e3e3e');

    } else if (themeBtn.classList.contains('btn_dark')) {
      themeBtn.classList.toggle('btn_light');
      themeBtn.classList.toggle('btn_dark');

      body.classList.toggle('body_light');
      body.classList.toggle('body_dark');

      greetings.classList.toggle('greetings_light');
      greetings.classList.toggle('greetings_dark');

      document.documentElement.style.setProperty('--color-text', 'rgb(31, 27, 28)');
      document.documentElement.style.setProperty('--color-bg', 'rgb(225, 194, 157)');
      document.documentElement.style.setProperty('--card-bg', '#fff')
    }
  });

  let navbar = document.querySelector('.header__nav'),
    main = document.querySelector('.main'),
    up = document.querySelector('.btn-up');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (window.innerWidth > 1024 && scrollY > 104) {
      navbar.classList.add('nav_fixed');
      main.style.marginTop = '73px';
    } else if (window.innerWidth > 1024) {
      navbar.classList.remove('nav_fixed');
      main.style.marginTop = 0;
    }

    scrollY > 350 ? up.classList.remove('btn-up_hide') : up.classList.add('btn-up_hide')

  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && scrollY > 104) {
      main.style.marginTop = '73px';
    } else if (scrollY > 104) {
      main.style.marginTop = 0;
    }
  });

  let wrappers = document.querySelectorAll('.wrapper'),
    modal = document.querySelector('.modal'),
    modalHeading = document.querySelector('.form__heading'),
    closeBtn = document.querySelector('#close'),
    modalBtn = document.querySelector('.btn-modal');

  wrappers.forEach((wrapper) => {
    wrapper.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-buy')) {
        modal.classList.remove('modal-hide');
        body.classList.add('overflow');

        let str = e.target.previousElementSibling.lastElementChild.firstElementChild.innerHTML;

        modalHeading.innerHTML = `Вы собираетесь приобрести товар: "${str}"`;
      }
    });
  })

  closeBtn.addEventListener('click', () => {
    modal.classList.add('modal-hide');
    body.classList.remove('overflow');
  });

  modalBtn.addEventListener('click', () => {
    alert('Спасибо за заказ!')
    modal.classList.add('modal-hide');
    body.classList.remove('overflow');
  })

  btnMenu = document.querySelector('.btn-menu'),
    navbar = document.querySelector('.nav_mobile');

  btnMenu.addEventListener('click', () => {
    navbar.classList.toggle('nav_mobile_open');
    btnMenu.classList.toggle('btn-menu_close');
  })
});