I whiteboarded with Kevin Grayson
Please refer to photo for what we did.

Problem domain was that the dashes were replacing just the first letter and not the designated characters properly. The issue was in the . syntax. . was referring this 'this' character, so it was replacing the first character every time. Every character is 'this' character when referred to by dot notation. The first solution was the escape the . character, to tell the regexp to actually grab periods and not anything else. The second problem was that it just did the first ., because the function stops at one. This was solved by adding g at the end of the regexp, in reference to global. 

That solved it.