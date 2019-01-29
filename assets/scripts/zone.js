
cc.Class({
    extends: cc.Component,

    properties: {
        dash: {
            default: [],
            type: Array,
            visible: true
        }
    },

    getStartPosition() {
        return cc.v2(
            this.board.offset, 
            this.node.y - this.node.height / 2);
    },

    /**
     * get local mouse position
     * @param {cc.Vec2} mousePos global mouse position
     */
    getEndPosition(mousePos) {
        let end = this.node.convertToNodeSpace(mousePos);
        return end.add(cc.v2(-this.node.width / 2, -this.node.height / 2));
    },

    /**
     * draw a line between board and end point
     * @param {cc.Vec2} end end point of line
     */
    drawLine(end) {
        this.destroyLine();

        let start = this.getStartPosition();

        let v = end.sub(start);
        let dist = v.mag();
        let unitV = v.normalize();

        let g = this.node.getComponent(cc.Graphics);

        const dashArray = this.dash;
        const dashCount = dashArray.length;

        let dashIndex = 0;
        let draw = true;

        g.moveTo(start.x, start.y);

        let endV = start;

        while(dist > 0.1) {
            let dashLength = dashArray[dashIndex++ % dashCount];
            if (dashLength > dist) {
                dashLength = dist;
            }

            endV.addSelf(unitV.mul(dashLength));
            if(draw) {
                g.lineTo(endV.x, endV.y);
            } else {
                g.moveTo(endV.x, endV.y);
            }

            dist -= dashLength;
            draw = !draw;
        }

        g.stroke();
    },

    /**
     * destroy last created line
     */
    destroyLine() {
        this.node.getComponent(cc.Graphics).clear();
    },

    onLoad() {
        console.log('zone load');
        
        this.dash = [10, 5];

        this.preShoot = false;
        this.lastLine = null;

        const node = this.node;
        node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this);
    },

    onMouseDown(event) {
        console.log('mouse down');
        if(event.getButton() == cc.Event.EventMouse.BUTTON_LEFT) {
            this.preShoot = true;
            this.drawLine(this.getEndPosition(event.getLocation()));
        }
    },

    onMouseMove(event) {
        if(!this.preShoot) {
            return;
        }
        this.drawLine(this.getEndPosition(event.getLocation()));
    },

    onMouseUp(event) {
        console.log('mouse up');
        if(!this.preShoot) {
            return;
        }

        switch(event.getButton()){
            case cc.Event.EventMouse.BUTTON_LEFT:
                this.preShoot = false;
                this.destroyLine();
                this.onShoot(this.getEndPosition(event.getLocation()));
                break;
            case cc.Event.EventMouse.BUTTON_RIGHT:
                this.preShoot = false;
                this.destroyLine();
                break;
            default:break;
        }
    },

    /**
     * fire shoot command
     * @param {cc.Vec2} end mouse release point respected to node
     */
    onShoot(end) {
        let start = this.getStartPosition();
        let direction = start.angle(end);
        console.log('Shoot: ' + direction.toString());
    },

    onDestroy() {
        this.destroyLine();
    }
});
