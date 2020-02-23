function blabla (req, res, next) {
    res.render('index', { title: 'Express' });
}

module.exports = {
    blabla: blabla
}