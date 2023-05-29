CKEDITOR.plugins.add('strinsert',
{
    requires: ['richcombo'],
    init: function (editor) {
        //  array of strings to choose from that'll be inserted into the editor
        var strings = [];


        strings.push(['{#execution_date#}', 'execution_date', 'execution_date']);
        strings.push(['{#seller_partyname#}', 'seller_partyname', 'seller_partyname']);

        strings.push(['{#seller_fathersname#}', 'seller_fathersname', 'seller_fathersname']);
        strings.push(['{#seller_age#}', 'seller_age', 'seller_age']);
        strings.push(['{#seller_caste#}', 'seller_caste', 'seller_caste']);
        strings.push(['{#seller_city#}', 'seller_city', 'seller_city']);
        strings.push(['{#seller_district#}', 'seller_district', 'seller_district']);
        strings.push(['{#seller_id#}', 'seller_id', 'seller_id']);
        strings.push(['{#seller_document_sno#}', 'seller_document_sno', 'seller_document_sno']);
        strings.push(['{#seller_registration_no#}', 'seller_registration_no', 'seller_registration_no']);
        strings.push(['{#seller_article#}', 'seller_article', 'seller_article']);
        strings.push(['{#seller_doc_type_code#}', 'seller_doc_type_code', 'seller_doc_type_code']);
        strings.push(['{#seller_doc_subtype_code#}', 'seller_doc_subtype_code', 'seller_doc_subtype_code']);
        strings.push(['{#seller_photopath#}', 'seller_photopath', 'seller_photopath']);
        strings.push(['{#seller_thumbpath#}', 'seller_thumbpath', 'seller_thumbpath']);
        strings.push(['{#purchaser_photopath#}', 'purchaser_photopath', 'purchaser_photopath']);
        strings.push(['{#purchaser_thumbpath#}', 'purchaser_thumbpath', 'purchaser_thumbpath']);
        strings.push(['{#purchaser_partyname#}', 'purchaser_partyname', 'purchaser_partyname']);
        strings.push(['{#purchaser_fathersname#}', 'purchaser_fathersname', 'purchaser_fathersname']);
        strings.push(['{#purchaser_age#}', 'purchaser_age', 'purchaser_age']);
        strings.push(['{#purchaser_caste#}', 'purchaser_caste', 'purchaser_caste']);
        strings.push(['{#purchaser_city#}', 'purchaser_city', 'purchaser_city']);
        strings.push(['{#purchaser_district#}', 'purchaser_district', 'purchaser_district']);
        strings.push(['{#purchaser_id#}', 'purchaser_id', 'purchaser_id']);
        strings.push(['{#Document_sno#}', 'Document_sno', 'Document_sno']);
        strings.push(['{#draft_self#}', 'draft_self', 'draft_self']);
        strings.push(['{#head_self#}', 'head_self', 'head_self']);
        strings.push(['{#document_name#}', 'document_name', 'document_name']);
        strings.push(['{#district_Name#}', 'district_Name', 'district_Name']);
        strings.push(['{#tehsil_Name#}', 'tehsil_Name', 'tehsil_Name']);
        strings.push(['{#zone_name#}', 'zone_name', 'zone_name']);
        strings.push(['{#area_name#}', 'area_name', 'area_name']);
        strings.push(['{#colony_Name#}', 'colony_Name', 'colony_Name']);
        strings.push(['{#dlc_rate#}', 'dlc_rate', 'dlc_rate']);
        strings.push(['{#Unit_Name#}', 'Unit_Name', 'Unit_Name']);

        strings.push(['{#boundary_value#}', 'boundary_value', 'boundary_value']);
        strings.push(['{#boundary_Area#}', 'boundary_Area', 'boundary_Area']);
        strings.push(['{#tinshade_value#}', 'tinshade_value', 'tinshade_value']);
        strings.push(['{#tinshade_area#}', 'tinshade_area', 'tinshade_area']);
        strings.push(['{#property_area#}', 'property_area', 'property_area']);
        strings.push(['{#construction_area#}', 'construction_area', 'construction_area']);
        strings.push(['{#stamp_duty_value#}', 'stamp_duty_value', 'stamp_duty_value']);
        strings.push(['{#payable_amount#}', 'payable_amount', 'payable_amount']);
        strings.push(['{#update_date#}', 'update_date', 'update_date']);
        strings.push(['{#fee_date#}', 'fee_date', 'fee_date']);
        strings.push(['{#face_value#}', 'face_value', 'face_value']);
        strings.push(['{#EvaluatedValue#}', 'EvaluatedValue', 'EvaluatedValue']);
        strings.push(['{#ordinary_registration_fee#}', 'ordinary_registration_fee', 'ordinary_registration_fee']);
        strings.push(['{#csi_fee#}', 'csi_fee', 'csi_fee']);
        strings.push(['{#other#}', 'other', 'other']);
        strings.push(['{#stamp_duty_payable#}', 'stamp_duty_payable', 'stamp_duty_payable']);
        strings.push(['{#surcharge#}', 'surcharge', 'surcharge']);
        strings.push(['{#stamp_duty_paid#}', 'stamp_duty_paid', 'stamp_duty_paid']);
        strings.push(['{#stamp_duty_final#}', 'stamp_duty_final', 'stamp_duty_final']);
        strings.push(['{#registration_date#}', 'registration_date', 'registration_date']);
        strings.push(['{#book_number#}', 'book_number', 'book_number']);
        strings.push(['{#volume_no#}', 'volume_no', 'volume_no']);
        strings.push(['{#page_no#}', 'page_no', 'page_no']);
        strings.push(['{#addtnl_page_no_frm#}', 'addtnl_page_no_frm', 'addtnl_page_no_frm']);
        strings.push(['{#addtnl_page_no_to#}', 'addtnl_page_no_to', 'addtnl_page_no_to']);
        strings.push(['{#addtnl_book_number#}', 'addtnl_book_number', 'addtnl_book_number']);
        strings.push(['{#addtnl_volume_no#}', 'addtnl_volume_no', 'addtnl_volume_no']);
        strings.push(['{#fee_recpt_no#}', 'fee_recpt_no', 'fee_recpt_no']);
        strings.push(['{#registration_no#}', 'registration_no', 'registration_no']);
        strings.push(['{#sro_name#}', 'sro_name', 'sro_name']);
        strings.push(['{#plotno#}', 'plotno', 'plotno']);
        strings.push(['{#east#}', 'east', 'east']);
        strings.push(['{#west#}', 'west', 'west']);
        strings.push(['{#north#}', 'north', 'north']);
        strings.push(['{#south#}', 'south', 'south']);
        strings.push(['{#partof_property#}', 'partof_property', 'partof_property']);
        strings.push(['{#property_remark o#}', 'property_remark o', 'property_remark o']);
        strings.push(['{#ther_remark #}', 'ther_remark ', 'ther_remark ']);
        strings.push(['{#east_area#}', 'east_area', 'east_area']);
        strings.push(['{#east_neighbourhood #}', 'east_neighbourhood ', 'east_neighbourhood ']);
        strings.push(['{#west_area #}', 'west_area ', 'west_area ']);
        strings.push(['{#west_neighbourhood #}', 'west_neighbourhood ', 'west_neighbourhood ']);
        strings.push(['{#north_area #}', 'north_area ', 'north_area ']);
        strings.push(['{#north_neighbourhood #}', 'north_neighbourhood ', 'north_neighbourhood ']);
        strings.push(['{#south_area #}', 'south_area ', 'south_area ']);
        strings.push(['{#south_neighbourhood#}', 'south_neighbourhood', 'south_neighbourhood']);
        strings.push(['{#road_width#}', 'road_width', 'road_width']);
        strings.push(['{#propaddr#}', 'propaddr', 'propaddr']);
        strings.push(['{#amount1#}', 'amount1', 'amount1']);
        strings.push(['{#amount2#}', 'amount2', 'amount2']);
        strings.push(['{#proclamation#}', 'proclamation', 'proclamation']);
        strings.push(['{#condition#}', 'condition', 'condition']);
        strings.push(['{#extra_condition#}', 'extra_condition', 'extra_condition']);
        strings.push(['{#witness_partyname#}', 'witness_partyname', 'witness_partyname']);
        strings.push(['{#witness_fathersname#}', 'witness_fathersname', 'witness_fathersname']);
        strings.push(['{#witness_age#}', 'witness_age', 'witness_age']);
        strings.push(['{#witness_caste#}', 'witness_caste', 'witness_caste']);
        strings.push(['{#witness_city#}', 'witness_city', 'witness_city']);
        strings.push(['{#witness_id#}', 'witness_id', 'witness_id']);
        strings.push(['{#witness_photopath#}', 'witness_photopath', 'witness_photopath']);
        strings.push(['{#witness_thumbpath#}', 'witness_thumbpath', 'witness_thumbpath']);
        strings.push(['{#Proclamation_partyname#}', 'Proclamation_partyname', 'Proclamation_partyname']);
        strings.push(['{#conditions_details#}', 'conditions_details', 'conditions_details']);
        strings.push(['{#doc_mst_doc_type_code#}', 'doc_mst_doc_type_code', 'doc_mst_doc_type_code']);
        strings.push(['{#doc_mst_srno#}', 'doc_mst_srno', 'doc_mst_srno']);
        strings.push(['{#doc_mst_description#}', 'doc_mst_description', 'doc_mst_description']);
        strings.push(['{#doc_mst_short#}', 'doc_mst_short', 'doc_mst_short']);
        strings.push(['{#previous_pro_serial#}', 'previous_pro_serial', 'previous_pro_serial']);
        strings.push(['{#previous_doctype#}', 'previous_doctype', 'previous_doctype']);
        strings.push(['{#previous_districtname#}', 'previous_districtname', 'previous_districtname']);
        strings.push(['{#previous_doc_no#}', 'previous_doc_no', 'previous_doc_no']);
        strings.push(['{#previous_reg_no#}', 'previous_reg_no', 'previous_reg_no']);
        strings.push(['{#previous_reg_date#}', 'previous_reg_date', 'previous_reg_date']);
        strings.push(['{#previous_sroname#}', 'previous_sroname', 'previous_sroname']);
        strings.push(['{#previous_srocode#}', 'previous_srocode', 'previous_srocode']);
        strings.push(['{#pv_purchaser_name#}', 'pv_purchaser_name', 'pv_purchaser_name']);
        strings.push(['{#pv_purchaser_fathername#}', 'pv_purchaser_fathername', 'pv_purchaser_fathername']);
        strings.push(['{#pv_purchaser_address#}', 'pv_purchaser_address', 'pv_purchaser_address']);
        strings.push(['{#pv_purchaser_contact#}', 'pv_purchaser_contact', 'pv_purchaser_contact']);
        strings.push(['{#pv_purchaser_cast#}', 'pv_purchaser_cast', 'pv_purchaser_cast']);
        strings.push(['{#pv_seller_name#}', 'pv_seller_name', 'pv_seller_name']);
        strings.push(['{#pv_seller_fathername#}', 'pv_seller_fathername', 'pv_seller_fathername']);
        strings.push(['{#pv_seller_address#}', 'pv_seller_address', 'pv_seller_address']);
        strings.push(['{#pv_seller_contact#}', 'pv_seller_contact', 'pv_seller_contact']);
        strings.push(['{#pv_seller_cast#}', 'pv_seller_cast', 'pv_seller_cast']);
        strings.push(['{#pv_previous_bookno#}', 'pv_previous_bookno', 'pv_previous_bookno']);
        strings.push(['{#pv_previous_volumeno#}', 'pv_previous_volumeno', 'pv_previous_volumeno']);
        strings.push(['{#pv_previous_pageno#}', 'pv_previous_pageno', 'pv_previous_pageno']);
        strings.push(['{#pv_serial_no#}', 'pv_serial_no', 'pv_serial_no']);
        strings.push(['{#pv_mode_of_payment#}', 'pv_mode_of_payment', 'pv_mode_of_payment']);
        strings.push(['{#pv_payment_date#}', 'pv_payment_date', 'pv_payment_date']);
        strings.push(['{#pv_bank_name#}', 'pv_bank_name', 'pv_bank_name']);
        strings.push(['{#pv_payment_amount#}', 'pv_payment_amount', 'pv_payment_amount']);
        strings.push(['{#pv_document_no #}', 'pv_document_no ', 'pv_document_no ']);


        editor.ui.addRichCombo('strinsert',
		{
		    label: 'Insert Parameters for document',
		    title: 'Insert Content',
		    voiceLabel: 'Insert Content',
		    className: 'cke_format',
		    multiSelect: false,
		    panel:
			{
			    css: [editor.config.contentsCss, CKEDITOR.skin.getPath('editor')],
			    voiceLabel: editor.lang.panelVoiceLabel
			},

		    init: function () {
		        this.startGroup("Insert Parameters");
		        for (var i in strings) {
		            this.add(strings[i][0], strings[i][1], strings[i][2]);
		        }
		    },

		    onClick: function (value) {
		        editor.focus();              
		        editor.fire('saveSnapshot');
		        editor.insertHtml(value);
		        editor.fire('saveSnapshot');
		    }
		});
    }
});