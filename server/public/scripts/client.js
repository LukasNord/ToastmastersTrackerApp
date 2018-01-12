console.log('js');

$(document).ready(startUp);



function startUp(){
    console.log('jq');
    $('#createCohort').on('click', showCreateNewCohort );
    $('#cancelNewCohortBtn').on('click', cancelCreateNewCohort);
    $('#submitNewCohortBtn').on('click', createNewCohortSubmitted);

}


/********************************
 Create New Cohort Functionality
*********************************/
function showCreateNewCohort(){
    $('#createCohortContainer').fadeIn('fast');
    
}
function cancelCreateNewCohort(){
    $('#createCohortContainer').fadeOut('fast');

}


/*************************************
 Add Students to Cohort Functionality
**************************************/

function createNewCohortSubmitted(){
    cancelCreateNewCohort();
    let cohortName = $('.input_cohort_name').val();
    $('#addStudentDialogueBox').fadeIn('fast');
    $('#addStudentsLabel').empty();
    $('#addStudentsLabel').append(`Add Students to ${cohortName} Cohort`);


}