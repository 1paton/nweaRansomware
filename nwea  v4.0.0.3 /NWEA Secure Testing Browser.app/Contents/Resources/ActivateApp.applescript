set appname to "AppPlaceHolder"
tell application appname
if it is not running
    tell application appname to launch
    tell application "System Events"
        set loopcount to 0
        repeat while appname is not in name of processes
            delay 1
            set loopcount to loopcount + 1
            if loopcount = 5 then exit
        end repeat
        set frontmost of process appname to true
    end tell
else
    tell application appname to activate
end if
end tell