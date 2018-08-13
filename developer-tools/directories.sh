#!/usr/bin/env bash

# Create a directory 
mkdir directory_name

# Create a new file
touch new_file.txt

# Copy File to new directory (directory_name)
cp new_file.txt directory_name/new_file.txt

# Move to a directory (directory_name)
cd directory_name

# list contents of directory
ls

#add content to file (redirects output to file)
echo "stuff added to file" >> new_file.txt

#pipe output of file (and string replace) to stdout
cat new_file.txt | sed "s/stuff/content/"


# initialise as git directory
git init

# Create a new branch
git checkout -b new_branch

# Add files to commit
git add .

#commit files
git commit -m "new commit"




