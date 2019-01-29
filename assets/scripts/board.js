
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
    },

    /**
     * shoot balls with specified angle
     * @param {cc.Vec2} startPos start position of ball
     * @param {number} direction rag of counter-clockwise angle
     * @param {cc.Node} node collision zone
     */
    Shoot(startPos, direction, node) {
        const game = this.game;

        const ballPrefab = game.ballPrefab;
        const velocity = game.velocity * cc.PhysicsManager.PTM_RATIO;
        let ballCount = game.ballCount;

        // const angle = 180 / Math.PI * direction;
        // console.log('direction: ' + angle);

        while(ballCount-- > 0) {
            let ball = cc.instantiate(ballPrefab);
            let body = ball.getComponent(cc.RigidBody);
            body.linearVelocity = cc.v2(
                velocity * Math.cos(direction),
                velocity * Math.sin(direction)
            );
            body.active = true;
            node.addChild(ball);
            ball.setPosition(startPos);
        }
    },

    onCollisionEnter(other, self) {
        console.log('enter: ');
    },

    onCollisionExit(other, self) {
        console.log('exit: ');
    },
});
