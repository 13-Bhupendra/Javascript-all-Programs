let series = [1 ,5 ,9 ,74 ,25 ,14]
let number = series[0];
let count = series;

for(let i=0; i<series.length; i++)
{
    series[1] ++;

    if(series[i] < number)
    {
        number = series[i]
    }
    document.write(number)

}
