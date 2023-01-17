const chargeList = [
    { charge: '', fine: 0, jail: 0, note: false, stackable: false, stackJailCap: 0, stackFineCap: 0, confiscate: 0 },
    { charge: 'Speeding - 1st Offense', fine: 0, jail: 0, note: false, stackable: false, stackJailCap: 0, stackFineCap: 0, confiscate: 0 },
    { charge: 'Speeding - 2nd Offense', fine: 15, jail: 0, note: false, stackable: false, stackJailCap: 0, stackFineCap: 15, confiscate: 0 },
    { charge: 'Speeding - Continuous', fine: 50, jail: 0, note: false, stackable: false, stackJailCap: 0, stackFineCap: 50, confiscate: 0 }, 
    { charge: 'Loitering - 1st Offense', fine: 0, jail: 0, note: false, stackable: false, stackJailCap: 0, stackFineCap: 0, confiscate: 0 },
    { charge: 'Loitering - 2nd Offense', fine: 15, jail: 5, note: true, stackable: false, stackJailCap: 5, stackFineCap: 15, confiscate: 0 }, 
    { charge: 'Loitering - Continuous', fine: 50, jail: 5, note: true, stackable: false, stackJailCap: 5, stackFineCap: 15, confiscate: 0 },
    { charge: 'Failure To Maintain Control Of Any Large Animal - 1st Offense', fine: 0, jail: 0, note: false, stackable: false, stackJailCap: 0, stackFineCap: 0, confiscate: 0 }, 
    { charge: 'Failure To Maintain Control Of Any Large Animal - 2nd Offense', fine: 15, jail: 5, note: true, stackable: false, stackJailCap: 5, stackFineCap: 15, confiscate: 0 },
    { charge: 'Failure To Maintain Control Of Any Large Animal - Continuous', fine: 50, jail: 5, note: true, stackable: false, stackJailCap: 5, stackFineCap: 50, confiscate: 0 }, 
    { charge: 'Animal Cruelty - 1st Offense', fine: 30, jail: 10, note: true, stackable: false, stackJailCap: 10, stackFineCap: 30, confiscate: 0 },
    { charge: 'Animal Cruelty - Continuous', fine: 50, jail: 10, note: true, stackable: false, stackJailCap: 10, stackFineCap: 50, confiscate: 0 }, 
    { charge: 'Trespassing - 1st Offense', fine: 20, jail: 15, note: true, stackable: false, stackJailCap: 15, stackFineCap: 20, confiscate: 0 },
    { charge: 'Trespassing - 2nd Offense', fine: 50, jail: 15, note: true, stackable: false, stackJailCap: 15, stackFineCap: 50, confiscate: 0 }, 
    { charge: 'Trespassing - Continuous', fine: 80, jail: 15, note: false, stackable: false, stackJailCap: 15, stackFineCap: 80, confiscate: 0 },
    { charge: 'Criminal Damage - 1st Offense', fine: 15, jail: 5, note: false, stackable: false, stackJailCap: 5, stackFineCap: 15, confiscate: 0 }, 
    { charge: 'Criminal Damage - 2nd Offense', fine: 25, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 25, confiscate: 0 },
    { charge: 'Criminal Damage - Continuous', fine: 30, jail: 15, note: false, stackable: false, stackJailCap: 15, stackFineCap: 30, confiscate: 0 }, 
    { charge: 'Fraud', fine: 100, jail: 15, note: false, stackable: false, stackJailCap: 15, stackFineCap: 100, confiscate: 4 },
    { charge: 'Criminal Threats', fine: 25, jail: 5, note: true, stackable: true, stackJailCap: 5, stackFineCap: 75, confiscate: 0 }, 
    { charge: 'Disorderly Conduct - 1st Offense', fine: 25, jail: 0, note: false, stackable: false, stackJailCap: 0, stackFineCap: 25, confiscate: 0 },
    { charge: 'Disorderly Conduct - 2nd Offense', fine: 50, jail: 5, note: false, stackable: false, stackJailCap: 5, stackFineCap: 50, confiscate: 0 }, 
    { charge: 'Disorderly Conduct - Continuous', fine: 80, jail: 15, note: false, stackable: false, stackJailCap: 15, stackFineCap: 80, confiscate: 0 },
    { charge: 'Possession of a Scoped Weapon (No License)', fine: 100, jail: 0, note: false, stackable: false, stackJailCap: 0, stackFineCap: 100, confiscate: 1 },

    { charge: 'Theft - Item(s) Worth < $150', fine: 25, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 25, confiscate: 3 }, 
    { charge: 'Theft - Item(s) Worth > $150', fine: 50, jail: 15, note: false, stackable: false, stackJailCap: 15, stackFineCap: 50, confiscate: 3 },
    { charge: 'Theft - Item(s) Worth > $500', fine: 100, jail: 15, note: false, stackable: false, stackJailCap: 15, stackFineCap: 100, confiscate: 3 }, 
    { charge: 'Theft - Item(s) Worth > $1500', fine: 150, jail: 15, note: false, stackable: false, stackJailCap: 15, stackFineCap: 150, confiscate: 3 },
    { charge: 'Corruption Of A Court Officer', fine: 30, jail: 15, note: false, stackable: true, stackJailCap: 15, stackFineCap: 90, confiscate: 0 }, 
    { charge: 'Impersonating A Court Officer', fine: 250, jail: 20, note: false, stackable: false, stackJailCap: 20, stackFineCap: 250, confiscate: 3 }, 
    { charge: 'Brandishing', fine: 25, jail: 5, note: true, stackable: false, stackJailCap: 5, stackFineCap: 25, confiscate: 0 },
    { charge: 'Assault', fine: 25, jail: 5, note: false, stackable: false, stackJailCap: 5, stackFineCap: 25, confiscate: 0 }, 
    { charge: 'Assault - 1st Offense', fine: 25, jail: 5, note: false, stackable: false, stackJailCap: 5, stackFineCap: 25, confiscate: 0 },
    { charge: 'Assault - 2nd Offense', fine: 35, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 35, confiscate: 0 }, 
    { charge: 'Assault - Continuous', fine: 50, jail: 15, note: false, stackable: false, stackJailCap: 15, stackFineCap: 50, confiscate: 0 },
    { charge: 'Kidnapping', fine: 25, jail: 5, note: false, stackable: false, stackJailCap: 5, stackFineCap: 25, confiscate: 0 }, 
    { charge: 'Obstruction Of A Court Officer', fine: 25, jail: 5, note: false, stackable: false, stackJailCap: 5, stackFineCap: 25, confiscate: 0 }, 
    { charge: 'Evading Justice', fine: 25, jail: 5, note: false, stackable: false, stackJailCap: 5, stackFineCap: 25, confiscate: 0 },
    { charge: 'Failure To Comply With A Lawful Order', fine: 25, jail: 5, note: false, stackable: false, stackJailCap: 5, stackFineCap: 25, confiscate: 0 }, 
    { charge: 'Assisting A Fugutive From Justice', fine: 50, jail: 15, note: false, stackable: false, stackJailCap: 15, stackFineCap: 50, confiscate: 0 },

    { charge: 'Dueling', fine: 50, jail: 15, note: false, stackable: false, stackJailCap: 15, stackFineCap: 50, confiscate: 1 }, 
    { charge: 'Arson', fine: 75, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 75, confiscate: 2 },
    { charge: 'Unlawful Discharge Of A Weapon', fine: 30, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 30, confiscate: 1 }, 
    { charge: 'Class A Contraband', fine: 15, jail: 0, note: false, stackable: true, stackJailCap: 0, stackFineCap: 9999999, confiscate: 2 },
    { charge: 'Class B Contraband', fine: 35, jail: 0, note: false, stackable: true, stackJailCap: 0, stackFineCap: 9999999, confiscate: 2 }, 
    { charge: 'Class C Contraband', fine: 100, jail: 0, note: false, stackable: true, stackJailCap: 0, stackFineCap: 9999999, confiscate: 2 },
    { charge: 'Attempted Robbery', fine: 100, jail: 10, note: false, stackable: false, stackJailCap: 10, stackFineCap: 100, confiscate: 5 }, 
    { charge: 'Robbery', fine: 200, jail: 15, note: false, stackable: false, stackJailCap: 15, stackFineCap: 200, confiscate: 5 },
    { charge: 'Attempted Murder', fine: 100, jail: 15, note: false, stackable: false, stackJailCap: 15, stackFineCap: 100, confiscate: 1 }, 
    { charge: 'Attempted Mass Murder', fine: 200, jail: 20, note: false, stackable: false, stackJailCap: 20, stackFineCap: 200, confiscate: 1 },
    { charge: 'Murder', fine: 200, jail: 20, note: false, stackable: false, stackJailCap: 20, stackFineCap: 200, confiscate: 1 }, 
    { charge: 'Mass Murder', fine: 250, jail: 25, note: false, stackable: false, stackJailCap: 25, stackFineCap: 250, confiscate: 1 },
    { charge: 'Violent Incompliance Withing Custody', fine: 50, jail: 10, note: true, stackable: true, stackJailCap: 10, stackFineCap: 150, confiscate: 0 }, 
    { charge: 'Attempted Murder of a Government Official', fine: 50, jail: 15, note: true, stackable: true, stackJailCap: 15, stackFineCap: 9999999, confiscate: 1 }, 
    { charge: 'Murder of a Government Official', fine: 100, jail: 30, note: true, stackable: true, stackJailCap: 30, stackFineCap: 9999999, confiscate: 1 }, 
    { charge: 'Use of a Marksmen in Major Crimes', fine: 50, jail: 5, note: true, stackable: false, stackJailCap: 5, stackFineCap: 50, confiscate: 1 }
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
        idOfSelected = getRowID(selectedID);

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

        jail = calculateFine(charge.jail, stackingBox.val());
        if (jail > charge.stackJailCap){
            jailBox.val(charge.stackJailCap);
        } else {
            jailBox.val(jail);
        }

        updateFines();
        updateTotalJail(jail);


        updateConfiscation();


    });

    $('.stacking').on('change', function(){

        updateFines();
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
        updateFines();
        updateTotalFine();
        updateTotalJail();
    });

});

function updateFines(){
    $('.fines').each(function(){
        var fineBoxID = $(this).attr("id")
        var rowID = getRowID(fineBoxID);
        var fineBox = $("#fine-" + rowID);
        var stackingBox = $("#stacking-" + rowID);
        var selectionBox = $("#charge-" + rowID);
        var selectionValue = selectionBox.val(); 

        var selection = $.grep(chargeList, function(n, i){
            return n.charge == selectionValue;
        });
        if (selection.length > 0){
            charge = selection[0];

            var fine = calculateFine(charge.fine, stackingBox.val());

            if (fine > charge.stackFineCap){
                fineBox.val(charge.stackFineCap);
            } else {
                fineBox.val(fine);
            }

            if ( fine > 500) {
                if($('#harsh-mode').is(':checked')){
                    fineBox.val(fine);
                } else {
                    fineBox.val(500);
                }
            }
        }
        updateTotalFine(fine);
    })
}

function getRowID(elementID){
    var idOfSelected = elementID.substr(elementID.length - 1)
    return idOfSelected
}

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

    if (totalFine > 500) {
        if($('#harsh-mode').is(':checked')){
            if($('#reduce-fine').is(':checked')){
                totalFine = totalFine - (totalFine * .25);
            };
            totalFineBox.val(totalFine);
        } else {
            if($('#reduce-fine').is(':checked')){
                totalFineBox.val(500 - (500 * .25));
            } else {
                totalFineBox.val(500);
            }
        }
    } else {
        if($('#reduce-fine').is(':checked')){
            totalFine = totalFine - (totalFine * .25);
        };
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

function clipboardCharges(){
    var copyChargeList = [];
    
    $('.charge-value').each(function(){
        var copyCharge = null; 
        var copyStack = null;
        var chargeID = this.id;
        var rowID = getRowID(chargeID);
        var stackingBox = $("#stacking-" + rowID);
        var selectionBox = $("#charge-" + rowID);
        console.log(selectionBox);
        copyCharge = selectionBox.val(); 
        copyStack = stackingBox.val();
        console.log(copyCharge);

        var chargeToClipboard = copyStack + "x " + copyCharge;

        if (copyCharge !== "") {
            copyChargeList.push(chargeToClipboard);
        }
    });
    console.log(copyChargeList);
    if(navigator && navigator.clipboard && navigator.clipboard.writeText){
        return navigator.clipboard.writeText(copyChargeList.join('\r\n'));
    } 
}