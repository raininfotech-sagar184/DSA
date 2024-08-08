function fib(n) {
    if (n <= 2) return 1;
    var fibNums = [0, 1, 1];
    for (var i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}
// Time Complexity O(2^N) 
 
function memoized_fib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n]
    if (n <= 2) return 1;
    var res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return res;
}
// Time Complexity O(N)

function memoized_fib2(n, memo = []) {
    if (n <= 0) return 0;
    if (n <= 2) return n;
    if (memo[n] > 0) return memo[n];
    memo[n] = memoized_fib(n - 1, memo) + memoized_fib(n - 2, memo);
    return memo[n];
} 
// Time Complexity O(N)