var productList = [
				  '<a href="https://coupa.ng/bOeqI4" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/ce92b5eed8c38aed571908e0b4ea59e6@2x.jpg" alt="���� ��ټ�, 500ml, 120��" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOeq49" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/c0ba2c6185c9dd03516c947bd1eec0fd@2x.jpg" alt="���� 2020�� ������ �츮 ��, 10kg, 1��" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOeq83" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/50597a4ab135a830a5c139fd40968abf@2x.jpg" alt="��� �Ŷ�� 120g x 5p + �ȼ����� 125g x 5p + ��ū �ʱ��� 120g x 5p + ¥�İ�Ƽ 140g x 5p, 120��" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerhr" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/a3f62fead4ba39e51206fc7078127029@2x.jpg" alt="���������Ͽ콺 ũ�������� ������ 60g x 4�� + �������� 52g x 4��, 1��Ʈ" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerih" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/940d5505eccc0a7ead2e28271c263505@2x.jpg" alt="ũ�������� DIY ����Ʈ ��Ʈ, ȥ�ջ���, 1��Ʈ" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerkv" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/05d2c142df6c8d39c8757b4c861d50dd@2x.jpg" alt="GAP ���� ��ǳ���� �÷��� �絵���� ����, 3kg, 1��" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerqm" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/6c06c9884141ba257a76e2b67876a1c5@2x.jpg" alt="�ڵ� �󺥴� 3�� ��ȭ���� 30 m, 30��, 3��" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOersG" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/5cb59b90d7c1de1f6793e1c70ab78b4b@2x.jpg" alt="�� ���ڵ��� ��ǻ�� 200ml 2��, ����ġ�󺥴�" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOervY" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/b32830b1c8a3c1231b301aab17648a63@2x.jpg" alt="������������Ƽ ���� �͸��� IMW12902, ��" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerxT" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/186798dda602d53b7c86db013472898b@2x.jpg" alt="������������Ƽ ������ �͸���, �׷���" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerzv" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/027240ee7adce86783290678e864ecbe@2x.jpg" alt="��Ʈ O2 ��� ǥ����, 1.2kg, 8��" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerBj" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/02998cff3cee1543a9734ca261ab8b91@2x.jpg" alt="�ڵ� �󺥴� 3�� ��ȭ���� 30 m, 30��, 4��" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerDQ" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/b7811542e4a9ae39df2570b9e796bd99@2x.jpg" alt="�����Ʈ ����ô �Ʒθ� ������ ������ AR02" width="120" height="240"></a>'
				, '<a href="https://coupa.ng/bOerGX" target="_blank"><img src="https://static.coupangcdn.com/image/affiliate/banner/4d8281137e7a31eb006a88383a8058fd@2x.jpg" alt="��ũ�� �Ʊ��� ���͸�����Ʈ:�������� ���ξ��� ���ѹݺ� �̼�����, �Ｚ���ǻ�" width="120" height="240"></a>'
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