// dont delete this variable
var _special;

var tableDataSet = [
    [ "Month1", "1100", "3500", "2200", "2150", "1200", "1150", "20000"],
    [ "Month2", "1200", "3600", "2300", "2250", "1300", "1250", "2"],
    [ "Month3", "1300", "3700", "2400", "2350", "1400", "1350", "3"],
    [ "Month4", "1400", "3800", "2500", "2450", "1500", "1450", "4"],
    [ "Month5", "1500", "3900", "2600", "2550", "1600", "1550", "4"]];

    localStorage.setItem("tableDataChart", JSON.stringify(tableDataSet));

    let tableData_2 = localStorage.getItem("tableData_2");

    if(tableData_2 !== null){
        tableDataSet = tableData_2;
    }
    
    
let myDataArray = [];
for(var i = 0; i < tableDataSet.length - 1; i++){
var myData1 = [{
            m: 'Admin',
            a: parseInt(tableDataSet[i][1], 10),
            b: parseInt(tableDataSet[i + 1][1], 10)
        }, {
            m: 'Development',
            a: parseInt(tableDataSet[i][2], 10),
            b: parseInt(tableDataSet[i + 1][2], 10)
        }, {
            m: 'Management',
            a: parseInt(tableDataSet[i][3], 10),
            b: parseInt(tableDataSet[i + 1][3], 10)
        }, {
            m: 'Taxes',
            a: parseInt(tableDataSet[i][4], 10),
            b: parseInt(tableDataSet[i + 1][4], 10)
        }, {
            m: 'Business',
            a: parseInt(tableDataSet[i][5], 10),
            b: parseInt(tableDataSet[i + 1][5], 10)
        }, {
            m: 'WSBO',
            a: parseInt(tableDataSet[i][6], 10),
            b: parseInt(tableDataSet[i + 1][6], 10)
        }];

        myDataArray.push(myData1);
}

var myData2 = [{
            m: 'Admin',
            a: parseInt(tableDataSet[tableDataSet.length - 2][1], 10),
            b: parseInt(tableDataSet[tableDataSet.length - 1][1], 10)
        }, {
            m: 'Development',
            a: parseInt(tableDataSet[tableDataSet.length - 2][2], 10),
            b: parseInt(tableDataSet[tableDataSet.length - 1][2], 10)
        }, {
            m: 'Management',
            a: parseInt(tableDataSet[tableDataSet.length - 2][3], 10),
            b: parseInt(tableDataSet[tableDataSet.length - 1][3], 10)
        }, {
            m: 'Taxes',
            a: parseInt(tableDataSet[tableDataSet.length - 2][4], 10),
            b: parseInt(tableDataSet[tableDataSet.length - 1][4], 10)
        }, {
            m: 'Business',
            a: parseInt(tableDataSet[tableDataSet.length - 2][5], 10),
            b: parseInt(tableDataSet[tableDataSet.length - 1][5], 10)
        }, {
            m: 'WSBO',
            a: parseInt(tableDataSet[tableDataSet.length - 2][6], 10),
            b: parseInt(tableDataSet[tableDataSet.length - 1][6], 10)
        }];

var myData3 = [{
            m: 'Admin',
            a: parseInt(tableDataSet[tableDataSet.length - 3][1], 10),
            b: parseInt(tableDataSet[tableDataSet.length - 1][1], 10)
        }, {
            m: 'Development',
            a: parseInt(tableDataSet[tableDataSet.length - 3][2], 10),
            b: parseInt(tableDataSet[tableDataSet.length - 1][2], 10)
        }, {
            m: 'Management',
            a: parseInt(tableDataSet[tableDataSet.length - 3][3], 10),
            b: parseInt(tableDataSet[tableDataSet.length - 1][3], 10)
        }, {
            m: 'Taxes',
            a: parseInt(tableDataSet[tableDataSet.length - 3][4], 10),
            b: parseInt(tableDataSet[tableDataSet.length - 1][4], 10)
        }, {
            m: 'Business',
            a: parseInt(tableDataSet[tableDataSet.length - 3][5], 10),
            b: parseInt(tableDataSet[tableDataSet.length - 1][5], 10)
        }, {
            m: 'WSBO',
            a: parseInt(tableDataSet[tableDataSet.length - 3][6], 10),
            b: parseInt(tableDataSet[tableDataSet.length - 1][6], 10)
        }];



/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
}); 


let monthNumber = 7;


    

    let tableDataParsed = localStorage.getItem("tableData_2");

    if(tableDataParsed === null){
        tableDataParsed = tableDataSet;
    } else {
        tableDataParsed = JSON.parse(tableDataParsed);
    }


    function addEntry(){
    var management = document.getElementById("management-exp");
    var taxes = document.getElementById("taxes-exp");
    var wsbo = document.getElementById("wsbo-exp");
    var development = document.getElementById("development-exp");
    var admin = document.getElementById("admin-exp");
    var business = document.getElementById("business-exp");

    let dataChart = [{
            m: 'Admin',
            b: admin.value
        }, {
            m: 'Development',
            b: development.value
        }, {
            m: 'Management',
            b: management.value
        }, {
            m: 'Taxes',
            b: taxes.value
        }, {
            m: 'Business',
            b: business.value
        }, {
            m: 'WSBO',
            b: wsbo.value
        }];

        let storedMonthNumber = localStorage.getItem("monthNumber");

        if(storedMonthNumber === null){
            storedMonthNumber = monthNumber;
        }

        let totalMonth = parseInt(admin.value,10) + parseInt(development.value, 10) + parseInt(management.value, 10) + parseInt(taxes.value, 10) + parseInt(business.value, 10) + parseInt(wsbo.value, 10);
        let newTableEntry = [
        "Month" + (++storedMonthNumber), admin.value, development.value, management.value, taxes.value, business.value, wsbo.value, totalMonth];
        localStorage.setItem("monthNumber", storedMonthNumber);


        let tableData = localStorage.getItem("tableData_2");

        if(tableData === null){
            tableData = localStorage.getItem("tableDataChart");
        }
        
        let tableDataParsed = JSON.parse(tableData);
        tableDataParsed.push(newTableEntry);

        localStorage.setItem("newData", JSON.stringify(dataChart));
        // myDataArray.push(dataChart);
        localStorage.setItem("tableData_2", JSON.stringify(tableDataParsed));
}

function addB(selection){

    let da = localStorage.getItem("newData");

    let size = myDataArray.length;

    if(da === null){
        da = myDataArray[0];
    }

    if(selection === 1){
        barChart.setData(myDataArray[size-1]);
    }
    else if(selection === 2){
        barChart.setData(myDataArray[size-2]);
    }
    else if(selection === 3){
        barChart.setData(myDataArray[size-3]);
    }
}

function paint(){
    alert("cenas");
}


/*!
 * Tabledit v1.1.0 (https://github.com/markcell/jQuery-Tabledit)
 * Copyright (c) 2015 Celso Marques
 * Licensed under MIT (https://github.com/markcell/jQuery-Tabledit/blob/master/LICENSE)
 */

/**
 * @description Inline editor for HTML tables
 * @version 1.1.0
 * @author Celso Marques
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Tabledit requires jQuery library.');
}

(function($) {
    'use strict';

    $.fn.Tabledit = function(options) {
        if (!this.is('table')) {
            console.log('Tabledit only works when applied to a table.');
            return;
        }

        var $table = this;

        var defaults = {
            url: window.location.href,
            inputClass: 'form-control input-sm',
            dangerClass: 'danger',
            warningClass: 'warning',
            mutedClass: 'text-muted',
            eventType: 'click',
            confirmText: ' &nbsp; Confirm',
            hideIdentifier: false,
            textSelectionction: true,
            editButton: true,
            removeButton: true,
            buttons: {
                edit: {
                    class: 'btn btn-sm btn-warning',
                    html: '<span class="glyphicon glyphicon-pencil"></span>'
                },
                remove: {
                    class: 'btn btn-sm btn-danger',
                    html: '<span class="glyphicon glyphicon-trash"></span>'
                },
                save: {
                    class: 'btn btn-sm btn-success',
                    html: '<span class="glyphicon glyphicon-ok"></span> &nbsp; Save'
                },
                cancel: {
                    class: 'btn btn-sm btn-warning',
                    html: '<span class="glyphicon glyphicon-pencil"></span>'
                }
            },
            onDraw: function() { return; },
            onSuccess: function() { return; },
            onFail: function() { return; },
            onAlways: function() { return; }
        };

        var settings = $.extend({}, defaults, options);

        var $lastEditedRow = 'undefined';
        var $lastRemovedRow = 'undefined';

        /**
         * Draw Tabledit structure (identifier column, editable columns, toolbox column).
         *
         * @type {object}
         */
        var Draw = {
            form: function(url) {
                // Create form wrapped on table if not exists.
                if (!$table.parent('form.tabledit-form').length > 0) {
                    $table.wrap('<form action="' + url + '" method="post" class="tabledit-form"></form>');
                }
            },
            columns: {
                identifier: function() {
                    // Hide identifier column.
                    if (settings.hideIdentifier) {
                        $table.find('th:nth-child(' + parseInt(settings.columns.identifier[0]) + 1 + '), td:nth-child(' + parseInt(settings.columns.identifier[0]) + 1 + ')').hide();
                    }

                    var $td = $table.find('td:nth-child(' + (parseInt(settings.columns.identifier[0]) + 1) + ')');

                    $td.each(function() {
                        // Create hidden input with row identifier.
                        var span = '<span class="tabledit-span tabledit-identifier">' + $(this).text() + '</span>';
                        var input = '<input class="tabledit-input tabledit-identifier" type="hidden" name="' + settings.columns.identifier[1] + '" value="' + $(this).text() + '" disabled>';

                        // Add elements to table cell.
                        $(this).html(span + input);

                        // Add attribute "id" to table row.
                        // $(this).parent('tr').attr('id', $(this).parent('tr').attr('id'));
                    });
                },
                editable: function() {
                    for (var i = 0; i < settings.columns.editable.length; i++) {
                        var $td = $table.find('td:nth-child(' + (parseInt(settings.columns.editable[i][0]) + 1) + ')');

                        $td.each(function() {
                            // Add pointer as cursor.
                            if (!settings.editButton) {
                                $(this).css('cursor', 'pointer');
                            }

                            // Create span element.
                            var span = '<span class="tabledit-span">' + $(this).text() + '</span>';

                            // Check if exists the third parameter of editable array.
                            if (typeof settings.columns.editable[i][2] !== 'undefined') {
                                // Create selectionct element.
                                var input = '<selectionct class="tabledit-input ' + settings.inputClass + '" name="' + settings.columns.editable[i][1] + '" style="display: none;" disabled>';

                                // Create options for selectionct element.
                                $.each(jQuery.parseJSON(settings.columns.editable[i][2]), function(index, value) {
                                    input += '<option value="' + index + '">' + value + '</option>';
                                });

                                // Create last piece of selectionct element.
                                input += '</selectionct>';
                            } else {
                                // Create text input element.
                                var input = '<input class="tabledit-input ' + settings.inputClass + '" type="text" name="' + settings.columns.editable[i][1] + '" value="' + $(this).text() + '" style="display: none;" disabled>';
                            }

                            // Add elements and class "view" to table cell.
                            $(this).html(span + input);
                            $(this).addClass('tabledit-view-mode');
                       });
                    }

                    // Text selectionction in editable columns.
                    if (!settings.textSelectionction) {
                        $table.find('td.tabledit-view-mode').css('-webkit-touch-callout', 'none')
                                                            .css('-webkit-user-selectionct', 'none')
                                                            .css('-khtml-user-selectionct', 'none')
                                                            .css('-moz-user-selectionct', 'none')
                                                            .css('-ms-user-selectionct', 'none')
                                                            .css('user-selectionct', 'none');
                    }
                },
                toolbox: function() {
                    if (settings.editButton || settings.removeButton) {
                        var editButton = '';
                        var removeButton = '';
                        var saveButton = '';
                        var cancelButton = '';

                        // Add toolbox column header if not exists.
                        if ($table.find('th.tabledit-toolbox-column').length === 0) {
                            $table.find('tr:first').append('<th class="tabledit-toolbox-column"></th>');
                        }

                        // Add class "active" to cancel button, if edit button is equal to cancel button.
                        if ((settings.buttons.edit.class === settings.buttons.cancel.class) && (settings.buttons.edit.html === settings.buttons.cancel.html)) {
                            settings.buttons.cancel.class += ' active';
                        }

                        // Create edit button.
                        if (settings.editButton) {
                            editButton = '<button type="button" class="tabledit-edit-button ' + settings.buttons.edit.class + '" style="margin-left: 5px;">' + settings.buttons.edit.html + '</button>';
                            saveButton = '<button type="button" class="tabledit-save-button ' + settings.buttons.save.class + '" style="margin-left: 5px; display: none;">' + settings.buttons.save.html + '</button>';
                            cancelButton = '<button type="button" class="tabledit-cancel-button ' + settings.buttons.cancel.class + '" style="margin-left: 5px; display: none;">' + settings.buttons.cancel.html + '</button>';
                        }

                        // Create remove button.
                        if (settings.removeButton) {
                            // removeButton = '<button type="button" class="tabledit-remove-button ' + settings.buttons.remove.class + '" style="margin-left: 5px;">' + settings.buttons.remove.html + '</button>';
                        }

                        // Add toolbox column cells.
                        $table.find('tr:gt(0)').append('<td style="white-space: nowrap; width: 1px;"><div class="tabledit-toolbox" style="margin-left: -5px; text-align: right;">' + editButton + saveButton + cancelButton + removeButton + '</div></td>');
                    }
                }
            }
        };

        /**
         * Change to view mode or edit mode with table td element as parameter.
         *
         * @type object
         */
        var Mode = {
            view: function(td) {
                // Get table row.
                var $tr = $(td).parent('tr');
                // Disable identifier.
                $(td).parent('tr').find('.tabledit-input.tabledit-identifier').prop('disabled', true);
                // Hide and disable input element.
                $(td).find('.tabledit-input').blur().hide().prop('disabled', true);
                // Show span element.
                $(td).find('.tabledit-span').show();
                // Add "view" class and remove "edit" class in td element.
                $(td).addClass('tabledit-view-mode').removeClass('tabledit-edit-mode');
                // Update toolbox buttons.
                if (settings.editButton) {
                    $tr.find('button.tabledit-save-button, button.tabledit-cancel-button').hide();
                    $tr.find('button.tabledit-edit-button').show();
                }
            },
            edit: function(td) {
                Remove.reset();
                // Get table row.
                var $tr = $(td).parent('tr');
                // Enable identifier.
                $tr.find('.tabledit-input.tabledit-identifier').prop('disabled', false);
                // Hide span element.
                $(td).find('.tabledit-span').hide();
                // Enable, show and focus input element.
                $(td).find('.tabledit-input').prop('disabled', false).show().focus();
                // Add "edit" class and remove "view" class in td element.
                $(td).addClass('tabledit-edit-mode').removeClass('tabledit-view-mode');
                // Update toolbox buttons.
                if (settings.editButton) {
                    $tr.find('button.tabledit-edit-button').hide();
                    $tr.find('button.tabledit-save-button, button.tabledit-cancel-button').show();
                }
            }
        };

        /**
         * Available actions for edit function, with table td element as parameter or set of td elements.
         *
         * @type object
         */
        var Edit = {
            reset: function(td) {
                $(td).each(function() {
                    // Get input element.
                    var $input = $(this).find('.tabledit-input');
                    // Set input/selectionct value with span text.
                    if ($input.is('selectionct')) {
                        $input.find('option[text="' + $(this).find('.tabledit-span').text() + '"]').attr('selectioncted', true);
                    } else {
                        $input.val($(this).find('.tabledit-span').text());
                    }
                    // Change to view mode.
                    Mode.view(this);
                });
            },
            submit: function(td) {
                // Send AJAX request to server.
                ajax('edit');

                $(td).each(function() {
                    // Get input element.
                    var $input = $(this).find('.tabledit-input');
                    // Set span text with input/selectionct new value.
                    if ($input.is('selectionct')) {
                        $(this).find('.tabledit-span').text($input.find('option:selectioncted').text());
                    } else {
                        $(this).find('.tabledit-span').text($input.val());
                    }
                    // Change to view mode.
                    Mode.view(this);
                });

                // Set last edited column and row.
                $lastEditedRow = $(td).parent('tr');
            }
        };

        /**
         * Available actions for remove function, with button as parameter.
         *
         * @type object
         */
        var Remove = {
            reset: function() {
                // Reset remove button to initial status.
                $table.find('.tabledit-remove-button.tabledit-confirm').removeClass('tabledit-confirm').find('span.tabledit-confirm-text').remove();
            },
            submit: function(button) {
                Remove.reset();
                // Enable identifier hidden input.
                $(button).parents('tr').find('input.tabledit-identifier').attr('disabled', false);
                // Send AJAX request to server.
                ajax('remove');
                // Hide table row.
                $(button).parents('tr').addClass(settings.mutedClass).find('.tabledit-toolbox button').attr('disabled', true);
                // Disable identifier hidden input.
                $(button).parents('tr').find('input.tabledit-identifier').attr('disabled', true);
                // Set last removed row.
                $lastRemovedRow = $(button).parents('tr');
            },
            confirm: function(button) {
                Mode.view($(button).parents('tr').find('td.tabledit-edit-mode'));
                // Add confirmation text.
                $(button).html(settings.buttons.remove.html + '<span class="tabledit-confirm-text">' + settings.confirmText + '</span>').addClass('tabledit-confirm').blur();
            }
        };

        /**
         * Send AJAX request to server.
         *
         * @param {string} action
         */
        function ajax(action)
        {
            var data = '&action=' + action;

            var jqXHR = $.post(settings.url, $('form.tabledit-form').serialize() + data, function(data, textStatus, jqXHR) {
                if (action === 'edit') {
                    $lastEditedRow.removeClass(settings.dangerClass).addClass(settings.warningClass);
                    setTimeout(function() {
                        $lastEditedRow.removeClass(settings.warningClass);
                    }, 1400);
                }

                settings.onSuccess(data, textStatus, jqXHR);
            }, 'json');

            jqXHR.fail(function(jqXHR, textStatus, errorThrown) {
                if (action === 'remove') {
                    $lastRemovedRow.removeClass(settings.mutedClass).addClass(settings.dangerClass);
                    $lastRemovedRow.find('.tabledit-toolbox button').attr('disabled', false);
                } else if (action === 'edit') {
                    $lastEditedRow.addClass(settings.dangerClass);
                }

                settings.onFail(jqXHR, textStatus, errorThrown);
            });

            jqXHR.always(function() {
                settings.onAlways();
            });

            return jqXHR;
        }

        Draw.form(settings.url);

        Draw.columns.identifier();
        Draw.columns.editable();
        Draw.columns.toolbox();

        settings.onDraw();

        if (settings.removeButton) {
            /**
             * Remove one row.
             *
             * @param {object} event
             */
            $table.on('click', 'button.tabledit-remove-button', function(event) {
                if (event.handled !== true) {
                    event.preventDefault();

                    if ($(this).hasClass('tabledit-confirm')) {
                        Remove.submit(this);
                    } else {
                        Remove.reset();
                        Remove.confirm(this);
                    }

                    event.handled = true;
                }
            });

            /**
             * Click event on document element.
             *
             * @param {object} event
             */
            /*
            $(document).on('click', function(event) {
                var $removeButton = $table.find('.tabledit-remove-button');
                // Reset visible edit mode column.
                if (!$removeButton.is(event.target) && $removeButton.has(event.target).length === 0) {
                    Remove.reset();
                }
            });
            */
        }

        if (settings.editButton) {
            /**
             * Activate edit mode on all columns.
             *
             * @param {object} event
             */
            $table.on('click', 'button.tabledit-edit-button', function(event) {
                if (event.handled !== true) {
                    event.preventDefault();

                    // Change to view mode columns that are in edit mode.
                    Edit.reset($table.find('td.tabledit-edit-mode'));

                    // Change to edit mode for all columns in reverse way.
                    $($(this).parents('tr').find('td.tabledit-view-mode').get().reverse()).each(function() {
                        Mode.edit(this);
                    });

                    event.handled = true;
                }
            });

            /**
             * Save edited row.
             *
             * @param {object} event
             */
            $table.on('click', 'button.tabledit-save-button', function(event) {
                if (event.handled !== true) {
                    event.preventDefault();

                    // Submit and update all columns.
                    _special = $(this).parents('tr').find('td.tabledit-edit-mode');
                    Edit.submit($(this).parents('tr').find('td.tabledit-edit-mode'));

                    event.handled = true;
                }
            });

            /**
             * Cancel edit mode.
             *
             * @param {object} event
             */
            $table.on('click', 'button.tabledit-cancel-button', function(event) {
                if (event.handled !== true) {
                    event.preventDefault();

                    // Reset and update all columns.
                    Edit.reset($(this).parents('tr').find('td.tabledit-edit-mode'));

                    event.handled = true;
                }
            });
        } else {
            /**
             * Change to edit mode on table td element.
             *
             * @param {object} event
             */
            $table.on(settings.eventType, 'td.tabledit-view-mode', function(event) {
                if (event.handled !== true) {
                    event.preventDefault();

                    // Reset all td's in edit mode.
                    Edit.reset($table.find('td.tabledit-edit-mode'));

                    // Change to edit mode.
                    Mode.edit(this);

                    event.handled = true;
                }
            });

            /**
             * Change event when input is a selectionct element.
             */
            $table.on('change', 'selectionct.tabledit-input:visible', function() {
                if (event.handled !== true) {
                    // Submit and update the column.
                    Edit.submit($(this).parent('td'));

                    event.handled = true;
                }
            });

            /**
             * Click event on document element.
             *
             * @param {object} event
             */
            $(document).on('click', function(event) {
                var $editMode = $table.find('.tabledit-edit-mode');
                // Reset visible edit mode column.
                if (!$editMode.is(event.target) && $editMode.has(event.target).length === 0) {
                    Edit.reset($table.find('.tabledit-input:visible').parent('td'));
                }
            });
        }

        /**
         * Keyup event on document element.
         *
         * @param {object} event
         */
        $(document).on('keyup', function(event) {
            // Get input element with focus or confirmation button.
            var $input = $table.find('.tabledit-input:focus');
            var $button = $table.find('.tabledit-remove-button.tabledit-confirm');

            // If exists, check what key was pressed.
            if ($input.length > 0 || $button.length > 0) {
                // Get td element.
                if (settings.editButton) {
                    var $td = $input.parents('tr').find('.tabledit-edit-mode');
                } else {
                    var $td = $input.parent('.tabledit-edit-mode');
                }
                // Key?
                switch (event.keyCode) {
                    case 13: // Enter.
                        Edit.submit($td);
                        break;
                    case 27: // Escape.
                        Edit.reset($td);
                        // Reset remove button.
                        Remove.reset();
                        break;
                }
            }
        });

        return this;
    };
}(jQuery));



$('#my-table').Tabledit({
    columns: {
    identifier: [5, 'id'],                    
    editable: [[1, 'Management'], [2, 'May'], [3, 'May'], [4, 'asd']]
    }
});

let tableFromMongo;

let rrr = [];
$.get( "/api/expenses", function( respo ) {
    tableFromMongo = respo;
    for(var i = 0; i < tableFromMongo.length; i++){
        tableFromMongo[i].data.DT_RowId = tableFromMongo[i]._id;
        rrr.push(tableFromMongo[i].data);
    }


    $('#example').DataTable( {
        data: rrr,
        
        columns: [
            { data: "month" },
            { data: "admin" }, 
            { data: "development" },
            { data: "management" },
            { data: "taxes" },
            { data: "business" },
            { data: "wsbo" }
        ]
    } );


    $('#example').Tabledit({
        columns: {
            identifier: [0, 'DT_RowId'],                    
            editable: [[1,'admin'], [2, 'development'], 
            [3, 'management'], [4, 'taxes'],[5, 'business'], [6,'wsbo']]
        }
     });


    // $("#example").each(function() {
    //     var $this = $(this);
    //     var newrows = [];
    //     $this.find("tr").each(function(){
    //         var i = 0;
    //         $(this).find("td").each(function(){
    //             i++;
    //             if(newrows[i] === undefined) { newrows[i] = $("<tr></tr>"); }
    //             newrows[i].append($(this));
    //         });
    //     });
    //     $this.find("tr").remove();
    //     $.each(newrows, function(){
    //         $this.append(this);
    //     });
    // });
});
