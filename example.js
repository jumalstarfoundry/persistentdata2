

if (Meteor.isClient) {

  // counter starts at 0
  Session.setDefault('sampleSessionVariable', 0);

  Template.hello.helpers({
    numberOfClicks: function () {
      return Session.get('sampleSessionVariable');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      currentValue = Session.get('sampleSessionVariable');
      Session.set('sampleSessionVariable', currentValue + 1);

      var mySelector = {_id: "NGrjFAnnNmGkJBdhb"}; //
      var myModifier = {$inc: {click1: 1}};
      
      PersistentClicks.update(mySelector, myModifier);
            
//    collection.update(selector, modifier, [options], [callback])
      
    }

  });
}

