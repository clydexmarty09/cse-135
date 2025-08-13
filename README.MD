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


—----- LOG IN CREDENTIALS —--------------

username: grader
password: xylophoneDestroyer07


--------- COMPRESSION -----------------------

- I noticed than less data was delivered, but the page loaded slightly slower. 

--------- REMOVING SERVER HEADER -------------

- Apache seemed to have been stubborn and I was having trouble swapping the header. 
- This led me to reading up on nginx, installing it, and moving Apache to port 8080, and had nginx keeo 80/443
- This allowed me to configure the server header via nginx config file. 
- Nginx trivially sets and clears headers after Apache responds 
- However, I removed nginx afterward because it caused me other problems in other parts of the assignment 

-------- EXTRA CREDIT ------------------------
1) Matamo - utilized this website: https://www.digitalocean.com/community/tutorials/how-to-install-matomo-web-analytics-on-ubuntu-20-04

- installed docker 
- followed instructions on website to run matomo with docker compose 
- install and set up nginx
NOTE: Attempted but got stuck :( I could not get the matomo site to show 
