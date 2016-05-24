/**
 * 用户自定义脚本.
 */
(function(window, Object, undefined) {

/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

var FrameAnimaton = qc.defineBehaviour('qc.demo.FrameAnimaton', qc.Behaviour, function() {
}, {
});

FrameAnimaton.prototype.awake = function() {
    var self = this,
        sprite = self.gameObject;

    console.log('Animations', sprite.animationNameList);
    console.log('Animation Type', sprite.animationType === qc.Sprite.FRAME_ANIMATION);
    console.log('Default Animation', sprite.defaultAnimation);
};

FrameAnimaton.prototype.onClick = function() {
    if (this.gameObject.isPlaying) {
        console.log('Stop playing.');
        this.gameObject.stop();
    }
    else {
        console.log('Play');
        this.gameObject.playAnimation('run', 1, true);
    }
};

FrameAnimaton.prototype.update = function() {
    console.log('Frame', this.gameObject.frame);
};

/**
 * @author weism
 * copyright 2015 Qcplay All Rights Reserved.
 */

var PauseBtn = qc.defineBehaviour('qc.demo.PauseBtn', qc.Behaviour, function() {
    this.sprite = null;
}, {
    sprite: qc.Serializer.NODE
});

PauseBtn.prototype.onClick = function() {
    this.sprite.paused = !this.sprite.paused;
};


}).call(this, this, Object);
