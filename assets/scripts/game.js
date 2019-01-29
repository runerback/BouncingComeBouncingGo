
cc.Class({
    extends: cc.Component,

    properties: {
        ballPrefab: {
            default: null,
            type: cc.Prefab
        },
        collisionZone: {
            default: null,
            type: cc.Node
        },
        board: {
            default: null,
            type: cc.Node
        },
        track: {
            default: null,
            type: cc.Node
        },
        ballCount: 0,
        score: 0,
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        velocity: 0,
        gravity: 0
    },

    onLoad() {
        console.log('game load');

        this.ballCount = 1;
        this.score = 0;

        if(this.velocity == 0) {
            this.velocity = 1;
        }

        if(this.gravity == 0) {
            this.gravity = 1.025;
        }

        let trackNode = this.track;
        let track = trackNode.getComponent('track');
        track.bound = trackNode.position.Y;

        let boardNode = this.board;
        let board = boardNode.getComponent('board');

        this.collisionZone.getComponent('zone').board = board;

        board.game = this;

        const managerP = cc.director.getPhysicsManager();
        managerP.gravity = cc.v2(0, -this.gravity);
        managerP.enabled = true;
        
        const managerC = cc.director.getCollisionManager();
        managerC.enabled = true;
    },

    // gainScore() {
    //     this.score += 1;
    //     this.scoreDisplay.string = 'score: ' + this.score.toString();
    // },

    onCollisionEnter(other, self) {
        console.log('enter: ');
    },

    onCollisionExit(other, self) {
        console.log('exit: ');
    },
});
