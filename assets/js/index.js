
var resource = `
<div id="top-td"></div><br/>
<div class="preloader">
    <div class="preloader__wrap">
      <div class="circle-pulse">
        <div class="circle-pulse__1">
      </div>
      <div class="circle-pulse__2">
      </div>
    </div>
    <div class="preloader__progress">
    <span>
  </span>
  </div>
  </div>
  </div>
    <main class="main">
      <div class="container gutter-top">
        <div class="row sticky-parent">
          <!-- Sidebar -->
          <aside class="col-12 col-md-12 col-xl-3">
            <div class="sidebar box pb-0 sticky-column">
              <div class="text-center">
                <img class="ft-logo" src="${set_1[config_name[4]]}"/>
                <h3 class="title title--h3 sidebar__user-name td-name">
                  <span class="weight--500 td-name">${set_1[config_name[0]]} <img class="td-verify" src="https://imgur.com/IkTlp6c.gif"/><br>
                    <div class="badge badge--gray td-bio">@${set_1[config_name[1]]}</div>
                </h3>
                <!-- Social -->
                </div>
                <div class="sidebar__info box-inner box-inner--rounded">
                  <ul class="contacts-block">
                    <li class="contacts-block__item" data-toggle="tooltip" data-placement="top" title="Website">
                    Website:&nbsp;<a href="https://${set_1[config_name[2]]}" target="_blank">${set_1[config_name[2]]}</a></li>
                  </li>
                    <li class="contacts-block__item" data-toggle="tooltip" data-placement="top" title="Zalo Admin">
                      Zalo:&nbsp;<a href="https://${set_1[config_name[3]]}" target="_blank"> ${set_1[config_name[3]]}</a></li>
                    </li>
                  </ul>
                  <a class="btn btn--blue-gradient navbar-brand" href="https://dichvuvn.store">Shop Bán Mã Nguồn</a>
                </div>
              </div>
          </aside>
          <!-- Content -->
<div class="col-12 col-md-12 col-xl-9">
    <div class="box pb-0">
        <!-- What -->
        <div class="box-inner pb-0">
            <h1 class="title title--h3 title__separate">Info Payments</h1>
            <div class="row">
                <!-- Case Item -->
                <div class="col-12 col-lg-6">
                    <div class="case-item box box__second">
                        <img class="case-item__icon td-img-bank" src="https://i.imgur.com/hX9rMfj.png" alt="" />
                        <div>
                            <h3 class="title title--h5">Mb Bank</h3>
                            <p class="case-item__caption">
                                STK: ${set_3.mbbank.sotaikhoan}&ensp;<i data-copy="${set_3.mbbank.sotaikhoan}" class="fa fa-copy td-copy" data-toggle="tooltip"
                                data-placement="top" title="Sao chép số tài khoản" onclick="copyToClipboard(this)"></i>
                                <br />CTK: ${set_3.mbbank.chutaikhoan}&ensp;<i data-copy="${set_3.mbbank.chutaikhoan}" class="fa fa-copy td-copy" data-toggle="tooltip"
                                data-placement="top" title="Sao chép số chủ tài khoản" onclick="copyToClipboard(this)"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Case Item -->
                <div class="col-12 col-lg-6">
                    <div class="case-item box box__second">
                        <img class="case-item__icon" src="https://i.imgur.com/6AStRlN.png" alt="" />
                        <div>
                            <h3 class="title title--h5">Momo</h3>
                            <p class="case-item__caption">
                            STK: ${set_3.momo.sotaikhoan}&ensp;<i data-copy="${set_3.momo.sotaikhoan}" class="fa fa-copy td-copy" data-toggle="tooltip"
                            data-placement="top" title=""Sao chép số tài khoản" onclick="copyToClipboard(this)"></i>
                            <br />CTK: ${set_3.momo.chutaikhoan}&ensp;<i data-copy="${set_3.momo.chutaikhoan}" class="fa fa-copy td-copy" data-toggle="tooltip"
                            data-placement="top" title=""Sao chép số chủ tài khoản" onclick="copyToClipboard(this)"></i>
                        </p>
                        </div>
                    </div>
                </div>
                <!-- Case Item -->
                <div class="col-12 col-lg-6">
                    <div class="case-item box box__second">
                        <img class="case-item__icon" src="https://ipay.vietinbank.vn/logo.png" alt="" />
                        <div>
                            <h3 class="title title--h5">Vietinbank</h3>
                            <p class="case-item__caption">
                            STK: ${set_3.vietinbank.sotaikhoan}&ensp;<i data-copy="${set_3.vietinbank.sotaikhoan}" class="fa fa-copy td-copy" data-toggle="tooltip"
                            data-placement="top" title=""Sao chép số tài khoản" onclick="copyToClipboard(this)"></i>
                            <br />CTK: ${set_3.vietinbank.chutaikhoan}&ensp;<i data-copy="${set_3.vietinbank.chutaikhoan}" class="fa fa-copy td-copy" data-toggle="tooltip"
                            data-placement="top" title=""Sao chép số chủ tài khoản" onclick="copyToClipboard(this)"></i>
                        </p>
                        </div>
                    </div>
                </div>
                <!-- Case Item -->
                <div class="col-12 col-lg-6">
                    <div class="case-item box box__second">
                        <img class="case-item__icon" src="https://i.imgur.com/jpeOqof.png" alt="" />
                        <div>
                            <h3 class="title title--h5">Vietcombank</h3>
                            <p class="case-item__caption">
                            STK: ${set_3.vietcombank.sotaikhoan}&ensp;<i data-copy="${set_3.vietcombank.sotaikhoan}" class="fa fa-copy td-copy" data-toggle="tooltip"
                            data-placement="top" title=""Sao chép số tài khoản" onclick="copyToClipboard(this)"></i>
                            <br />CTK: ${set_3.vietcombank.chutaikhoan}&ensp;<i data-copy="${set_3.vietcombank.chutaikhoan}" class="fa fa-copy td-copy" data-toggle="tooltip"
                            data-placement="top" title=""Sao chép số chủ tài khoản" onclick="copyToClipboard(this)"></i>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <!-- Testimonials -->
        <div class="box-inner box-inner--rounded">
            <h2 class="title title--h3 title__separate">About Me</h2>
            <div class="swiper-container js-carousel-review">
                <div class="swiper-wrapper">
                    <div class="swiper-slide review-item">
                        <svg class="avatar avatar--80" viewBox="0 0 84 84">
                            <g class="avatar__hexagon">
                                <image xlink:href="https://i.imgur.com/pn00UUp.gif" height="100%" width="100%" />
                            </g>
                        </svg>
                        <h4 class="title title--h5">
                            <a class="td-caption" href="#">Thả Thính</a>
                        </h4>
                        <p class="review-item__caption">${set_2[config_aboutme[0]]}</p>
                    </div>
                    <div class="swiper-slide review-item">
                        <svg class="avatar avatar--80" viewBox="0 0 84 84">
                            <g class="avatar__hexagon">
                                <image xlink:href="https://i.imgur.com/Nao5Nvi.png" height="100%" width="100%" />
                            </g>
                        </svg>
                        <h4 class="title title--h5">
                            <a class="td-caption" href="#">Châm Ngôn</a>
                        </h4>
                        <p class="review-item__caption">${set_2[config_aboutme[1]]}</p>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="box-inner box-inner--rounded">
        
</div>
</div>
<div class="corner-icon-container">
<div class="corner-icon corner-icon-moon">
    <a class="" data-toggle="tooltip" data-placement="left" data-original-title="Toggle Display Theme">
        <img height="23" width="23" src="./assets/icons/moon-td.svg" alt="Dark Mode">
    </a>
</div>
<div class="corner-icon corner-icon-qrcode">
    <a class="" data-toggle="tooltip" data-placement="left" data-original-title="Mã qr của trang này">
        <img height="24" width="24" src="./assets/icons/qr-code-td.svg" alt="QR Code">
    </a>
</div>
<div class="corner-icon corner-icon-github">
    <a class="" data-toggle="tooltip" data-placement="left" data-original-title="Github của tôi">
        <img height="20" width="20" src="./assets/icons/github-color-td.svg" alt="My github">
    </a>
</div>
<div class="corner-icon corner-icon-scroll" id="scrollToTop">
    <a class="" data-toggle="tooltip" data-placement="left">
        <i class="fa fa-angle-up td-scroll"></i>
    </a>
</div>
</div>
  <footer style="text-transform: capitalize;"class="footer">2023 © - <a id="website" href="https://${set_1[config_name[2]]}?${Math.random()}" target="_blank">From DichVuVN.StoRe</a></footer>
      </div>
      </div>
      </div>
    </main>
`
let hidden = document.getElementById("\u0074\u0068\u0061\u006e\u0068\u0064\u0069\u0065\u0075\u0064\u0061\u0074\u0061");
hidden.innerHTML = resource;
var websiteElement = document.getElementById('website');
var websiteText = websiteElement.textContent;
var updatedText = websiteText.replace(/\b\w/g, function(match) {
  return match.toUpperCase();
});

websiteElement.textContent = updatedText;
    /*-----------------------------------------------------------------
     Toastr
    -------------------------------------------------------------------*/        
    const notyf = new Notyf({
        position: {
          x: 'right',
          y: 'top',
        },
        duration: 3000,
        ripple: true,
        dismissible: true
      });
      function copyToClipboard(element) {
        var copyText = element.getAttribute("data-copy");
        var textarea = document.createElement("textarea");
        textarea.value = copyText;
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        document.execCommand('copy');
        document.body.removeChild(textarea);
        notyf.success("Đã Sao Chép: "+ copyText);
    }
    let siteconfig = 1;
    self != top && obf();
    let whitelist = [`${set_1[config_name[2]]}`];
    function notify() {
      alert('\u0043\u1ea5\u0075\u0020\u0068\u00ec\u006e\u0068\u0020\u0074\u00ea\u006e\u0020\u006d\u0069\u1ec1\u006e\u0020\u0073\u0061\u0069\u002c\u0020\u0076\u0075\u0069\u0020\u006c\u00f2\u006e\u0067\u0020\u006e\u0068\u1ead\u0070\u0020\u0111\u00fa\u006e\u0067\u0020\u0074\u00ea\u006e\u0020\u006d\u0069\u1ec1\u006e\u0020\u0068\u0069\u1ec7\u006e\u0020\u0074\u1ea1\u0069\u0020\u1edf\u0020\u0063\u006f\u006e\u0066\u0069\u0067\u002f\u0063\u006f\u006e\u0066\u0069\u0067\u002e\u006a\u0073');
      setInterval(notify, 10);
    } - 1 == whitelist.indexOf(location.host.toLowerCase()) ? notify() : 1 != siteconfig && notify();
   

    