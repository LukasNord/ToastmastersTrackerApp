$(document).ready(startUp);
function startUp(){
   //event listeners
   $('#createCohort').on('click', toggleHideCohortSetup);
   $('#addStudent').on('click', addStudent);
   $('#submitCohort').on('click', collectCohortStudentInfo);
}

//** Classses **/

class Cohort{
    constructor(cohortName, studentsArray){
        this.cohortName = cohortName,
        this.students = studentsArray
    }
}




function toggleHideCohortSetup(){
    $('.cohortSetupWindow').toggleClass('hidden');
    $('#createCohort').addClass('hidden');

}
function addStudent(){
    $('#cohortSetupStudentInputs').append( 'Student Name' + '<input type="text" class="studentField">' + '<br>');

}

function collectCohortStudentInfo(){
    let studentArray = [];
    let cohort = $('#cohortName').val();
    $('#cohortSetupStudentInputs').children('input').each( function(){
        studentArray.push( $(this).val() ); 
    });
    let sendCohort = new Cohort(cohort, studentArray);

    $.ajax({
        method: 'POST',
        url: '/createCohort',
        data: sendCohort,
        success: function (response){
            console.log(response);
        }
    })//end ajax POST
}// end collectCohortStudentInfo

