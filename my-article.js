Vue.component('my-article', {
    template:'<article class="card"><div class="card__wrapper"><figure class="card__feature">'+
            '<img src="https://www.dropbox.com/s/z7gp2vanse5djxf/waves.jpg?raw=1" class="card__img" alt="waves" width="275" height="240"></figure>'+
            '<div class="card__box"><header class="card__item card__header">'+
            '<h6 class="card__item card__item--small card__label">Featured</h6>'+
            '<h2 class="card__item card__item--small card__title">{{val.title}}</h2>'+
            '</header>'+
            '<hr class="card__item card__divider">'+
            '<section class="card__item card__body">'+
            '{{val.sub}}'+
            '</section>'+
            '</div></div><a :href=val.linkurl></a></article>',
    props: ['val']
  })


