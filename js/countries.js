'use strict';

// Populate the country select box
document.addEventListener("DOMContentLoaded", function() {
    const countrySelect = document.getElementById('country');
    
    const countries = [ "Afganistán", "Albania", "Argelia", "Andorra", "Angola", "Antigua y Barbuda", "Argentina", "Armenia",
    "Australia", "Austria", "Azerbaiyán", "Bahamas", "Baréin", "Bangladés", "Barbados", "Bielorrusia", "Bélgica",
    "Belice", "Benín", "Bután", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Camboya", "Camerún", "Canadá", "República Centroafricana", "Chad",
    "Chile", "China", "Colombia", "Comoras", "República Democrática del Congo", "República del Congo",
    "Costa Rica", "Croacia", "Cuba", "Chipre", "República Checa", "Dinamarca", "Yibuti", "Dominica", "República Dominicana",
    "Timor Oriental", "Ecuador", "Egipto", "El Salvador", "Guinea Ecuatorial", "Eritrea", "Estonia", "Esuatini", "Etiopía",
    "Fiyi", "Finlandia", "Francia", "Gabón", "Gambia", "Georgia", "Alemania", "Ghana", "Grecia", "Granada", "Guatemala",
    "Guinea", "Guinea-Bisáu", "Guyana", "Haití", "Honduras", "Hungría", "Islandia", "India", "Indonesia", "Irán", "Irak",
    "Irlanda", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kiribati", "Corea del Norte",
    "Corea del Sur", "Kosovo", "Kuwait", "Kirguistán", "Laos", "Letonia", "Líbano", "Lesoto", "Liberia", "Libia",
    "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malaui", "Malasia", "Maldivas", "Malí", "Malta",
    "Islas Marshall", "Mauritania", "Mauricio", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro",
    "Marruecos", "Mozambique", "Birmania", "Namibia", "Nauru", "Nepal", "Países Bajos", "Nueva Zelanda", "Nicaragua", "Níger",
    "Nigeria", "Macedonia del Norte", "Noruega", "Omán", "Pakistán", "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea",
    "Paraguay", "Perú", "Filipinas", "Polonia", "Portugal", "Catar", "Rumania", "Rusia", "Ruanda", "San Cristóbal y Nieves",
    "Santa Lucía", "San Vicente y las Granadinas", "Samoa", "San Marino", "Santo Tomé y Príncipe", "Arabia Saudita",
    "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Eslovaquia", "Eslovenia", "Islas Salomón", "Somalia",
    "Sudáfrica", "Sudán del Sur", "España", "Sri Lanka", "Sudán", "Surinam", "Suecia", "Suiza", "Siria", "Taiwán",
    "Tayikistán", "Tanzania", "Tailandia", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turquía", "Turkmenistán",
    "Tuvalu", "Uganda", "Ucrania", "Emiratos Árabes Unidos", "Reino Unido", "Estados Unidos", "Uruguay", "Uzbekistán",
    "Vanuatu", "Ciudad del Vaticano", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabue"    ];

    countries.forEach(function(country) {
        const option = document.createElement('option');
        option.value = country;
        option.text = country;
        countrySelect.appendChild(option);
    });
});

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});
