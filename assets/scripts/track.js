
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad() {
        console.log('track load');
    },
    
    onCollisionEnter(other, self) {
        console.log('floor enter: ' + other);
    },

    onCollisionExit(other, self) {
        console.log('floor exit: ' + other);
    }
});
