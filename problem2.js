function isElevatorSafe(weights) {
  
    let sum = 0;

    if(!Array.isArray(weights))
    {
        return 'Invalid'
    }

    for(let i=0; i<weights.length; i++)
    {
        sum = sum + weights[i]
    }

    if(sum <= 400)
    {
        return 'true'
    }

    else if (sum > 400)
    {
        return 'false'
    }


}

const weights = [40,60,47]
const result = isElevatorSafe(weights)

console.log(result)


