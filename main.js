//https://teachablemachine.withgoogle.com/models/DBZ2mjRbF/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fjv2IxJgt/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

var dog = 0
var cat = 0


function gotResults(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Dectected Voice is of - '+ results[0].label;
       
        document.getElementById("result_confidence").innerHTML = 'Dectected Dog - '+ dog + ' Dectected Cat - '+ cat;
        
       
        document.getElementById("result_label").stylecolor="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("ear")

        if(results[0].label == "Barking"){
           img.src = "dog.png"
           dog = dog + 1;
        } else if(results[0].label == "Meowing"){
                img.src = "cat.png"
                cat = cat + 1;
        } else{
            img.src = "ear.png";
        }
    }
}