var ViewModel = function() {

    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function() {
        this.clickCount(this.clickCount()+1);
    };

}

var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.nicks = ko.observableArray(["Bitmap", "Stupid", "Lumpy"]);

    this.level = ko.computed(function(){
        if(this.clickCount() < 10){
            return("Noob");
        }else if (this.clickCount() < 20) {
            return("IttyBittyKitty");
        };
    }, this);    

}


ko.applyBindings(new ViewModel());
