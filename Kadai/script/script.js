new Vue({
    el: '#app',
    data() {
        return {
            count: 0,         // 現在の数
            inNumber: 0       // 計算用の数
        };
    },
    methods: {
        tasu() {
            this.count += this.inNumber;
            this.imageChange();
        },
        hiku() {
            this.count -= this.inNumber;
            this.imageChange();
        },
        kakeru() {
            this.count *= this.inNumber;
            this.imageChange();
        },
        waru() {
            if (this.inNumber !== 0) {
                this.count /= this.inNumber;
            } else {
                alert("0で割ることはできません");
            }
            this.imageChange();
        },
        reset() {
            this.count = 0;
            this.inNumber = 0;
            this.imageChange();
        },
        imageChange() {
            // HTMLから image_area を取得
            const imageArea = document.getElementById('image_area');

            if (this.count === 0) {
                // 現在の数が 0 の場合
                imageArea.innerHTML = '<img src="./img/hime1.jfif" width="300">';
            } else if (this.count % 3 === 0 && this.count % 5 === 0) {
                // 3の倍数かつ5の倍数
                imageArea.innerHTML = '<img src="./img/hime3.png" width="300">';
            } else if (this.count % 3 === 0 || this.count % 5 === 0) {
                // 3の倍数または5の倍数
                imageArea.innerHTML = '<img src="./img/hime2.jfif" width="300">';
            } else {
                // 上記以外
                imageArea.innerHTML = '<img src="./img/hime1.jfif" width="300">';
            }
        }
    }
});
