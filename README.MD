------ MEMBERS ------------------------------

Clyde Marty A18077480 

-------- GRADER SERVER CREDENTIALS ----------

username: grader
password: abc123xyz456

-------- DOMAIN SITE -------------------------

link: https://cse-135.site 

-------- GITHUB AUTO DEPLOY SETUP ------------

- I initially created a repository for this server, and made live updates using git add, git push, etc. 
- then, I later on utlized git hooks 

--------- COMPRESSION -----------------------

- I noticed than less data was delivered, but the page loaded slightlow slower. 

--------- REMOVING SERVER HEADER -------------

- Apache seemed to have been stubborn and I was having trouble swapping the header. 
- This led me to reading up on nginx, installing it, and moving port 80 and 443 to 8080. 
- This allowed me to configure the server header via nginx config file. 

-------- EXTRA CREDIT ------------------------
