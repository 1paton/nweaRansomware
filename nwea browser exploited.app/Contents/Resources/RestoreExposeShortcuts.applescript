-- this script will only run when you substitute the orig_values in code..
tell application "System Events"
	
	set the function key of the all windows shortcut of expose preferences to all_windows_function_key
	set the mouse button of the all windows shortcut of expose preferences to all_windows_mouse_button
	
	set the function key of the application windows shortcut of expose preferences to app_windows_function_key
	set the mouse button of all windows shortcut of expose preferences to app_windows_mouse_button
	
	set the function key of the show desktop shortcut of expose preferences to desktop_shortcut_function_key
	set the mouse button of the show desktop shortcut of expose preferences to desktop_shortcut_mouse_button
	
	set the function key of the dashboard shortcut of expose preferences to dashboard_shortcut_function_key
	set the mouse button of the dashboard shortcut of expose preferences to dashboard_shortcut_mouse_button
	
end tell