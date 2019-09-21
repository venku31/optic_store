export default {
  onload: function(frm) {
    if (!['Stock Manager'].some(role => frappe.user_roles.includes(role))) {
      frm.set_df_property('purpose', 'options', ['Material Transfer']);
    }
  },
  refresh: function(frm) {
    if (
      !['Stock Manager'].some(role => frappe.user_roles.includes(role)) &&
      frm.doc.__islocal
    ) {
      frm.set_value('purpose', 'Material Transfer');
    }
  },
};
