var productList = [
				  '<a href="https://coupa.ng/bOeqI4" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/ce92b5eed8c38aed571908e0b4ea59e6@2x.jpg" alt="제주 삼다수, 500ml, 120개" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOeq49" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/c0ba2c6185c9dd03516c947bd1eec0fd@2x.jpg" alt="곰곰 2020년 소중한 우리 쌀, 10kg, 1개" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOeq83" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/50597a4ab135a830a5c139fd40968abf@2x.jpg" alt="농심 신라면 120g x 5p + 안성탕면 125g x 5p + 얼큰 너구리 120g x 5p + 짜파게티 140g x 5p, 120개" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerhr" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/a3f62fead4ba39e51206fc7078127029@2x.jpg" alt="초코파이하우스 크리스마스 더블베리 60g x 4개 + 오리지날 52g x 4개, 1세트" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerih" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/940d5505eccc0a7ead2e28271c263505@2x.jpg" alt="크리스마스 DIY 기프트 세트, 혼합색상, 1세트" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerkv" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/05d2c142df6c8d39c8757b4c861d50dd@2x.jpg" alt="GAP 인증 해풍맞은 올레길 당도선별 감귤, 3kg, 1개" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerqm" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/6c06c9884141ba257a76e2b67876a1c5@2x.jpg" alt="코디 라벤더 3겹 롤화장지 30 m, 30롤, 3팩" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOersG" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/5cb59b90d7c1de1f6793e1c70ab78b4b@2x.jpg" alt="뉴 코코도르 디퓨저 200ml 2개, 프렌치라벤더" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOervY" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/b32830b1c8a3c1231b301aab17648a63@2x.jpg" alt="케이투세이프티 방한 귀마개 IMW12902, 블랙" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerxT" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/186798dda602d53b7c86db013472898b@2x.jpg" alt="케이투세이프티 스포츠 귀마개, 그레이" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerzv" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/027240ee7adce86783290678e864ecbe@2x.jpg" alt="비트 O2 살균 표백제, 1.2kg, 8개" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerBj" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/02998cff3cee1543a9734ca261ab8b91@2x.jpg" alt="코디 라벤더 3겹 롤화장지 30 m, 30롤, 4팩" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerDQ" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/b7811542e4a9ae39df2570b9e796bd99@2x.jpg" alt="에어레스트 간편세척 아로마 초음파 가습기 AR02" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerGX" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/4d8281137e7a31eb006a88383a8058fd@2x.jpg" alt="핑크퐁 아기상어 워터매직매트:물로콩콩 물로쓱쓱 무한반복 미술놀이, 삼성출판사" width="120" height="240"></a>'
				];

var productIdx = Math.floor(Math.random() * productList.products.length);

var html = "<center>";
html += productList[productIdx];
html += "<p><img src='https://leechanjeung.github.io/test/partner.jpg'></p>";
html += "</center>";

var contentObj = $("#content .inner .entry-content");
var childrenLen = contentObj.children().length;
var hlafObjIdx = Math.ceil(childrenLen/2);
var targetObj;
if (hlafObjIdx <= 10) {
var liLen = $(contentObj).find("ul li").length;
	targetObj = $(contentObj).find("ul li").eq(Math.ceil(liLen/2));
} else {
	targetObj = $(contentObj).children().eq(hlafObjIdx);
}
$(targetObj).after(html);