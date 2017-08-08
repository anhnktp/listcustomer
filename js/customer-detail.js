function customer_changeType() {
	var customerType = document.getElementById("customerType");
	var personItem = document.getElementsByClassName("info_person");
	var orgItem = document.getElementsByClassName("info_org");
	var i;
	if (customerType.options[customerType.selectedIndex].value == 'person') {
		for (i=0;i<=personItem.length-1;i++) {
			personItem[i].classList.remove("hidden");
		}
		for (i=0;i<=orgItem.length-1;i++) {
			orgItem[i].classList.add("hidden");
		}
	}
	else {
		for (i=0;i<=personItem.length-1;i++) {
			personItem[i].classList.add("hidden");
		}
		for (i=0;i<=orgItem.length-1;i++) {
			orgItem[i].classList.remove("hidden");
		}
	}
}
	

function customer_changecountry() {
	var customer_country = document.getElementById("customer_country");
	var customer_city = document.getElementById("customer_city");
	var customer_city_other = document.getElementById("customer_city_other");
	if (customer_country.options[customer_country.selectedIndex].value == 'Viet Nam')	{
		customer_city.classList.remove("hidden");
		customer_city_other.classList.add("hidden");
	}
	else {
		customer_city.classList.add("hidden");
		customer_city_other.classList.remove("hidden");
	}
}