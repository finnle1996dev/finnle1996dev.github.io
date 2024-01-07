const fullname = set_1[config_name[0]];
const avatar = set_1[config_name[4]];
const zalo = set_1[config_name[3]];
const facebook = set_1[config_name[5]];
 const Wussun_Music=["https://youtu.be/r4Xstoq18gA?si=ekTgZhDxZ3E-mGAV",];let index=Math.floor(Math.random()*Wussun_Music.length);const audio=new Audio(Wussun_Music[index]);function wussunplay(){audio.play()}document.addEventListener("click",wussunplay()),audio.addEventListener("ended",function(){index=(index+1)%Wussun_Music.length,audio.src=Wussun_Music[index],audio.play()});
      window.addEventListener("DOMContentLoaded", function() {
				window.MyNavCard = $MGC({
					icon: `${avatar}`,
					name: `${fullname}`,
					info: "ChÃ o má»«ng Ä‘áº¿n vá»›i profile thÃ´ng tin thanh toÃ¡n,táº¡i Ä‘Ã¢y báº¡n cÃ³ thá»ƒ sao chÃ©p tÃ i khoáº£n ngÃ¢n hÃ ng 1 cÃ¡ch nhanh chÃ³ng",
					z_index: 9999,
					blur: ".main",
					lang: "en-US",
					mini: false,
					darkmode: 2,
					/*
					darkmode: Cháº¿ Ä‘á»™ ban Ä‘Ãªm
					GiÃ¡ trá»‹ máº·c Ä‘á»‹nh: 1
					GiÃ¡ trá»‹ tÃ¹y ch
					0: Táº¯t cháº¿ Ä‘á»™ ban Ä‘Ãªm
					1: Theo dÃµi há»‡ thá»‘ng (náº¿u há»‡ thá»‘ng há»— trá»£ cháº¿ Ä‘á»™ ban Ä‘Ãªm)
					2: Bát cháº¿ Ä‘á»™ ban Ä‘Ãªm tá»« 18h Ä‘áº¿n 6h sÃ¡ng tÃ¹y thái Ä‘iá»ƒm
					3: LuÃ´n á»Ÿ cháº¿ Ä‘á»™ ban Ä‘Ãªm
					*/
					maxWidth: "380px",
					/*
					maxWidth: Chá»™ng tá»‘i Ä‘a
					*/
					fontFamily: "",
				
				
					closeDuration: 15000,
					/*
					closeDuration: Sau khi Ä‘Ã³ng popup, bao lÃ¢u thÃ¬ nÃ³ khÃ´ng cÃ²n hiá»ƒn thá»‹ ná»¯a (ngay cáº£ khi trang Ä‘Æ°á»£c lÃ m má»›i thÃ¬ nÃ³ khÃ´ng cÃ²n hiá»ƒn thá»‹ ná»¯a nhÆ°ng váº«n cÃ³ thá»ƒ má»Ÿ thá»§ cÃ´ng thÃ´ng qua nÃºt mini)
					GiÃ¡ trá»‹ máº·c Ä‘á»‹nh: 60000 (60 giÃ¢y)
					LÆ°u Ã½: closeDuration chá»‰ hoáº¡t Ä‘á»™ng khi defaultClosed Ä‘Æ°á»£c Ä‘áº·t thÃ nh false
					*/
					defaultClosed: false,
				
					defaultLinkIcon: "fa-solid fa-paw",
					fontawesome: {
						"type": "svg",
						"CDN": "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/js/all.min.js"
					},
					iconLinks: [{
						"title": "My Github",
						"icon": "fa-brands fa-github",
					}, {
						"title": "My Blog",
						"icon": "fa-brands fa-instagram"
					},],
					links: [{
						"title": "Contact Facebook",
                        "url": `${facebook.com/iambi1902}`,
						"type": "primary",
						"target": "_blank"
					}, {
						"title": "Contact Zalo",
                        "url": `https://zalo.me/${zalo}`,
                        "type": "primary",
						"target": "_blank"
					},],
				});
			});