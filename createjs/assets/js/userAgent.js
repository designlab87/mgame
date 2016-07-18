var platform = null;
var app = {
    initialize: function() {
        this.bind();
        console.log("initialize bound");
    },
    bind: function() {
        // document.addEventListener('deviceready', this.deviceready, false);
        // console.log("listener bound");
        var ms = this.any();
        var ua = navigator.userAgent.toString();
        if (ms != null) {
            platform = 'mobile';
            $("#status").text("mobile: "+ua+" user agent is mobile, we are in PhoneGap");
            console.log("mobile platform");
            //check for Tablet
            var mst = this.Tablet();
            if (mst != null){
              //do tablet stuffs...
              console.log('This is a tablet');
            }
            else{
              //do phone stuffs...
              console.log('This is a phone');
            }
        } else {
            platform = 'pc';
            $("#status").text("pc: "+ua+" user agent did not match, assuming PC, we are in Chrome App");
            //do PC stuffs...
            console.log('This is a computer');
        }
        console.log("listener bound");
        console.log("user agent is: "+ua);
    },
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    Tablet: function() {
        return navigator.userAgent.match(/Tablet|iPad/i);
    }
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }

}
