

        const savebtn=document.getElementById("save");
        const callbtn=document.getElementById("call");
        const tarea=document.getElementById("viwe");
        const namearea=document.getElementById("name");
        const list=document.getElementById("list");
        const del=document.getElementById("delete");

        window.onload=function DATALOAD(){
            var datacount=localStorage.length;

            console.log(datacount);
            switch(datacount){
                case 0:
                console.log("no data...");
                document.getElementById("t").innerHTML="記録がありません。";
            break;

                default:

                document.getElementById("t").innerHTML="メモリスト(↓クリックして表示)";

                for(let step = 0; step < datacount; step++){

                var calling =localStorage.key(step);

                console.log(calling);

                // stepが変化するため、それに応じてliを作ってくれる関数。きっとサイトに乗っけた人には意図があるのだろうが、なぜこんなにくどいのかは理解できなかった。(いちいちconstにすると何がいいのか？)
                const make =document.createElement("li");

                list.appendChild(make);

                make.id=step;

                document.getElementById(step).innerHTML=calling;

                document.getElementById(step).onclick=function call(){

                    var aaa= document.getElementById(step).textContent;

                    namearea.value=aaa;


                    const dataname=namearea.value;

                            var calldata=localStorage.getItem(dataname);

                            console.log(calldata);

                            tarea.value=calldata;

                            }

                }
            }
        }

        savebtn.onclick=function SAVE(){
            
            var result = window.confirm("上書き保存しますか？");

            if( result ) {
                console.log("OKがクリックされました");

                const data=tarea.value;
                console.log(data);

                        const dataname=namearea.value;
                        console.log(dataname);

                        localStorage.setItem(dataname,data);

                        var calldata=localStorage.getItem(dataname);

                    
                        console.log(calldata);

                        console.log("保存完了");

                        location.reload();
                        // 保存完了時に元の画面に戻る。⌘R的な

            }
            else{
                console.log("キャンセルがクリックされました");
            }
        }

        callbtn.onclick=function DATACALL(){

            tarea.value="";
            namearea.value="";
        }

        del.onclick=function DELETE(){

            var result = window.confirm("削除しますか？");

            if( result ){
                console.log('OKがクリックされました');

                const dnn=namearea.value;

                localStorage.removeItem(dnn);

                location.reload();
            }else{
                console.lot("キャンセル");
            }

// ショートカットキーを追加したかった...
// コピペしてみても動かず、なぜダメなのか？が未解決
	$(function() {
 
		shortcut.add("Ctrl+Enter",function() {
			$("#save").click();
		});
		 
	});

        }
