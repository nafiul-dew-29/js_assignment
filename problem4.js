 function countMentions(post)
    {
        const words = post.split(" ")
        let mentionCount = 0;
        let lonestmention = ""

        for(let word of words)
        {
            if(word.startsWith('@'))
                mentionCount++;

            const long = word.slice(1)
            if(long.length > lonestmention.length)
            {
                lonestmention = long
            }
        }
        const returnOj = {mentincount: mentionCount, lonestmention: lonestmention }
        return returnOj
    }


const result = countMentions('Great workd @alice @bob_the_builder')
console.log(result)
 