var players=[
    {name:"sunilgavasker",debue:1974,retired:1987,runs:10122},
    {name:"gautamgambhir",debue:1999,retired:2008,runs:4154},
    {name:"virendersehwag",debue:2001,retired:2013,runs:8586},
    {name:"rahuldravid",debue:1996,retired:2012,runs:13288},
    {name:"vvslaxman",debue:1996,retired:2012,runs:8781},
    {name:"yuvrajsingh",debue:2003,retired:2012,runs:1900},
    {name:"sureshraina",debue:2010,retired:2015,runs:768},
    {name:"pathan",debue:2003,retired:2008,runs:1105}
]
//print all playername uppercase
// players.forEach(player=>console.log(player.name.toUpperCase())) 



//print all playername who have experience more than 8 years
// players.filter(player=>player.retired-player.debue>=8).forEach(player=>console.log(player.name))




//find the player who scored highest runs in his account

var runs=players.map(player=>player.runs).reduce((runs1,runs2)=>runs1>runs2?runs1:runs2)
players.filter(player=>player.runs==runs).forEach(player=>console.log(player.name))

console.log(runs)