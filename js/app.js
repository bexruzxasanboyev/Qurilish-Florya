const htmlContent = `
  <div class="container">
            <div class="mobile-event-container">
                <div class="mobile-event-info">
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 6.33333H16M1 6.33333V14.1557C1 15.1514 1 15.6489 1.20436 16.0292C1.38413 16.3637 1.67076 16.636 2.02356 16.8064C2.42425 17 2.94906 17 3.9971 17H13.0029C14.0509 17 14.575 17 14.9757 16.8064C15.3285 16.636 15.6161 16.3637 15.7958 16.0292C16 15.6493 16 15.1524 16 14.1587V6.33333M1 6.33333V5.6224C1 4.62675 1 4.12855 1.20436 3.74826C1.38413 3.41375 1.67076 3.14199 2.02356 2.97154C2.42464 2.77778 2.95008 2.77778 4.00018 2.77778H4.75M16 6.33333V5.61948C16 4.62577 16 4.12818 15.7958 3.74826C15.6161 3.41375 15.3285 3.14199 14.9757 2.97154C14.5746 2.77778 14.0503 2.77778 13.0002 2.77778H12.25M12.25 1V2.77778M12.25 2.77778H4.75M4.75 1V2.77778"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                    <p class="mobile-event-date">17-Aprel</p>
                </div>
                <div class="mobile-event-info">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.5 4.33333V8.5H12.6667M8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5C16 12.6421 12.6421 16 8.5 16Z"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                    <p class="mobile-event-date">20:00</p>
                </div>
            </div>

            <h1 class="mobile-main-title">
                50 OY MUDDATGA <span>FOIZSIZ <br>
                    BO'LIB TO'LASHGA</span> XONADONlar
            </h1>

            <div class="mobile-main-box">
                <p class="mobile-main-text">Yopiq taqdimotga qatnashing</p>
            </div>

            <div class="mobile-content-img">
                <img src="./images/speaker.avif" alt="Speaker" decoding="async" loading="lazy" class="mobile-hero-image"
                    width="369" height="351">
            </div>
            <div class="mobile-content-box">
                <a class="mobile-cta-button webinar-cta registerBtn" href="#">
                    BEPUL QATNASHISH
                </a>
            </div>

            <div class="gift">
                <img src="./images/gift.avif" loading="lazy" decoding="async" width="60" height="63" alt="gift">
                <div class="gift__info">
                    <h3>BEPULGA 2 TA XONADON</h3>
                    <p>Taqdimotda qatnashib yangi <br> xonadon yutib olishingiz mumkin! </p>
                </div>
            </div>


            <h2 class="description__title">yangi florya loyihasi haqida:</h2>
            <ul class="description__row">
                <li class="description__col">
                    <img src="./images/verfiy.avif" width="47" height="47" loading="lazy" decoding="async" alt="verfiy">
                    <p class="description__col-text">
                        <b>50 oylik foizsiz</b> muddatli <br> to'lov asosida xonadon xarid <br> qilish imkoniyati
                    </p>
                </li>
                <li class="description__col">
                    <img src="./images/verfiy.avif" width="47" height="47" loading="lazy" decoding="async" alt="verfiy">
                    <p class="description__col-text">
                        Har bir kvadrat metri uchun <br> <b>4 mln so'mgacha chegirma</b> <br> Muddati cheklangan!
                    </p>
                </li>
                <li class="description__col">
                    <img src="./images/verfiy.avif" width="47" height="47" loading="lazy" decoding="async" alt="verfiy">
                    <p class="description__col-text">
                        <b>BEPULGA xonadon</b> yutib <br> olish imkoniyati faqat <br> vebinar ishtirokchilari uchun
                    </p>
                </li>
            </ul>
            <a class="mobile-cta-button webinar-cta registerBtn" href="#">
                BEPUL QATNASHISH
            </a>
        </div>
         <div style="min-height: 422px;">
            <img class="bg" src="./images/bg.avif" loading="eager" decoding="async" width="490" height="422" alt="bg">
        </div>
        `;

setTimeout(() => {
    document.getElementById('lezyhtml').innerHTML = htmlContent;
}, 1000);