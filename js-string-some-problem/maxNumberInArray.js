function getTolestMan(height) {
    let largest = height[0]
    for(i=0;i<height.length;i++){
        const index = i;
        const element = height[index]
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const height = [125,121,1222,100,152,142,174];
const tolest = getTolestMan(height);
console.log(tolest);
