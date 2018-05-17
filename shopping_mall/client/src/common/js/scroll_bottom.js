var scroll_bottom = {
    flag: true,
    test: function(callback) {
        let self = this;
        window.onscroll = function() {　　

            // console.log('滚动', self.getScrollTop() + self.getWindowHeight(), self.getScrollHeight())
            if (Math.abs(self.getScrollTop() + self.getWindowHeight() - self.getScrollHeight()) > 10) {
                self.flag = true;
            }

            if (!self.flag) return;

            if (Math.abs(self.getScrollTop() + self.getWindowHeight() - self.getScrollHeight()) <= 10) {　　
                console.log('滚动到底部')　
                self.flag = false;　
                callback();
            }
        };
    },
    //滚动条在Y轴上的滚动距离
    getScrollTop: function() {
        var scrollTop = 0,
            bodyScrollTop = 0,
            documentScrollTop = 0;　　
        if (document.body) {　　　　 bodyScrollTop = document.body.scrollTop;　　 }　　
        if (document.documentElement) {　　　　 documentScrollTop = document.documentElement.scrollTop;　　 }　　
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;　　
        return scrollTop;
    },
    //文档的总高度
    getScrollHeight: function() {
        var scrollHeight = 0,
            bodyScrollHeight = 0,
            documentScrollHeight = 0;　　
        if (document.body) {　　　　 bodyScrollHeight = document.body.scrollHeight;　　 }　　
        if (document.documentElement) {　　　　 documentScrollHeight = document.documentElement.scrollHeight;　　 }　　
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;　　
        return scrollHeight;
    },
    //浏览器视口的高度
    getWindowHeight: function() {
        var windowHeight = 0;　　
        if (document.compatMode == "CSS1Compat") {　　　　 windowHeight = document.documentElement.clientHeight;　　 } else {　　　　 windowHeight = document.body.clientHeight;　　 }　　
        return windowHeight;
    }
}

export default scroll_bottom;