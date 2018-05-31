class Graph extends Chart {
  constructor(id, time) {    
    var now = new Date();
    now = now.toLocaleTimeString();
    now = now.slice(0, 5);
    
    var config = {
      //グラフの種類
      type: 'line',
      //データの設定
      data: {
        //データ項目のラベル
        labels: [now],
        //データセット
        datasets: [
          {
            //凡例
            label: "+1",
            //面の表示
            fill: false,
            //線のカーブ
            lineTension: 0,
            //背景色
            backgroundColor: "rgba(179,181,198,0.2)",
            //枠線の色
            borderColor: "#ff6384",
            //結合点の枠線の色
            pointBorderColor: "rgba(179,181,198,1)",
            //結合点の背景色
            pointBackgroundColor: "#fff",
            //結合点のサイズ
            pointRadius: 5,
            //結合点のサイズ（ホバーしたとき）
            pointHoverRadius: 8,
            //結合点の背景色（ホバーしたとき）
            pointHoverBackgroundColor: "rgba(179,181,198,1)",
            //結合点の枠線の色（ホバーしたとき）
            pointHoverBorderColor: "rgba(220,220,220,1)",
            //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
            pointHitRadius: 15,
            //グラフのデータ
            data: [0]
        },
          {
            //凡例
            label: "-1",
            //面の表示
            fill: false,
            //線のカーブ
            lineTension: 0,
            //背景色
            backgroundColor: "rgba(75,192,192,0.4)",
            //枠線の色
            borderColor: "#36a2eb",
            //結合点の枠線の色
            pointBorderColor: "rgba(75,192,192,1)",
            //結合点の背景色
            pointBackgroundColor: "#fff",
            //結合点のサイズ
            pointRadius: 5,
            //結合点のサイズ（ホバーしたとき）
            pointHoverRadius: 8,
            //結合点の背景色（ホバーしたとき）
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            //結合点の枠線の色（ホバーしたとき）
            pointHoverBorderColor: "rgba(220,220,220,1)",
            //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
            pointHitRadius: 10,
            //グラフのデータ
            data: []
        }
      ]
      },
      //オプションの設定
      options: {
        //軸の設定
        scales: {
          //縦軸の設定
          yAxes: [{
            //目盛りの設定
            ticks: {
              //最小値を0にする
              beginAtZero: true
            }
        }]
        },
        //ホバーの設定
        hover: {
          //ホバー時の動作（single, label, dataset）
          mode: 'single'
        }
      }
    }
    
    // canvasを読み込む
    var canvas = document.getElementById(id);
    super(canvas.getContext('2d'), config);
    
    // タイマーを開始
    this.time = time;
    this.timer()
  }
  add(lineId) {
    // 一番新しい要素に1を加算する
    var index = graph.data.datasets[lineId].data.length - 1;
    this.data.datasets[lineId].data[index] ++;
    this.update();
  }
  
  chop() {
    // ラベルを足す
    var time = new Date();
    time = time.toLocaleTimeString();
    time = time.slice(0, 5);
    this.data.labels.push(time);
    
    // ゼロ埋めをする
    var lineId = 0;
    var index = this.data.labels.length - 1;
    if (this.data.datasets[lineId].data[index] == undefined) {
      this.data.datasets[lineId].data[index] = 0;
    }
    lineId = 1;
    index = this.data.labels.length - 1;
    if (this.data.datasets[lineId].data[index] == undefined) {
      this.data.datasets[lineId].data[index] = 0;
    }
    
    this.update();
  }
  
  timer() {
    // 値を計算する
    this.chop();
    
    var self = this;
    setInterval(
      () => {
        self.chop();
      }, self.time * 1000);
  }
}


var graph = new Graph("graph", 10);
