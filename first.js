function mulsum(A)
{
    var sum = 0;
    var length = A.length;
    var N = 4;
    for(var i = 0; i < length; i++)
    {
        if (A[i] % N == 0)
        {
            sum = sum + A[i];
        }
    }
    return sum;
}

 
// Driver Code
 
// Given arr[]
var A = [ -6, -91, 1011, -100, 84, -22, 0, 1, 473 ];

 

console.log(mulsum(A));