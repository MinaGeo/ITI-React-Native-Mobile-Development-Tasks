
var linkedList = {
    data: [],
    pushVal: function(v) {
        v = Number(v);
        var datalen = this.data.length;
        if (datalen === 0 || this.data[datalen - 1].val < v) {
            this.data.push({val: v});
            return true;
        }
        return false;
    },
    popVal: function() {
        var datalen = this.data.length;
        if(datalen>0){
            this.data.pop();
            return true;
        }
        return false;
    },
    unshiftVal: function(v) {
        v = Number(v);
        var datalen = this.data.length;
        if (datalen === 0 || this.data[0].val > v) {
            this.data.unshift({val: v});
            return true;
        }
        return false;
    },
    shiftVal: function() {
        var datalen = this.data.length;
        if (datalen>0) {
            this.data.shift();
            return true;
        }
        return false;
    },
    addByVal: function(v) {
        v = Number(v);
        var datalen = this.data.length;
        var returnFlag = false;
        var largestElementFlag = false;
        for (let i = 0; i < datalen; i++) { //this to avoid adding several numbers
            if (this.data[i].val === v) {
                return returnFlag;
            }
        }
        if (datalen === 0 || v < this.data[0].val) { //this to add the value to the beginning
            returnFlag = this.unshiftVal(v);
            return returnFlag;
        } else {
        for (let i = 0; i < datalen; i++) {
            if (this.data[i].val > v) {
                this.data.splice(i, 0, {val: v});
                returnFlag = true;
                break;
            } else{
                largestElementFlag = true;
            }
        }
        if (largestElementFlag) {
           this.pushVal(v);
           returnFlag = true;
        }
        return returnFlag;
    }
    },
    removeByVal: function(v) {
        v = Number(v);
        var returnFlag = false;
        var datalen = this.data.length;
        
        for (var i = 0; i < datalen; i++) {
            if (this.data[i].val === v) {
                this.data.splice(i, 1);
                returnFlag = true;
                break;  
            }
        }
        return returnFlag;  
    },
    
    printArray: function(){
        return this.data.map(item => item.val).join(', ');
    }

};

// var ll = new linkedList();
function calLinkedList(elem) {
    var operation = elem.value;
    var val = document.getElementById("val").value;
    if (!val && operation !== "pop" && operation !== "shift" && operation !== "showList") {
        document.getElementById("screen").value = "Please enter a value.";
        return;
    }
    
    switch (operation) {
        case "push":
            var answer = linkedList.pushVal(val);
            document.getElementById("screen").value = answer ? "Pushed successfully, current array: " + linkedList.printArray() : "Failed to push.";
            break;
        case "pop":
            var answer = linkedList.popVal();
            document.getElementById("screen").value = answer? "Popped, current array: " + linkedList.printArray() : "Failed to pop.";
            break;
        case "shift":
            var answer = linkedList.shiftVal();
            document.getElementById("screen").value = answer? "Shifted, current array: " + linkedList.printArray() : "Failed to shift.";
            break;
        case "unshift":
            var answer = linkedList.unshiftVal(val);
            document.getElementById("screen").value = answer? "Unshifted, current array: " + linkedList.printArray() : "Failed to unshift.";
            break;
        case "addByVal":
            var answer = linkedList.addByVal(val);
            document.getElementById("screen").value = answer? "Added by value, current array: " + linkedList.printArray(): "Failed to add by value.";
            break;
        case "removeByVal":
            var answer = linkedList.removeByVal(val);
            document.getElementById("screen").value = answer? "Removed by value, current array: " + linkedList.printArray() : "Failed to remove by value.";
            break;
        case "showList":
                document.getElementById("screen").value = "current array: " + linkedList.printArray();
                break;
        default:
            document.getElementById("screen").value = "Unknown operation.";
            break;
    }
}