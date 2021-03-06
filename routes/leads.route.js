module.exports = function(app, _db) {


    // GET ALL LEADS (RENDER PAGE)
    app.get('/leads', function(req, res) {

        _db.collection('_events08').find().sort({_id: -1}).toArray(function(err, result) {
            if (err) {
                throw err;
            }
            res.render("leads/lista", { lista: result })
        });
        
    });

    // GET ALL LEADS (JSON)
    app.get('/api/leads', function(req, res) {

        _db.collection('_events08').find().toArray(function(err, result) {
            if (err) {
                throw err;
            }
            res.send(result);
        });

    });

    // POST LEAD API
    app.post('/api/leads', function(req, res) {

        try {

            var collection = _db.collection('_events08');
            collection.save(req.body);

            //res.send(200);

            .then(function(result) {
                res.statusCode(200).send(result);
            })
            .catch(error => res.statusCode(error).send(error))

            //document
            /*
            {
                "nome": "Danilo",
                "sobrenome": "Caetano",
                "idade": 27,
                "email": "danilo@astarlabs.com",
                "telefone": "11992553804",
                "cidade": "São Paulo",
                "uf": "SP",
                "nomeEmpresa": "Astar Labs",
                "ramoAtuacao": "Software",
                "numeroFuncionarios": "10",
                "folhaPagamento": "Sim",
                "eSocial": "Sim",
                "empresaFolha": "Build Up",
                "dataCadastro": new Date("<YYYY-mm-ddTHH:MM:ss>")
            }
            */

        } catch (error) {
            res.status(500).send(error);

        }
    })
}
