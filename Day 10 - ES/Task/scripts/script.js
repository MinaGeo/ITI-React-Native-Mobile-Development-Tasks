function displayInfo(op={}) {
    var objKeys = Object.keys(op);
    for (let i in objKeys) {   
        if (objKeys[i] !== "courseName" && objKeys[i] !== "courseDuration" && objKeys[i] !== "courseOwner") {
            return "Incorrect properties.";
        }
    }
    
    var defaultOp = {
        courseName: "Programming",
        courseDuration: "3 months",
        courseOwner: "David Emil"
    };
    
    var newObj = Object.assign({}, defaultOp, op);
    return `course name: ${newObj.courseName}, course duration: ${newObj.courseDuration}, course owner: ${newObj.courseOwner}`;
}

function task1(){
console.log(displayInfo({courseName:"Math"}));
console.log(displayInfo({courseNamee:"Math"}));
console.log(displayInfo({courseName:"science",courseOwner:"Michael nabil"}));
console.log(displayInfo({courseName:"French",courseOwnerr:"Michael nabil"}));
console.log(displayInfo({courseName:"Logic Design",courseOwner:"Ahmed Ibrhaim",courseDuration:"5 months"}));
}

/*--- AJAX ---*/

var xhr = new XMLHttpRequest();

xhr.open("GET","../data/rockbands.json");

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var Data = JSON.parse(xhr.responseText); 
            var bandNames = document.getElementById("bandSel");
            var artistName = document.getElementById("artistSel");

            bandNames.innerHTML = '<option value="">Please select</option>';
            for (let band in Data) {
                let option = document.createElement("option");
                option.value = band;
                let [firstChar, ...rest] = band;
                let optionText = firstChar.toUpperCase() + rest.join('');
                option.text = optionText;
                bandNames.appendChild(option);
            }

            bandNames.onchange = function() {
                const selectedBand = bandNames.value;
                artistName.innerHTML = '<option value="">please select</option>';
                if (selectedBand) {
                    const options = Data[selectedBand].map(artist => 
                        `<option value="${artist.value}">${artist.name}</option>`
                    ).join('');
                
                    artistName.innerHTML += options;
                }
            };

            artistName.onchange = function() {
                const selectedArtistUrl = artistName.value;
                if (selectedArtistUrl) {
                    window.location.href = selectedArtistUrl;
                }
            };
        }
    }
};

function task2(){
xhr.send();
    
}
