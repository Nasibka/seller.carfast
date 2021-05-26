<template>
  <div class="container">
    <section class="page1">
      <img class="logo" src="@/assets/img/logo.png" alt="logo">

      <h3>Крупнейший в Казахстане аукцион для покупки/продажи автомобилей</h3>

      <h2 class="buy">
        КУПИТЕ АВТО С АУКЦИОНА ПО САМОЙ ВЫГОДНОЙ ЦЕНЕ БЕЗ ПОСРЕДНИКОВ И БЕЗ КОМИССИЙ
      </h2>

      <img src="@/assets/img/car.png" alt="car" class="car">

      <ul>
        <li>Проводим более 300 аукционов каждый день</li>
        <li>Торгуетесь на аукционе, оплачиваете после живого просмотра на СТО</li>
        <li>Есть рассрочка на покупку авто</li>
      </ul>

      <div class="box yellow-box">ХОЧУ ВЫГОДНО КУПИТЬ АВТО</div>

      <router-link to="/for-sellers" class="link">Хочу продать авто</router-link>
    </section>

    <section class="page2">
      <h2>КАК ЭТО РАБОТАЕТ?</h2>

      <div class="point">
        <div class="box blue-box">СКРИН АУКЦИОНА (ПОБЕДА)</div>
        <span>ШАГ 1</span>
        <p>
          Смотрите на аукционе интересующие авто и ставите цену за которую готовы купить авто
        </p>
      </div>

      <div class="point">
        <div class="box blue-box">ФОТО ПРОВЕРКИ НА СТО</div>
        <span>ШАГ 2</span>
        <p>
          Продавец соглашается на Вашу цену. CarFast.kz помогает оформить и гарантирует безопасную сделку
        </p>
      </div>

      <div class="point">
        <div class="box blue-box">ФОТО ДОВОЛЬНОГО ЧУВАКА, КОТОРЫЙ КУПИЛ ТАЧКУ</div>
        <span>ШАГ 3</span>
        <p>
          CarFast.kz гарантирует безопасную сделку. В случае покупки задаток вычитается из стоимости авто. При отказе от покупки, задаток возвращается
        </p>
      </div>

      <div class="box yellow-box">ХОЧУ ВЫГОДНО КУПИТЬ АВТО</div>
    </section>

    <section class="page3">
      <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>

      <div class="question">
        <div class="box blue-box">СКОЛЬКО ЭТО СТОИТ ДЛЯ ПОКУПАТЕЛЯ?</div>
        <p>Всё абсолютно бесплатно.</p>
      </div>

      <div class="question">
        <div class="box blue-box">ВЫ БЕРЕТЕ КОМИССИЮ?</div>
        <p>
          Мы не берем комиссий со сделки. Есть только задаток 20 000 тг, чтобы зафиксировать желаемый автомобиль.
          В случае отказа от покупки - задаток возвращается.
        </p>
      </div>

      <span class="subtext questions">(еще можете дополнить вопросами)</span>

      <div class="box yellow-box">ВСЕ ПОНЯТНО, ХОЧУ КУПИТЬ АВТО</div>

      <router-link to="/for-sellers" class="link">Хочу продать авто</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BuyerPage'
}
</script>

<style>

</style>