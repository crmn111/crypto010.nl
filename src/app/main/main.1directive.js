(function () {
    angular.module('crypto010').directive('countdown', [
        'Util',
        '$interval',
        function (Util, $interval) {
            return {
                restrict: 'A',
                scope: {
                    date: '@',
                    onReadyCallback: '&'
                },
                link: function (scope, element) {
                    var now, future, countdown, diff, interval, days, hours, minutes, seconds;
                    future = new Date(scope.date);
                    now = new Date();

                    if(now > future) {
                        return scope.onReadyCallback();
                    } else {
                        interval = $interval(function () {

                            diff = Math.floor((future.getTime() - new Date().getTime()) / 1000);

                            countdown = Util.dhms(diff);

                            days = countdown[0];
                            hours = countdown[1];
                            minutes = countdown[2];
                            seconds = countdown[3];

                            element.find('.days').text(days);
                            element.find('.hours').text(hours);
                            element.find('.minutes').text(minutes);
                            element.find('.seconds').text(seconds);

                            if(days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                                $interval.cancel(interval);
                                return scope.onReadyCallback();
                            }

                            return;

                        }, 1000);

                    }
                }
            };
        }
    ]).factory('Util', [function () {
        return {
            dhms: function (t) {
                var days, hours, minutes, seconds;
                days = Math.floor(t / 86400);
                t -= days * 86400;
                hours = Math.floor(t / 3600) % 24;
                t -= hours * 3600;
                minutes = Math.floor(t / 60) % 60;
                t -= minutes * 60;
                seconds = t % 60;
                return [
                    days,
                    hours,
                    minutes,
                    seconds
                ];
            }
        };
    }]);
}.call(this));