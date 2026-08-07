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


const result = topRatedRestaurant('tmr')
console.log(result)