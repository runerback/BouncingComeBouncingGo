
cc.Class({
    extends: cc.Component,

    properties: {
    },
    
    onLoad() {
        let c = this.node.getComponent(cc.BoxCollider);
        c.enabled = true;
    },

    onCollisionEnter: function (other, self) {
        console.log('enter: ');
    },

    onCollisionExit(other, self) {
        console.log('exit: ');
    },
});
