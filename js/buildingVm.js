var buildingVm = {
    name: ko.observable("Liberty University"),
    stories: ko.observable("3")
}

registerViewModel(buildingVm, document.getElementById("buildingContainer"));