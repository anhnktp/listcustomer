'use strict'
function openProfileDropdown() {
	var profileDropdown = document.getElementById("profileDropdown");	profileDropdown.classList.toggle("profileDropdownShow");
}

function openSubMenu(ele) {
	var i;
	//8888888888888888
	var menuItem = document.getElementsByClassName("menuItem");
	for (i=0;i<=menuItem.length-1;i++) {
		if (menuItem[i] != ele)
		menuItem[i].classList.remove("active");
	}
	//88888888888888888
	var subMenu = document.getElementsByClassName("subMenu");
	for (i=0;i<=subMenu.length-1;i++) {
		if (subMenu[i] != ele.nextElementSibling) {
			subMenu[i].classList.remove("subMenuShow");	subMenu[i].previousElementSibling.classList.remove("active");
		}
	}
	ele.nextElementSibling.classList.toggle("subMenuShow");
	ele.classList.toggle("active");
}

function openSideBar() {
	var sideBar = document.getElementById("sideBar");
	var pageWrapper = document.getElementById("pageWrapper");
	var openSideBarBtn = document.getElementById("openSideBarBtn");
	var subMenu = document.getElementsByClassName("subMenu");
	var i;
	/*for (i=0;i<=subMenu.length-1;i++) {
		subMenu[i].classList.remove("subMenuShow");
		subMenu[i].previousElementSibling.classList.remove("active");
	}*/
	sideBar.classList.toggle("sideBarShow");
	pageWrapper.classList.toggle("pageWrapperPush");
	openSideBarBtn.classList.toggle("openSideBarBtnPush");
}