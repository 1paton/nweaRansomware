-- this script expects to be loaded in code and you substitute the
-- placeholder below with the list of apps you want to quit.
-- Note that you will be passed app names and not process names.
-- You can't do anything like ask System Events about the process name since some apps have different process names (Firefox for instance)

set appsToQuit to apps_to_quit_placeholder

-- Quit each application
repeat with i from 1 to (count appsToQuit)
	-- NeoOffice seems to hang waiting for a reply - and it will timeout after 
	-- 2 mins. This makes it timeout earlier..
	with timeout of 10 seconds
		set theAppName to item i of appsToQuit
		--tell application theAppName to activate
    -- commented out saving yes on Jeffrey's suggestion - so the app
    -- will hopefully do the right thing
		tell application theAppName to quit 
	end timeout
	-- this can't be too small - I found at 0.25 that we'd end up in an
	-- endless loop of killing and re-activating apps. This script would
	-- quit but through the next loop it would still be in the active
	-- processes which would cause it to be started up and killed again
	--delay 1.0
end repeat
