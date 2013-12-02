if [ `pwd` != "/home/olivier/sandboxes/sandbox_git" ]; then
 echo "S'exécute uniquement dans le répertoire /home/olivier/sandboxes/sandbox_git"
 exit
fi

rm -rf .git
git init
git status
 
touch a.txt
git add a.txt
git commit -m "commit add a.txt"

touch b.txt
git add b.txt
git commit -m "commit add b.txt"

rm a.txt
git commit -am "commit remove a.txt"

touch c.txt
git add c.txt
git commit -m "commit add c.txt"

git log 

git checkout HEAD~~ a.txt
