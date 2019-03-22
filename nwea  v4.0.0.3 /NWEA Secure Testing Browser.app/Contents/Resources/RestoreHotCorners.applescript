-- this script will only run when you substitute the orig_values in code..
tell application "System Events"
	tell expose preferences
		
		set topLeftProps to the properties of the top left screen corner
		set properties of top left screen corner to {activity:top_left_orig_value, modifiers:modifiers of topLeftProps}
		
		set topRightProps to the properties of the top right screen corner
		set properties of top right screen corner to {activity:top_right_orig_value, modifiers:modifiers of topRightProps}
		
		set bottomRightProps to the properties of the bottom right screen corner
		set properties of bottom right screen corner to {activity:bottom_right_orig_value, modifiers:modifiers of bottomRightProps}
		
		set bottomLeftProps to the properties of the bottom left screen corner
		set properties of bottom left screen corner to {activity:bottom_left_orig_value, modifiers:modifiers of bottomLeftProps}
		
	end tell
end tell