$(document).ready(startUp);
function startUp(){
   //event listeners
   $('#createCohort').on('click', toggleHideCohortSetup);
   $('#addStudent').on('click', addStudent);
}

function toggleHideCohortSetup(){
    $('#cohortSetupWindow').toggleClass('hidden');
    $('#createCohort').addClass('hidden');

}
function addStudent(){
    $('#cohortSetupstudentInputs').append( 'Student Name' + '<input type="text">' + '<br>');

}