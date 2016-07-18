var userVm = {
    name: ko.observable("David")
}

registerViewModel(userVm, document.getElementById("userContainer"));