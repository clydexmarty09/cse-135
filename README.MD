------ MEMBERS ------------------------------

Clyde Marty A18077480 

-------- GRADER SERVER CREDENTIALS ----------

username: grader
password: abc123xyz456

-------- DOMAIN SITE -------------------------

link: https://cse-135.site 

-------- GITHUB AUTO DEPLOY SETUP ------------

- I initially created a repository for this server, and made live updates using git add, git push, etc. 
- then, I later I created an empty repo at /var/repo/cse135.git 
- added a post-receive hook at /var/repo/cse135.git/hooks/post-receive

--------- COMPRESSION -----------------------

- I noticed than less data was delivered, but the page loaded slightly slower. 

--------- REMOVING SERVER HEADER -------------

- Apache seemed to have been stubborn and I was having trouble swapping the header. 
- This led me to reading up on nginx, installing it, and moving Apache to port 8080, and had nginx keeo 80/443
- This allowed me to configure the server header via nginx config file. 
- Nginx trivially sets and clears headers after Apache responds 
- However, I removed nginx afterward because it caused me other problems in other parts of the assignment 

-------- EXTRA CREDIT ------------------------
