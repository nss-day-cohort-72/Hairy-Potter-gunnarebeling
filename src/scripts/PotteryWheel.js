let currentId = 1
export const makePottery = (shape,weight,height) => {
    
    
        
    
    

    let pot = {
        id: currentId,
        shape: shape,
        weight: weight,
        height:height
    };
    currentId += 1;
    return pot

}