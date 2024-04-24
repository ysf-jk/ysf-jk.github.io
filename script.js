// ページが読み込まれたとき
window.addEventListener("DOMContentLoaded", async function(){
	try{
		// レスポンス取得処理
		var response = await fetch("head.html");
		if(!response.ok){
			response = await fetch("404.html");
			if(!response.ok){
				throw new Error("ネットワークむり");
			}
		}

		// レスポンス内容をテキストに変換
		var data = await response.text();

		// 挿入
		var tab = document.getElementById("tab");
		tab.innerHTML = data;

		// 画面更新
		position_update();

		// 画像読み込み時の画面更新処理を追加
		var imgs = document.querySelectorAll("img");
		imgs.forEach(function(img){
			img.addEventListener("load", function(){
				position_update();
			});
		});

		// details開閉時の画面更新処理を追加
		var detailses = document.querySelectorAll("details");
		detailses.forEach(function(details){
			details.addEventListener("toggle", function(){
				position_update();
			});
		});

		window.addEventListener("resize", function(){
			position_update();
		});
	}
	catch (error){
		console.error('えらー:', error.message);
	};
});

function position_update(){
	
	// 高さ計算
	var height;
	var copyright = document.getElementById("copyright");
	if(copyright.style.position === "fixed"){
		height = document.body.offsetHeight + 16/*一行の高さ*/ + copyright.offsetHeight;
	}
	else{
		height = document.body.offsetHeight + 16;
	}

	// コピーライトの表示位置設定
	if(height < window.innerHeight){
		// 画面の下に固定表示
		copyright.style.position = "fixed";
		copyright.style.bottom = "0";
	}
	else{
		// 通常
		copyright.style.position = "";
		copyright.style.bottom = "";
	}
}