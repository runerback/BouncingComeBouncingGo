
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
    },

    onLoad() {
        console.log('game load');

        this.ballCount = 1;
        this.score = 0;

        let trackNode = this.track;
        let track = trackNode.getComponent('track');
        track.bound = trackNode.position.Y;

        let boardNode = this.board;
        let board = boardNode.getComponent('board');

        this.collisionZone.getComponent('zone').board = board;

        // let manager = cc.director.getCollisionManager();
        // manager.enabled = true;
        // manager.enabledDebugDraw = true;
    },

    // gainScore() {
    //     this.score += 1;
    //     this.scoreDisplay.string = 'score: ' + this.score.toString();
    // },

    // onCollisionEnter(other, self) {
    //     console.log('enter: ' + other);
    // },

    // onCollisionExit(other, self) {
    //     console.log('exit: ' + other);
    // }
});
