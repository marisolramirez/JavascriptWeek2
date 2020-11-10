'use strict';
months = new String[ 12];
        months[ 1 ] = "January";
        months[ 2 ] = "February";
        months[ 3 ] = "March";
        months[ 4 ] = "April";
        months[ 5 ] = "May";
        months[ 6 ] = "June";
        months[ 7 ] = "July";
        months[ 8 ] = "August";
        months[ 9 ] = "September";
        months[ 10 ] = "October";
        months[ 11 ] = "November";
        months[ 12 ] = "December";
        var firstNum = prompt ("pick a number from 1-12 number");
        if(userNumber <= 12){
            console.log(months[userNumber-1]);
        }else if (userNumber >12){
            console.log(none);
        }