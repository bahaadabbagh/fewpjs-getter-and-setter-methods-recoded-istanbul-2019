// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius *2;
    }
    get circumference(){
        return this.radius *Math.PI *2;
    }
    get area(){
        return this.radius *Math.PI **2;
    }
    set diameter(){
        this.radius = diameter/2;
    }
    set circumference(){
        this.radius = circumference / Math.PI / 2;
    }
    set area(){
        this.radius = (area / Math.PI)**2;
    }

}