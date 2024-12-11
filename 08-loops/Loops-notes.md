# Notes on Loops
- A single execution of a loop is called an *iteration*.
- Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a *boolean* by while.For instance, a shorter way to write while (i != 0) is while (i).
- Curly braces are not required for a single-line body
while(i) alert(i--);
- Inline valuable declaration such as:\
for(let i = 0; i < 3; i++)
 The valuable here is only visible inside the loop.
- We can skip parts e.g.:\
let i = 0;\
for(;i< 5;){\
    i++;
}