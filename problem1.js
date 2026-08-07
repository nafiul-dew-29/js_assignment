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

console.log(matchWinner(2,'1'))