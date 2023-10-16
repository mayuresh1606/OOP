function Circle(radius){
    this.radius = radius

    let defaultLocation = {x: 0, y: 0}

    this.getDefaultLocation = function (){
        return defaultLocation;
    }

    let computeOptimumLocation = function (factor){
        // code here
    }

    this.draw = function (){
        if (defaultLocation.x)
            computeOptimumLocation(1);
        console.log("draw");
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function (){
            return defaultLocation;
        },
        set: function (value){
            if (!value.x || !value.y){
                throw new Error("Invalid Location")
            }
            defaultLocation = value
        }
    })
}

const circle = new Circle(1);
circle.draw()
circle.defaultLocation = 1


function Stopwatch(){
    let state = {
        start: false,
        stop: true
    }
    let counter;
    let seconds = 0;

    this.start = function (){
        if (state.start){
            throw new Error("Stopwatch is already started!")
        }
        function increaseSeconds(){
            seconds++
        }
        counter = setInterval(increaseSeconds, 1000)
        state.start = true
        state.stop = false
    }

    this.stop = function (){
        if (state.stop){
            throw new Error("StopWatch already is in stop state")
        }
        this.duration = seconds
        clearInterval(counter)
        state.start = false
        state.stop = true
    }

    this.reset = function (){
        seconds = 0
    }
    
    Object.defineProperty(this, 'duration', {
        get: function (){
            return seconds;
        }
    })
}

