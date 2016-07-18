var userVm = {
    name: ko.observable("David"),
    age: ko.observable("31")

}

registerViewModel(userVm, document.getElementById("userContainer"));