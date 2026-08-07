function topScorer(players) {

  if(!Array.isArray(players) || players.length === 0)
  {
    return 'Invalid'
  }

  let top = players[0]
  
  for(let play of players)
  {
    if(play.points > top.points)
    {
        top=play
    }
  }

  return top.name.toUpperCase()
}

const result = topScorer(
    [
        {name:"Mim",points:12},
        {name:"Tania",points:9}
    ]
)

console.log(result)