var index = 0;

function changeColor(){
    var colors = ["red","green","blue","orange","pink","green","white"];

    document.getElementsByTagName("body")[0].style.background=colors[index++];

    if(index > colors.length-1)
    index=0;
}