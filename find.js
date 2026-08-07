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

const value = [100,234,200];
const result = averageResponseTime(value)
console.log(result)

