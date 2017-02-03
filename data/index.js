(function() {
    console.log('Start');


});
$.ajax({
    type: "GET",
    url: "crm.json",
    dataType: "json",
    success: JsonFunction


});

function JsonFunction(data) {

    for (i = 0; i < data.customers.length; i++) {
        var id = (data.customers[i].id);
        var first_name = (data.customers[i].first_name);
        var last_name = (data.customers[i].last_name);
        var company = (data.customers[i].company);
        var role = (data.customers[i].role);
        var phone = (data.customers[i].phone);
        var email = (data.customers[i].email);
        var description = (data.customers[i].description);

        $('#Données').append("id: " + id + "<br>" + "Prénom: " + first_name + "<br>" + "Nom: " + last_name + "<br>" + "Entreprise: " + company + "<br>" + "Emploi: " + role + "<br>" + "Téléphone: " + phone + "<br>" + "Mail: " + email + "<br>" + "Description: " + description + "<br><br>");
    };
};



function ajaxFailed() {
    console.log('failed');

};

$('#envoyer').click('text', function(e) {
    e.preventDefault(); // J'empêche le comportement par défaut du navigateur, c-à-d de soumettre le formulaire

    var $this = $(this); // L'objet jQuery du formulaire

    // Je récupère les valeurs
    var prenom = $('#first_name').val();
    var nom = $('#last_name').val();
    console.log(nom);
    console.log(prenom);

    // Je vérifie une première fois pour ne pas lancer la requête HTTP
    // si je sais que mon PHP renverra une erreur
    if (prenom === '' || nom === '') {
        alert('Les champs doivent êtres remplis');
    } else {
        // Envoi de la requête HTTP en mode asynchrone
        $.ajax({
            url: 'crm.json', // Le nom du fichier indiqué dans le formulaire
            type: 'post', // La méthode indiquée dans le formulaire (get ou post)
            data: $this.serialize(), // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
            success: function(html) { // Je récupère la réponse du fichier PHP
                alert(html); // J'affiche cette réponse
            }
        });
    }
});