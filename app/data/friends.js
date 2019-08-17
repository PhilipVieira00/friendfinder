function Friend(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = [];
}

friendArray = [{

}];
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);
    friendArray.push(newFriend);
    res.json(newFriend);
})

app.get("/api/friends", function(req, res) {
    return res.json(friendArray);
})