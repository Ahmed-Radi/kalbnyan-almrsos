Check files status ```git status```

Add one file to Git ```git add <file name>```

Add all files to Git ```git add .```

To see the history of edit and see SHA-1 ```git log```

To see the first history edit ```git log -n1```

Commit changes ```git commit -m "write your message her"```

Show changes in the file *working directory* ```git diff```
if there are a lot of changes you can use 'F' *forward*, 'B' *backward one step* or 'P' *backward to edit strat*, and 'Q' to exit review mode

Show changes in the file *stage area* ```git diff --staged```
if there are a lot of changes you can use 'F' *forward*, 'B' *backward one step* or 'P' *backward to edit strat*, and 'Q' to exit review mode

Show changes in the file (old version- but still work) *stage area* ```git diff --cached```

To show the changes in the specific line in the file *working directory* ```git diff --color-words``` OR in *stage area* ```git diff --staged --color-words```

Remove file from *working directory* ```git rm <file name>```
OR
After removing file from *working directory* write ```git rm <file name>``` in CMD to make it in the stage area after removing

After Rename file wriet ```git add <new file name>``` then ```get rm <prev file naem>```
OR
wriet ```git mv <prev file naem> <new file name>``` to make it in the stage area after renameing

Moving files ```git mv <file naem> <new directory/file name || new file name>```

To add all files and move it to the stage area in the same time ```git commit -am "your message"```
OR <br />```git commit --all -m "your message"```

To show changes in selected commit using SHA-1 ```git show <SHA-1>```
OR
To show just the changes in selected commit using SHA-1 ```git show <SHA-1> --color-words```

Compare between two commits ```git diff <SHA-1 first commit>..<SHA-1 second commit>```
OR
Compare between two commit ```git diff <SHA-1 first commit>..<SHA-1 second commit> --color-words```

Multiline commit messages **it will work with Atom IDE only** after do changes write ```git commit -a``` then press *Enter* when atom open you will found file name as *COMMIT_EDITMES* write your message then save this file then close it you will found your changes commit

**Undo changes in** *working directory*

Undo changes in one file ```git checkout -- <file name>```

Undo changes in all file ```git checkout -- .```

**note:** (--) means in the same branch

**Another way:**

Undo changes in one file  ```git restore <file name>```

Undo changes in all file  ```git restore .```

**Undo changes all files in** *stage area*

Undo changes all files in one file ```git reset HEAD <file name>```

Undo changes one file in all file ```git reset HEAD .```

**Another way:**

Undo changes in one file ```git restore --staged <file name>```

Undo changes in all file ```git restore --staged .```

Add changes to the file you already commit it but must be *last commit* after adding your new changes in the project add these changes to *stage area* then write ```git commit --amend -m "your message"``` and you can use this command to change the commit but must be *last commit* ```git commit --amend -m "your new message"```

Retrive old version ```git checkout <SHA-1> -- <file naem>``` then add your new changes then ```git add <file name>``` then ```git restore --staged <file name>``` then ```git commit -m "your message"```

To revert your commit **it will work with Atom IDE only** ```git revert <SHA-1>```

To remove untracked files ```git clean -f || -n || -i```

<!-- ```-n``` it just tests what happen we delete files

```-f``` it deletes files

```-i``` it just tests what happen we delete files -->

If you commit a file and you went ignore it before committed first add ```<file name>``` in ```ignore file``` then ```git rm --cached <file name>```