const User = require("../models/user");

// const createUser = (req, res) => {
//   res.render("user");
//   console.log(req.body);
//   // const user = new User({
//   //   name: req.body.name,
//   //   age: req.body.age,
//   //   email: req.body.email,
//   //   username: req.body.username,
//   //   password: req.body.password,
//   // });
//   // user.save();
// };

// const store = async (req, res, nex) => {
//   console.log(req.body);
//   res.send("hello");
//   const data = await User.create(req.body);
//   console.log(data);
// };
// // const getUser = (req, res) => {
// //   User.findById(req.params.id, (err, user) => {
// //     if (err) {
// //       return next(err);
// //     }
// //     res.send(user);
// //   });
// // };


// // const deleteUser = (req, res) => {
// //   User.findByIdAndRemove(req.params.id, (err) => {
// //     if (err) {
// //       return next(err);
// //     }
// //     res.send("User deleted successfully");
// //   });
// // };



class userController {
  async showRegistrationForm(req, res, next) {
    res.render("user");
  }

  async storeData(req, res, next) {
    const rows = await User.create(req.body);
    res.redirect("/table");
  }

  async showTables(req, res) {
    var userData = await User.find({});
    console.log(userData);
    res.render("table", {
      rows: userData,
    });
  }

  async editUser(req, res) {
    console.log(req.params);
    // const updateUrl = "/update/" + req.params.id;
    // console.log(updateUrl);
    const data = await User.findById(req.params.id);
    const rows = [data]
    console.log(rows);
    res.render('edit', {
      rows: rows,
      // updateUrl: updateUrl
    })
  }

  async updateUser(req, res) {
    console.log(req.params);
    const id = req.body.id;
    console.log(id);
    return
    const update = req.body
    const row = await User.findByIdAndUpdate(_id = id, {
      update
    });
    console.log(row)

    res.redirect("/table");
  }

  async delUser(req, res, next) {
    // console.log(req.params);
    // return false;
    // Delete the document by its _id
    const id = req.params.id
    // console.log(id);
    // return false
    const del = await User.deleteOne({
      _id: id
    });
    console.log(del);
    res.redirect("/table");
  }
}

module.exports = new userController();