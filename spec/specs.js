describe ('Place', function() {
  it("creates a new place with given properties", function() {
    var testPlace = new Place("Portland", "Powell's Books");
    expect(testPlace.locationName).to.equal("Portland");
    expect(testPlace.landmarkName).to.equal("Powell's Books");
    expect(testPlace.timeYearName).to.equal("Spring");
  });
  it("adds the fullInfo method to a contact", function() {
    var testPlace = new Place("Portland", "Powell's Books", "Spring");
    expect(testPlace.fullInfo()).to.equal("Portland, Powell's Books, Spring");
  });
});
