
-- this script expects to be loaded in code and you substitute the
-- placeholder below with the list of apps you want to quit

set blocked_processes to blocked_processes_placeholder

tell application "System Events"
	-- Force quit blocked processes such as iChat, iTunes and Google
	repeat with i from 1 to (count blocked_processes)
		set theProcessName to item i of blocked_processes
		if theProcessName is in the name of every process then
			try
				do shell script "killall \"" & theProcessName & "\""
			on error errmesg
				-- I've found that some apps cannot be killed by name
				-- I loaded GrabMac (ppc app) on my intel mac and found
				-- it could not be killed by process name. So I guess
				-- I need to look up the pid and use that
				set processList to every process
				repeat with p from 1 to (count of processList)
					set theProcess to item p of processList
					if name of theProcess is theProcessName then
						set pid to unix id of theProcess
						-- if it happens to fail we want to continue along..
						try
							do shell script "kill " & pid
						end try
					end if
				end repeat
				
			end try
		end if
	end repeat
end tell