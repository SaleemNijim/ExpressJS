const homeController = (req, res) => {

    const data = {
        name: 'saleem',
        userId: 10
    }


    res.render("index", data)
}

export { homeController }

