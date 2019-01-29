
cc.Class({
    extends: cc.Component,

    properties: {
    },

    updatePosition(offset) {
        this.offset = offset - this.node.width / 2;
        this.node.x = this.offset;
    },

    onLoad() {
        console.log('board load');
        this.offset = 0;
        this.updatePosition(0);
    }
});
