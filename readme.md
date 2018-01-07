# Toastmasters Tracker App


Purpose: To track and save data on usage of language during toastmasters. This aims to provide an interface where a given cohort can track student progress over time as it relates to public speaking during Toastmasters.



## Planning

ADMIN DASHBOARD:
[] Simple Dashboard that shows all Cohorts in the database. Clicking one should bring you into that Cohort's respective Dashboard.
[] Button that starts the COHORT SETUP.

COHORT SETUP:

*[] Input for the Cohort Name and Student Names. This should create a new database table with the cohort's name as the table ID with the students listed out. Submit Button associated with completing this data.

*[] Upon submit, bring a new view that allows for creating an input table for the date and tracked items.  Show history of previously created histories (none will show for first time.)

COHORT DASHBOARD:

*[] Area that displays history of submitted tracking.

*[] Buttons that show graphical data, could be fun.

*[] Button gthat generates a field that takes in the current date.  Submittal of this will generate a new session based on the given date.  


SESSION:
[] Table with students' names with corresponding fields in their respective rows.
[] clickable row fields for counting: umm, ah/uh, like, so, but, and, false start, double clutch, swear words.
[] submit button at the end to capture all inputs and save them with that date.  Should then route you back to the new Session page to create a new date/table.



## DOM Setup

COHORT SETUP: 

[x] Window that pops up to take in inputs for Cohort name and student names.
[] Save configuration button. 

COHORT DASHBOARD:
[] Shows what Cohort you're working in at the top.  
[] Shows history by date submitted.
[] Button that creates a new session, takes in the current date as a parameter.

SESSION: 

[] Append student names to DOM based COHORT SETUP phase.  GET from server.
[] ForEach student on DOM, append rows of clickable fields for each input to be tracked.
[] Submit button at the bottom that takes in all data for each student and saves it 