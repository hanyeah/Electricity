/**
 * Created by hanyeah on 2019/8/12.
 */
var hanyeah;
(function (hanyeah) {
    var electricity;
    (function (electricity) {
        var HObject = /** @class */ (function () {
            function HObject() {
                this.UID = HObject.TIME + (HObject.COUNTING++);
            }
            HObject.prototype.destroy = function () {
                //
            };
            HObject.COUNTING = 1;
            HObject.TIME = 0; // new Date().getTime();
            return HObject;
        }());
        electricity.HObject = HObject;
    })(electricity = hanyeah.electricity || (hanyeah.electricity = {}));
})(hanyeah || (hanyeah = {}));
