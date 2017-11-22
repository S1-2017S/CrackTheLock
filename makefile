ALL : fin start


fin :
	git commit -m "push by makefile"
	git push

start :
	git pull
