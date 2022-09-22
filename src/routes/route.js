const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const bookControllers = require("../controllers/bookController")
const { authentication, authorisation } = require("../middlewares/auth")



//========== post api users===========================
router.post("/register", userController.registerUser)

//============login api================
router.post("/login", userController.login)


// =============== Create Book api ==================

router.post("/books", authentication, bookControllers.createBook)

// =================getbook api=============//
router.get("/books", authentication, bookControllers.getBook)

//=================getBookById==============
router.get("/books/:bookId", authentication,authorisation, bookControllers.getBookById)

// ===================delete api======================//
router.delete("/books/:bookId",authentication, authorisation, bookControllers.deleteById)

//=========================== if the endpoint are correct or not ==========================================
router.all("*", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Invalid Url"
    })
})

module.exports = router;