/*--HTML2PDF.JS----------------------------------------------------------------*/
function pdf_save () {
    const element = document.getElementById("affichage");

    html2pdf()
    .from(element)
    .save();
}
//AFFICHER/MASQUER LE FORMULAIRE
    function hide_form () {
        if (document.getElementById('formulaire').classList != 'hide'){
            document.getElementById('formulaire').classList.add('hide');
        }else{
            document.getElementById('formulaire').classList.remove('hide');
        }
    }
    // Chargement des données à l'ouverture de la page
        //N°FACTURE
        document.getElementById("affichage_numero_facture").innerHTML = localStorage.getItem("facture"); 
        document.getElementById("affichage_date").innerHTML = localStorage.getItem("date"); 
        document.getElementById("affichage_echeance").innerHTML = localStorage.getItem("echeance"); 
        document.getElementById("affichage_mois").innerHTML = localStorage.getItem("mois"); 
        document.getElementById("affichage_quantite").innerHTML = localStorage.getItem("quantite"); 
        document.getElementById("affichage_total").innerHTML = localStorage.getItem("total"); 
        document.getElementById("affichage_total_1").innerHTML = localStorage.getItem("total"); 
        document.getElementById("affichage_total_2").innerHTML = localStorage.getItem("total"); 
        document.getElementById("affichage_total_3").innerHTML = localStorage.getItem("total"); 
        document.getElementById("affichage_description").innerHTML = localStorage.getItem("description"); 
        document.getElementById("affichage_description_total").innerHTML = localStorage.getItem("quantite"); 
    // ENREGISTREMENT DES DONNÉES
        function enregistrer_form() {	
            //N°FACTURE
            var facture = document.getElementById("facture_numero_form");
            localStorage.setItem("facture", facture.value);
            //DATE
            var date = document.getElementById("date_form");
            localStorage.setItem("date", date.value);
            //ECHEANCE
            var echeance = document.getElementById("echeance_form");
            localStorage.setItem("echeance", echeance.value);
            //MOIS
            var mois = document.getElementById("mois_form");
            localStorage.setItem("mois", mois.value);
            //QUANTITE
            var quantite = document.getElementById("quantite_form");
            localStorage.setItem("quantite", quantite.value);
            //PRIX TOTAL
            var total = document.getElementById("total_prix_form");
            localStorage.setItem("total", total.value);
            //DESCRIPTION
            var description = document.getElementById("description_form");
            localStorage.setItem("description", description.value);

            window.location.reload();   
        }


/* 
   - N°Facture ok 
   - Date  ok
   - Echeance ok
   - Mois ok 
   - Quantites_heures ok
   - Total_prix
   - Description
*/