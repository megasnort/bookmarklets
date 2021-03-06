javascript:(function () {
	var e, f, lastRadioButton;
	/* fill in the value, and dispatch change event */
	var trg = function (e, value) {
		switch (e.type) {
			case 'checkbox':
			case 'radio':
				e.checked = value;
				break;
			case 'select-one':
				e.selectedIndex = value;
				break;
			default:
				e.value = value
		}
		if ('createEvent' in document) {
			var evt = document.createEvent('HTMLEvents');
			evt.initEvent('change', false, true);
			e.dispatchEvent(evt);
		} else {
			e.fireEvent('onchange');
		}
	};
	/* use the focused form, else use the first non-search form */
	if (typeof document.activeElement.form != 'undefined') {
		f = document.activeElement.form;
	} else {
		for (var i = 0; i < document.forms.length; i++) {
			if (document.forms[i].id != 'search') {
				f = document.forms[i];
				break;
			}
		}
	}
	for (var i = f.elements.length - 1; i > -1; i--) {
		e = f.elements[i];
		if (e.className.indexOf('js-selectize') != -1 || e.name == '' || e.className.indexOf('select2') != -1 || e.type == 'hidden' || e.name == 'promo_code' ) {
			continue;
		}
		if (e.name == 'Ecom_Payment_Card_Name') {
			trg(e, 'Stef Wijs');
		} else if (e.name == 'Ecom_Payment_Card_Number') {
			trg(e, '4111111111111111');
		} else if (e.name == 'Ecom_Payment_Card_ExpDate_Month') {
			trg(e, 1);
		} else if (e.name == 'Ecom_Payment_Card_ExpDate_Year') {
			trg(e, 6);
		} else if (e.name == 'Ecom_Payment_Card_Verification') {
			trg(e, '123');
		} else if (e.name == 'year' && e.type == 'select-one') {
			trg(e, 20);
		} else if (e.type == 'email' || e.name.indexOf('e-mail') > -1 || e.name.indexOf('email') > -1) {
			trg(e, 'stef@wijs.be');
		} else if (e.name.indexOf('phone') > -1 || e.name.indexOf('gsm') > -1 || e.name.indexOf('mobile') > -1) {
			trg(e, '0499999999');
		} else if (e.name.indexOf('first_name') > -1 || e.name.indexOf('firstname') > -1) {
			trg(e, 'Stef');
		} else if (e.name.indexOf('last_name') > -1 || e.name.indexOf('lastname') > -1) {
			trg(e, 'Bastiaansen');
		} else if (e.name.indexOf('name') > -1) {
			trg(e, 'Stef Bastiaansen');
		} else if (e.name.indexOf('year') > -1) {
			trg(e, '1982');
		} else if (e.name.indexOf('bus') > -1) {
			trg(e, '003');
		} else if (e.name.indexOf('number') > -1 || e.name.indexOf('_nr') > -1) {
			trg(e, '31');
		} else if (e.name.indexOf('street') > -1 || e.name.indexOf('address') > -1) {
			trg(e, 'Voorhavenlaan');
		} else if (e.name.indexOf('departement') > -1 || e.name.indexOf('province') > -1) {
			trg(e, 'Oost-Vlaanderen');
		} else if (e.type == 'text' && e.name.indexOf('country') > -1) {
			trg(e, 'België');
		} else if (e.name.indexOf('postal') > -1 || e.name.indexOf('zip') > -1) {
			trg(e, '9000');
		} else if (e.name.indexOf('city') > -1 || e.name.indexOf('place') > -1) {
			trg(e, 'Gent');
		} else if (e.name.indexOf('department') > -1) {
			trg(e, 'development');
		} else if (e.name.indexOf('function') > -1) {
			trg(e, 'developer');
		} else if (e.type == 'checkbox') {
			trg(e, true);
		} else if (e.type == 'radio' && e.name != lastRadioButton) {
			trg(e, true);
			lastRadioButton = e.name;
		} else if (e.type == 'select-one') {
			trg(e, 1);
		} else if (e.type == 'text') {
			trg(e, 'Not your random test data');
		}
	}
})();
