const mongoose = require('mongoose');

const paymentSuccessSchema = new mongoose.Schema({
  "ekashu_3d_secure_eci": {
    "type": "String"
  },
  "ekashu_3d_secure_enrolled": {
    "type": "String"
  },
  "ekashu_3d_secure_iav": {
    "type": "String"
  },
  "ekashu_3d_secure_result": {
    "type": "String"
  },
  "ekashu_3d_secure_v2_acs_transaction_id": {
    "type": "String"
  },
  "ekashu_3d_secure_v2_authentication_indicator": {
    "type": "Date"
  },
  "ekashu_3d_secure_v2_challenge_indicator": {
    "type": "String"
  },
  "ekashu_3d_secure_v2_directory_server_transaction_id": {
    "type": "String"
  },
  "ekashu_3d_secure_v2_eci": {
    "type": "String"
  },
  "ekashu_3d_secure_v2_enrolled": {
    "type": "String"
  },
  "ekashu_3d_secure_v2_iav": {
    "type": "String"
  },
  "ekashu_3d_secure_v2_message_category": {
    "type": "String"
  },
  "ekashu_3d_secure_v2_reject_missing_data": {
    "type": "String"
  },
  "ekashu_3d_secure_v2_requestor_transaction_id": {
    "type": "String"
  },
  "ekashu_3d_secure_v2_result": {
    "type": "String"
  },
  "ekashu_3d_secure_v2_server_transaction_id": {
    "type": "String"
  },
  "ekashu_3d_secure_verify": {
    "type": "String"
  },
  "ekashu_3d_secure_version": {
    "type": "String"
  },
  "ekashu_3d_secure_xid": {
    "type": "String"
  },
  "ekashu_amount": {
    "type": "Date"
  },
  "ekashu_amount_format": {
    "type": "String"
  },
  "ekashu_auth_code": {
    "type": "String"
  },
  "ekashu_auth_result": {
    "type": "String"
  },
  "ekashu_auto_confirm": {
    "type": "String"
  },
  "ekashu_callback_failure_url": {
    "type": "String"
  },
  "ekashu_callback_include_post": {
    "type": "String"
  },
  "ekashu_callback_success_url": {
    "type": "String"
  },
  "ekashu_card_address_1": {
    "type": "String"
  },
  "ekashu_card_address_2": {
    "type": "String"
  },
  "ekashu_card_address_editable": {
    "type": "String"
  },
  "ekashu_card_address_required": {
    "type": "String"
  },
  "ekashu_card_address_result": {
    "type": "String"
  },
  "ekashu_card_address_verify": {
    "type": "String"
  },
  "ekashu_card_city": {
    "type": "String"
  },
  "ekashu_card_country": {
    "type": "String"
  },
  "ekashu_card_email_address": {
    "type": "String"
  },
  "ekashu_card_email_address_mandatory": {
    "type": "String"
  },
  "ekashu_card_first_name": {
    "type": "String"
  },
  "ekashu_card_hash": {
    "type": "String"
  },
  "ekashu_card_iin": {
    "type": "String"
  },
  "ekashu_card_last_name": {
    "type": "String"
  },
  "ekashu_card_name_mandatory": {
    "type": "String"
  },
  "ekashu_card_name_required": {
    "type": "String"
  },
  "ekashu_card_phone_number": {
    "type": "String"
  },
  "ekashu_card_phone_number_mandatory": {
    "type": "String"
  },
  "ekashu_card_phone_number_type": {
    "type": "String"
  },
  "ekashu_card_reference": {
    "type": "String"
  },
  "ekashu_card_scheme": {
    "type": "String"
  },
  "ekashu_card_state": {
    "type": "String"
  },
  "ekashu_card_title": {
    "type": "String"
  },
  "ekashu_card_title_mandatory": {
    "type": "String"
  },
  "ekashu_card_zip_code": {
    "type": "String"
  },
  "ekashu_card_zip_code_result": {
    "type": "String"
  },
  "ekashu_card_zip_code_verify": {
    "type": "String"
  },
  "ekashu_cof_id": {
    "type": "String"
  },
  "ekashu_cof_initiated_by": {
    "type": "String"
  },
  "ekashu_cof_reason": {
    "type": "String"
  },
  "ekashu_currency": {
    "type": "String"
  },
  "ekashu_date_time_local": {
    "type": "String"
  },
  "ekashu_date_time_local_fmt": {
    "type": "String"
  },
  "ekashu_date_time_utc": {
    "type": "String"
  },
  "ekashu_date_time_utc_fmt": {
    "type": "String"
  },
  "ekashu_delivery_address_1": {
    "type": "String"
  },
  "ekashu_delivery_address_2": {
    "type": "String"
  },
  "ekashu_delivery_address_editable": {
    "type": "String"
  },
  "ekashu_delivery_address_is_card_address": {
    "type": "String"
  },
  "ekashu_delivery_address_required": {
    "type": "String"
  },
  "ekashu_delivery_city": {
    "type": "String"
  },
  "ekashu_delivery_country": {
    "type": "String"
  },
  "ekashu_delivery_email_address": {
    "type": "String"
  },
  "ekashu_delivery_email_address_mandatory": {
    "type": "String"
  },
  "ekashu_delivery_first_name": {
    "type": "String"
  },
  "ekashu_delivery_last_name": {
    "type": "String"
  },
  "ekashu_delivery_phone_number": {
    "type": "String"
  },
  "ekashu_delivery_phone_number_mandatory": {
    "type": "String"
  },
  "ekashu_delivery_phone_number_type": {
    "type": "String"
  },
  "ekashu_delivery_state": {
    "type": "String"
  },
  "ekashu_delivery_title": {
    "type": "String"
  },
  "ekashu_delivery_title_mandatory": {
    "type": "String"
  },
  "ekashu_delivery_zip_code": {
    "type": "String"
  },
  "ekashu_description": {
    "type": "String"
  },
  "ekashu_device": {
    "type": "String"
  },
  "ekashu_duplicate_check": {
    "type": "String"
  },
  "ekashu_duplicate_minutes": {
    "type": "Date"
  },
  "ekashu_expires_end_month": {
    "type": "Date"
  },
  "ekashu_expires_end_year": {
    "type": "Date"
  },
  "ekashu_failure_return_text": {
    "type": "String"
  },
  "ekashu_failure_url": {
    "type": "String"
  },
  "ekashu_hash_code": {
    "type": "String"
  },
  "ekashu_hash_code_format": {
    "type": "String"
  },
  "ekashu_hash_code_result": {
    "type": "String"
  },
  "ekashu_hash_code_result_format": {
    "type": "String"
  },
  "ekashu_hash_code_result_type": {
    "type": "String"
  },
  "ekashu_hash_code_result_version": {
    "type": "String"
  },
  "ekashu_hash_code_type": {
    "type": "String"
  },
  "ekashu_hash_code_version": {
    "type": "String"
  },
  "ekashu_include_post": {
    "type": "String"
  },
  "ekashu_invoice_address_1": {
    "type": "String"
  },
  "ekashu_invoice_address_2": {
    "type": "String"
  },
  "ekashu_invoice_address_editable": {
    "type": "String"
  },
  "ekashu_invoice_address_is_card_address": {
    "type": "String"
  },
  "ekashu_invoice_address_required": {
    "type": "String"
  },
  "ekashu_invoice_city": {
    "type": "String"
  },
  "ekashu_invoice_country": {
    "type": "String"
  },
  "ekashu_invoice_email_address": {
    "type": "String"
  },
  "ekashu_invoice_email_address_mandatory": {
    "type": "String"
  },
  "ekashu_invoice_first_name": {
    "type": "String"
  },
  "ekashu_invoice_last_name": {
    "type": "String"
  },
  "ekashu_invoice_phone_number": {
    "type": "String"
  },
  "ekashu_invoice_phone_number_mandatory": {
    "type": "String"
  },
  "ekashu_invoice_phone_number_type": {
    "type": "String"
  },
  "ekashu_invoice_state": {
    "type": "String"
  },
  "ekashu_invoice_title": {
    "type": "String"
  },
  "ekashu_invoice_title_mandatory": {
    "type": "String"
  },
  "ekashu_invoice_zip_code": {
    "type": "String"
  },
  "ekashu_issue_number": {
    "type": "String"
  },
  "ekashu_locale": {
    "type": "String"
  },
  "ekashu_masked_card_number": {
    "type": "Date"
  },
  "ekashu_merchant_category_code": {
    "type": "String"
  },
  "ekashu_moto_payment": {
    "type": "String"
  },
  "ekashu_payment_account_reference": {
    "type": "String"
  },
  "ekashu_payment_method": {
    "type": "Date"
  },
  "ekashu_payment_methods": {
    "type": "Date"
  },
  "ekashu_paypal_token": {
    "type": "String"
  },
  "ekashu_paypal_transaction_id": {
    "type": "String"
  },
  "ekashu_products": {
    "type": "String"
  },
  "ekashu_recipient_account_number": {
    "type": "String"
  },
  "ekashu_recipient_account_number_is_card_number": {
    "type": "String"
  },
  "ekashu_recipient_date_of_birth_day": {
    "type": "String"
  },
  "ekashu_recipient_date_of_birth_month": {
    "type": "String"
  },
  "ekashu_recipient_date_of_birth_year": {
    "type": "String"
  },
  "ekashu_recipient_fields": {
    "type": "String"
  },
  "ekashu_recipient_last_name": {
    "type": "String"
  },
  "ekashu_recipient_zip_code": {
    "type": "String"
  },
  "ekashu_reference": {
    "type": "String"
  },
  "ekashu_request_type": {
    "type": "String"
  },
  "ekashu_return_text": {
    "type": "String"
  },
  "ekashu_return_url": {
    "type": "String"
  },
  "ekashu_seller_address": {
    "type": "String"
  },
  "ekashu_seller_email_address": {
    "type": "String"
  },
  "ekashu_seller_id": {
    "type": "String"
  },
  "ekashu_seller_key": {
    "type": "String"
  },
  "ekashu_seller_name": {
    "type": "String"
  },
  "ekashu_shortcut_icon": {
    "type": "String"
  },
  "ekashu_style_sheet": {
    "type": "String"
  },
  "ekashu_success_url": {
    "type": "String"
  },
  "ekashu_title": {
    "type": "String"
  },
  "ekashu_transaction_id": {
    "type": "String"
  },
  "ekashu_valid_from_month": {
    "type": "Date"
  },
  "ekashu_valid_from_year": {
    "type": "Date"
  },
  "ekashu_verification_value_mask": {
    "type": "String"
  },
  "ekashu_verification_value_result": {
    "type": "String"
  },
  "ekashu_verification_value_verify": {
    "type": "String"
  },
  "ekashu_viewport": {
    "type": "String"
  }
});

const paymentSuccess = mongoose.model("paymentSuccess", paymentSuccessSchema);
module.exports = paymentSuccess;