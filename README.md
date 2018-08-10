# ouyida3.github.io
ouyida3 blog

# step
```
DannideMacBook-Pro:git danni$ git --version
git version 2.14.3 (Apple Git-98)
DannideMacBook-Pro:git danni$ pwd
/Users/danni/work/svn/git
DannideMacBook-Pro:git danni$ git init
Initialized empty Git repository in /Users/danni/work/svn/git/.git/
DannideMacBook-Pro:git danni$ ls -a
.	..	.git
DannideMacBook-Pro:git danni$ git clone https://github.com/ouyida3/ouyida3.github.io
Cloning into 'ouyida3.github.io'...
remote: Counting objects: 141, done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 141 (delta 25), reused 18 (delta 18), pack-reused 115
Receiving objects: 100% (141/141), 521.19 KiB | 8.00 KiB/s, done.
Resolving deltas: 100% (43/43), done.
DannideMacBook-Pro:git danni$ 
```

DannideMacBook-Pro:git danni$ cd ouyida3.github.io/
DannideMacBook-Pro:ouyida3.github.io danni$ git add index.html
DannideMacBook-Pro:ouyida3.github.io danni$ git commit -m 'update index'
[master 6244aa5] update index
 Committer: Danni <danni@DannideMacBook-Pro.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 1 insertion(+), 1 deletion(-)
DannideMacBook-Pro:ouyida3.github.io danni$ git push origin master
Username for 'https://github.com': ouyida3
Password for 'https://ouyida3@github.com': 
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 308 bytes | 308.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/ouyida3/ouyida3.github.io
   c6c86cd..6244aa5  master -> master
