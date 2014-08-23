Meteor.startup(function(){
	if(navigator && navigator.camera && navigator.camera.getPicture)
		alert('found');
	else
		alert('not found');
});

Template.hello.events({
	'click button': function (evt, tmp) {
		evt.preventDefault();
		alert('Ngon');
	}
})