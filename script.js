$(document).ready(function() {
    function showTime() {
        // to get current time/date
        let date = new Date();

        //Make Vairables to get hours, minute and second
        let hours = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        //AM, PM Setting.
        let session = 'AM';

        //Conditions for time behavior.
        if(hours == 0){
            hours = 12;
        };

        if(hours >= 12){
            session = 'PM';
        };

        if(hours > 12){
            hours = hours - 12;
        };

        hours = hours < 10 ? "0" + hours : hours;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        //Set the variable to span.
        $('#hrs').text(hours);
        $('#min').text(min);
        $('#sec').text(sec);
        $('#period').text(session);

        //to change time in every second.
        setTimeout(showTime, 1000);
    };
    showTime();
});