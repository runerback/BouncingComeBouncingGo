
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad() {
    },

    onCollisionEnter: function (other, self) {
        console.log('ball enter: ' + other);
    },

    onCollisionExit(other, self) {
        console.log('ball exit: ' + other);
    },
});
