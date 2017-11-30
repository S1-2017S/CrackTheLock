ALL : start fin push


fin :
	git commit -m "push by makefile"

push :
	git push

start :
	git pull
