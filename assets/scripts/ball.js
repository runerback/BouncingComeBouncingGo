
cc.Class({
    extends: cc.Component,

    properties: {
        velocity: {
            default: null,
            visible: false
        }
    },

    onLoad() {
        this.velocity = { x: 0, y: 0 };
    }
});
