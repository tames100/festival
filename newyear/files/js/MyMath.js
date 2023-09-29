// OLD VERSION DO NOT USE
// Older pens still rely on this.

/**
 * MyMath.js
 * -----------
 * Handy math/trig reference.
 * 
 * @Author: Caleb Miller
 *         caleb@caleb-miller.com
 */

const MyMath = (function MyMathFactory(Math) {

    const MyMath = {};


    // degree/radian conversion constants
    MyMath.toDeg = 180 / Math.PI;
    MyMath.toRad = Math.PI / 180;
    MyMath.halfPI = Math.PI / 2;
    MyMath.twoPI = Math.PI * 2;

    // Pythagorean Theorem distance calculation
    MyMath.dist = (width, height) => {
        return Math.sqrt(width * width + height * height);
    };

    // Pythagorean Theorem point distance calculation
    // Same as above, but takes coordinates instead of dimensions.
    MyMath.pointDist = (x1, y1, x2, y2) => {
        const distX = x2 - x1;
        const distY = y2 - y1;
        return Math.sqrt(distX * distX + distY * distY);
    };

    // Returns the angle (in radians) of a 2D vector
    MyMath.angle = (width, height) => (MyMath.halfPI + Math.atan2(height, width));

    // Returns the angle (in radians) between two points
    // Same as above, but takes coordinates instead of dimensions.
    MyMath.pointAngle = (x1, y1, x2, y2) => (MyMath.halfPI + Math.atan2(y2 - y1, x2 - x1));

    // Splits a speed vector into x and y components (angle needs to be in radians)
    // 将速度矢量拆分为 x 和 y 分量（角度需要以弧度为单位）
    MyMath.splitVector = (speed, angle) => ({
        x: Math.sin(angle) * speed,
        y: -Math.cos(angle) * speed
    });

    // Generates a random number between min (inclusive) and max (exclusive)
    // 生成介于最小值（含）和最大值（不包括）之间的随机数
    MyMath.random = (min, max) => Math.random() * (max - min) + min;

    // Generates a random integer between and possibly including min and max values
    // 生成一个介于最小值和最大值之间并可能包括
    MyMath.randomInt = (min, max) => ((Math.random() * (max - min + 1)) | 0) + min;

    // Returns a random element from an array, or simply the set of provided arguments when called
    // 从数组中返回一个随机元素，或者只是在调用时返回提供的参数集
    MyMath.randomChoice = function randomChoice(choices) {
        if (arguments.length === 1 && Array.isArray(choices)) {
            return choices[(Math.random() * choices.length) | 0];
        }
        return arguments[(Math.random() * arguments.length) | 0];
    };

    // Clamps a number between min and max values
    // 夹紧最小值和最大值之间的数字
    MyMath.clamp = function clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    };


    return MyMath;

})(Math);