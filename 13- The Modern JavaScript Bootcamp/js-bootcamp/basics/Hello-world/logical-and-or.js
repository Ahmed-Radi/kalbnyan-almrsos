let isGestOneVegin = true;
let isGestTwoVegin = false;

if( isGestOneVegin && isGest ){
    console.log('Only offer up vegin dishes.')
}else if( isGestOneVegin || isGestTwoVegin ){
    console.log('Make sure to up some vegin options.')
}else {
    console.log('offer up anything on the mune')
}