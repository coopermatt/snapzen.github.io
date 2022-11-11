const chargeList = [
    { charge: '', fine: 0, jail: 0, note: false, stackable: false, confiscate: 0 },
    { charge: 'Speeding - 1st Offense', fine: 0, jail: 0, note: false, stackable: false, confiscate: 0 },
    { charge: 'Speeding - 2nd Offense', fine: 15, jail: 0, note: false, stackable: false, confiscate: 0 },
    { charge: 'Speeding - Continuous', fine: 50, jail: 0, note: false, stackable: false, confiscate: 0 }, 
    { charge: 'Loitering - 1st Offense', fine: 0, jail: 0, note: false, stackable: false, confiscate: 0 },
    { charge: 'Loitering - 2nd Offense', fine: 15, jail: 5, note: true, stackable: false, confiscate: 0 }, 
    { charge: 'Loitering - Continuous', fine: 50, jail: 5, note: true, stackable: false, confiscate: 0 },
    { charge: 'Failure To Maintain Control Of Any Large Animal - 1st Offense', fine: 0, jail: 0, note: false, stackable: false, confiscate: 0 }, 
    { charge: 'Failure To Maintain Control Of Any Large Animal - 2nd Offense', fine: 15, jail: 5, note: true, stackable: false, confiscate: 0 },
    { charge: 'Failure To Maintain Control Of Any Large Animal - Continuous', fine: 50, jail: 5, note: true, stackable: false, confiscate: 0 }, 
    { charge: 'Animal Cruelty - 1st Offense', fine: 30, jail: 10, note: true, stackable: false, confiscate: 0 },
    { charge: 'Animal Cruelty - Continuous', fine: 50, jail: 10, note: true, stackable: false, confiscate: 0 }, 
    { charge: 'Trespassing - 1st Offense', fine: 20, jail: 15, note: true, stackable: false, confiscate: 0 },
    { charge: 'Trespassing - 2nd Offense', fine: 50, jail: 15, note: true, stackable: false, confiscate: 0 }, 
    { charge: 'Trespassing - Continuous', fine: 80, jail: 15, note: false, stackable: false, confiscate: 0 },
    { charge: 'Criminal Damage - 1st Offense', fine: 15, jail: 5, note: false, stackable: false, confiscate: 0 }, 
    { charge: 'Criminal Damage - 2nd Offense', fine: 25, jail: 10, note: false, stackable: false, confiscate: 0 },
    { charge: 'Criminal Damage - Continuous', fine: 30, jail: 15, note: false, stackable: false, confiscate: 0 }, 
    { charge: 'Fraud', fine: 100, jail: 15, note: false, stackable: false, confiscate: 4 },
    { charge: 'Criminal Threats', fine: 25, jail: 5, note: true, stackable: true, confiscate: 0 }, 
    { charge: 'Disorderly Conduct - 1st Offense', fine: 25, jail: 0, note: false, stackable: false, confiscate: 0 },
    { charge: 'Disorderly Conduct - 2nd Offense', fine: 50, jail: 5, note: false, stackable: false, confiscate: 0 }, 
    { charge: 'Disorderly Conduct - Continuous', fine: 80, jail: 10, note: false, stackable: false, confiscate: 0 },

    { charge: 'Theft - Item(s) Worth < $150', fine: 25, jail: 10, note: false, stackable: false, confiscate: 3 }, 
    { charge: 'Theft - Item(s) Worth > $150', fine: 50, jail: 15, note: false, stackable: false, confiscate: 3 },
    { charge: 'Theft - Item(s) Worth > $500', fine: 100, jail: 15, note: false, stackable: false, confiscate: 3 }, 
    { charge: 'Theft - Item(s) Worth > $1500', fine: 150, jail: 15, note: false, stackable: false, confiscate: 3 },
    { charge: 'Corruption Of A Court Officer', fine: 30, jail: 15, note: false, stackable: true, confiscate: 0 },
    { charge: 'Impersonating A Court Officer', fine: 100, jail: 15, note: false, stackable: false, confiscate: 3 }, 
    { charge: 'Brandishing', fine: 25, jail: 5, note: true, stackable: false, confiscate: 0 },
    { charge: 'Assault', fine: 25, jail: 5, note: false, stackable: false, confiscate: 0 }, 
    { charge: 'Assault - 1st Offense', fine: 25, jail: 5, note: false, stackable: false, confiscate: 0 },
    { charge: 'Assault - 2nd Offense', fine: 35, jail: 10, note: false, stackable: false, confiscate: 0 }, 
    { charge: 'Assault - Continuous', fine: 50, jail: 15, note: false, stackable: false, confiscate: 0 },
    { charge: 'Kidnapping', fine: 25, jail: 5, note: false, stackable: false, confiscate: 0 }, 
    { charge: 'Attempted Corruption Of A Court Officer', fine: 30, jail: 15, note: true, stackable: true, confiscate: 0 },
    { charge: 'Obstruction Of A Court Officer', fine: 25, jail: 5, note: false, stackable: false, confiscate: 0 }, 
    { charge: 'Evading Justice', fine: 25, jail: 5, note: false, stackable: false, confiscate: 0 },
    { charge: 'Failure To Comply With A Lawful Order', fine: 25, jail: 5, note: false, stackable: false, confiscate: 0 }, 
    { charge: 'Assisting A Fugutive From Justice', fine: 50, jail: 15, note: false, stackable: false, confiscate: 0 },

    { charge: 'Dueling', fine: 50, jail: 15, note: false, stackable: false, confiscate: 1 }, 
    { charge: 'Arson', fine: 75, jail: 10, note: false, stackable: false, confiscate: 2 },
    { charge: 'Unlawful Discharge Of A Weapon', fine: 30, jail: 10, note: false, stackable: false, confiscate: 1 }, 
    { charge: 'Contraband - Class A', fine: 15, jail: 0, note: false, stackable: true, confiscate: 2 },
    { charge: 'Contraband - Class B', fine: 35, jail: 0, note: false, stackable: true, confiscate: 2 }, 
    { charge: 'Contraband - Class C', fine: 100, jail: 0, note: false, stackable: true, confiscate: 2 },
    { charge: 'Attempted Robbery', fine: 100, jail: 10, note: false, stackable: false, confiscate: 5 }, 
    { charge: 'Robbery', fine: 200, jail: 15, note: false, stackable: false, confiscate: 5 },
    { charge: 'Attempted Murder', fine: 100, jail: 15, note: false, stackable: false, confiscate: 1 }, 
    { charge: 'Attempted Mass Murder', fine: 150, jail: 20, note: false, stackable: false, confiscate: 1 },
    { charge: 'Murder', fine: 150, jail: 20, note: false, stackable: false, confiscate: 1 }, 
    { charge: 'Mass Murder', fine: 250, jail: 25, note: false, stackable: false, confiscate: 1 },
    { charge: 'Violent Incompliance Withing Custody', fine: 50, jail: 10, note: true, stackable: true, confiscate: 0 } 
];

const confiscates = [
    { id: 0, conf: "N/A" },
    { id: 1, conf: "Removal of Weapon(s) used" },
    { id: 2, conf: "Contraband & Potential Cash (From Contraband Sales)" },
    { id: 3, conf: "Amount of appraisal of possessions taken from person" },
    { id: 4, conf: "Proven extorted Goods, Weapons, or Money" },
    { id: 5, conf: "Removal of all Weapons and Contraband. If surrender only removal of Contraband" }
];

$(document).ready(function(){
    var confiscationBox = null;
    var stackingBox = null;
    var fineBox = null;
    var jailBox = null;
    var charge = null;
    var fine = null;

    $('select').on('change', function(){
        var selectedID = this.id;
        var idOfSelected = selectedID.substr(selectedID.length - 1)

        var selectedValue = this.value;

        
        var chargeChoosen = $.grep(chargeList, function(n, i){
            return n.charge ==selectedValue;
        });
        
        if (chargeChoosen.length > 0){
            charge = chargeChoosen[0];
            
            stackingBox = $("#stacking-" + idOfSelected);
            fineBox = $("#fine-" + idOfSelected);
            jailBox = $("#jail-" + idOfSelected);
            confiscationBox = $("#confiscate-" + idOfSelected);

            if (charge.stackable) {
                stackingBox.prop('disabled', false);
            } else {
                stackingBox.prop('disabled', true);
                stackingBox.val('1');
            }

            if (charge.note) {
                $(this).addClass("noted");
            } else {
                $(this).removeClass("noted");
            }

            confiscationBox.val(charge.confiscate);
            console.log(confiscationBox.val());

        }


        
        fine = calculateFine(charge.fine, stackingBox.val());
        fineBox.val(fine);
        jail = calculateFine(charge.jail, stackingBox.val());
        jailBox.val(jail);

        updateTotalJail(jail);
        updateTotalFine(fine);

        updateConfiscation();


    });

    $('.stacking').on('change', function(){
        fine = calculateFine(charge.fine, stackingBox.val());
        fineBox.val(fine);
        jail = calculateFine(charge.jail, stackingBox.val());
        jailBox.val(jail);

        updateTotalJail();
        updateTotalFine();
    });

    $('#reduce-fine').on('change', function(){
        updateTotalFine();
    });

    $('#harsh-mode').on('change', function(){
        if ($('#harsh-mode').is(':checked')){
            if(confirm('Do you have Captain+ approval?')){
                console.log('Harsh Mode activated!');
            } else {
                $('#harsh-mode').prop('checked', false);
                console.log("Harsh Mode disabled!")
            }
        } else {
            console.log("Harsh Mode disabled!");
        }
        updateTotalFine();
        updateTotalJail();
    });

});


function updateConfiscation(){
    var highestConfID = null;
    $('.confiscation').each(function(){
        var thisID = $(this).val();
        if (thisID > highestConfID) {
            highestConfID = thisID;
        }
    });

    var confiscationChoosen = $.grep(confiscates, function(n, i){
        return n.id ==highestConfID;
    });

    if (confiscationChoosen.length > 0){
        id = confiscationChoosen[0];
        console.log(id.conf);
        $('#confiscate').val(id.conf);
        
    }
}


function updateTotalFine(){
    var totalFineBox = $('#totalFine');
    var totalFine = 0;
    $('.fines').each(function(){
        var countFine = parseInt($(this).val());
        totalFine = totalFine+countFine;
    });

    if($('#reduce-fine').is(':checked')){
        totalFine = totalFine - (totalFine * .10);
    };

    if (totalFine > 500) {
        if($('#harsh-mode').is(':checked')){
            totalFineBox.val(totalFine);
        } else {
            totalFineBox.val(500);
        }
    } else {
        totalFineBox.val(totalFine);
    } 
}
function updateTotalJail(){
    var totalJailBox = $('#totalJail');
    var totalJail = 0;
    $('.jail').each(function(){
        var countJail = parseInt($(this).val());
        totalJail = totalJail+countJail;
    })

    if (totalJail > 60) {
        totalJailBox.val(60);
    } else {    
        totalJailBox.val(totalJail);
    } 

}

function calculateFine(fineVal, stackVal){
    var chargeFine = fineVal*stackVal;
    return chargeFine;
}
function calculateJail(jailVal, stackVal){
    var chargeJail = jailVal*stackVal;
    return chargeJail;
}

function resetCalc(){
    $('select').each(function(){
        $(this).val("");
        $(this).removeClass("noted");
    })
    $('.stacking').each(function(){
        $(this).val(1);
        $(this).prop('disabled', true);
    })
    $('.fines').each(function(){
        $(this).val(0);
    })
    $('.confiscation').each(function(){
        $(this).val(0);
    })
    $('.jail').each(function(){
        $(this).val(0);
    })
    $('#totalJail').val(0);
    $('#totalFine').val(0);
    $('#confiscate').val("N/A");
    $('#harsh-mode').prop('checked', false);
    $('#reduce-fine').prop('checked', false);
}