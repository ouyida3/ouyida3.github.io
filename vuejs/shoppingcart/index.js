var app = new Vue({
    el: '#app',
    data: {
        // list是一个数组
        list: [
            // id等不需要引号
            { id: 1, name: 'iphone XS', price: 6599, count: 1 },
            { id: 2, name: 'iphone XR', price: 4399, count: 1 },
            { id: 3, name: 'iphone XS Max', price: 7499, count: 1 }
        ]
    },
    computed: {
        totalPrice: function () {
            return this.list[0].price * this.list[0].count;
        }
    },
    methods: {
        // 方法定义用：号，不能用=号
        handleAdd: function (index) {
            this.list[index].count++;
        },// 方法之间必须有逗号分隔
        handleReduce: function (index) {
            if (this.list[index].count > 0)
                this.list[index].count--;
        },
        handleRemove: function (index) {
            // js的spilce函数：(start: number, deleteCount?: number)，vscode会提示详细解释。
            this.list.splice(index, 1);
        }
    }
})