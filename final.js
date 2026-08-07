

// Problem 1 — Match Winner
function matchWinner(teamAGoals, teamBGoals) {

    if(typeof teamAGoals !=='number' || typeof teamBGoals !== 'number')
    {
        return 'Invalid'
    }

    if (Array.isArray(teamAGoals) || Array.isArray(teamBGoals))
    {
        return 'Invalid'
    }
    
    if(teamAGoals <= 0 || teamBGoals <= 0)
    {
        return 'Invalid'
    }

    else if( teamAGoals > teamBGoals)
    {
        return 'Team A Won'
    }

    else if ( teamAGoals < teamBGoals)
    {
        return 'Team B Won'
    }

    else if (teamAGoals == teamBGoals)
    {
        return 'Draw'
    }
}

// Problem 2 — Elevator Weight Safety Checker

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

// Problem 3 — AI Token Cost Calculator

function calculateAiCost(tokensUsed) {
 if(typeof tokensUsed !== 'number' || tokensUsed <= 0 || Array.isArray(tokensUsed) ||typeof tokensUsed === 'string' || typeof tokensUsed ==='object')
 {
    return 'Invalid'
 }
 
 if(tokensUsed <= 500)
 {
    return 0;
 }

 else if ( tokensUsed > 500)
 {
    let extraTokenUsed = tokensUsed - 500;
    let newTokenCredit = Math.floor(extraTokenUsed / 100);
    let newTokenPrice = newTokenCredit * 5;
    return newTokenPrice
 }
}

// Problem 4 — Top Rated Restaurant Finder

function topRatedRestaurant(restaurants) {
    if(!Array.isArray(restaurants) || typeof restaurants == 'string' || restaurants.length == 0)
    {
        return 'Invalid'
    }
    
    let topRating = restaurants[0]

    for(let rest of restaurants)
    {
        if(rest.rating > topRating.rating)
        {
            topRating = rest;

        }
    }

    return topRating.name.toUpperCase()
}

// Problem 5 —Debugging Challenge: API Response Time Monitor

function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
        return "Invalid";
   }
   
   if (times.length === 0) {
        return "Invalid";
    }

    if(typeof  times =='string')
    {
        return 'Invalid'
    }
   
 let total = 0;

    for (let i = 0; i < times.length; i++) {

        if(typeof  times[i] !== 'number')
        {
            return 'Invalid'
        }
        total = total + times[i];
    }
   
  return Math.floor(total / times.length)
}





