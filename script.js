// 計算ボタンが押されるまで待機する
document.getElementById('calcBtn').addEventListener('click', function() {
    // 変数を取得する
    const priceA = document.getElementById('priceA').value;
    const capacityA = document.getElementById('capacityA').value;
    const priceB = document.getElementById('priceB').value;
    const capacityB = document.getElementById('capacityB').value;

    // 単位あたりの単価を計算する (容量 ÷ 価格)
    const unitpriceA = priceA / capacityA;
    const unitpriceB = priceB / capacityB;

    // どちらが安いかを比較する
    let msg = "";

    if (unitpriceA < unitpriceB) {
        msg = "【商品A】の方がお得です！\n";
    } else if (unitpriceB < unitpriceA) {
        msg = "【商品B】の方がお得です！\n";
    } else {
        msg = "同じ値段です！\n"
    }

    // 単位あたりの値段を小数点第2位まで表示する
    msg += "商品 A : 単位あたり" + unitpriceA.toFixed(2) + "円\n" + "商品 B : 単位あたり" + unitpriceB.toFixed(2) + "円\n";

    // 結果を表示する
    document.getElementById('result').innerText = msg;
});
