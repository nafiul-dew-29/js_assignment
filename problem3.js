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

console.log(calculateAiCost([40,'10']))

